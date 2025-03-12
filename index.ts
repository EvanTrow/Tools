import express from 'express';
import http from 'http';
import fs from 'fs';
import path from 'path';

import { spawn } from 'child_process';

import { createLogger } from '@root/helpers';

import { Server } from 'socket.io';
import bodyParser from 'body-parser';
import cors from 'cors';
import swagger from './swagger';

import unzipper from 'unzipper';
import { Extension } from './web-app/src/types/Types';

// get config path
require('dotenv').config();

// logging
const console = createLogger('Server');

// create express app
const app = express();
const server = http.createServer(app);
export const io = new Server(server, {
	path: '/api_ws',
	cors: {
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	},
});
const port = process.env.PORT || 8080;

app.use(
	cors({
		origin: '*',
		allowedHeaders: ['content-type'],
		credentials: true,
	})
);
app.use(bodyParser.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/dist')));

const runNpm = (params: string[], cwd: string): Promise<void> => {
	console.log(`Running 'npm ${params.join(' ')}'...`);
	return new Promise((resolve, reject) => {
		const npmPath = process.platform === 'win32' ? 'C:\\Program Files\\nodejs\\npm.cmd' : 'npm';
		const npm = spawn(npmPath, params, {
			cwd: cwd,
		});
		npm.stdout.on('data', (data) => {
			console.log(data.toString());
		});
		npm.stderr.on('data', (data) => {
			console.error(data.toString());
		});
		npm.on('close', (code) => {
			if (code === 0) {
				resolve();
			} else {
				reject(new Error(`child process exited with code ${code}`));
			}
		});
	});
};

(async function () {
	// install default frontend packages
	if (process.env.NODE_ENV === 'production') {
		await runNpm(['install'], path.join(__dirname, 'web-app'));
	}

	// Install extensions
	const extensionsDir = path.join(__dirname, '/extensions');
	if (fs.existsSync(extensionsDir)) {
		for (const extensionFile of fs.readdirSync(extensionsDir)) {
			if (!extensionFile.endsWith('.zip')) continue;
			const extensionName = extensionFile.replace('.zip', '');
			const extractedPath = path.join(extensionsDir, extensionName);

			try {
				console.log(`Installing extension: ${extensionFile}...`);

				// unzip the extension
				await fs
					.createReadStream(path.join(extensionsDir, extensionFile))
					.pipe(unzipper.Extract({ path: path.join(extensionsDir, extensionName) }))
					.promise();

				const { packages, webPackages }: Extension = JSON.parse(fs.readFileSync(path.join(extractedPath, 'extension.json'), 'utf8'));
				fs.rmSync(path.join(extractedPath, 'extension.json'));

				// install extra backend packages
				if (packages.length > 0) {
					await runNpm(['install', ...packages], __dirname);
				}

				// install extra frontend packages
				if (webPackages.length > 0) {
					await runNpm(['install', ...webPackages], path.join(__dirname, 'web-app'));
				}

				// move extracted files to the root of the project recursively
				const moveFilesRecursively = (srcDir: string, destDir: string) => {
					fs.readdirSync(srcDir).forEach((file) => {
						const srcPath = path.join(srcDir, file);
						const destPath = path.join(destDir, file);
						if (fs.lstatSync(srcPath).isDirectory()) {
							// create the directory in the destination if it doesn't exist
							if (!fs.existsSync(destPath)) {
								fs.mkdirSync(destPath);
							}
							// recursively move files
							moveFilesRecursively(srcPath, destPath);
						} else {
							fs.copyFileSync(srcPath, destPath);
							console.log(`Copying ${srcPath} > ${destPath}`);
						}
					});
				};

				moveFilesRecursively(extractedPath, __dirname);

				// remove the extracted directory
				fs.rmSync(extractedPath, { recursive: true });
			} catch (error) {
				fs.rmSync(extractedPath, { recursive: true });
				console.error('Failed to install extension:', extensionFile, error);
			}
		}
	}

	// Build the web app
	if (process.env.NODE_ENV === 'production') {
		await runNpm(['run', 'build'], path.join(__dirname, 'web-app'));
	}

	// Mount the service routes
	const servicesDir = path.join(__dirname, 'services');
	if (fs.existsSync(servicesDir)) {
		fs.readdirSync(servicesDir).forEach((file) => {
			try {
				const name = path.parse(file).name;
				const service = require(path.join(servicesDir, file)).service;
				app.use(service.path, service.router);
				console.log(`Service Loaded: ${name} > ${service.path}`);
			} catch (error) {
				console.error(`Failed to load service: ${file}:`, error);
				return;
			}
		});
	}

	// initialize swagger docs
	swagger(app);

	// Handle other routes
	app.get('*', (req, res) => {
		if (fs.existsSync(path.join(__dirname, 'dist/index.html'))) {
			res.sendFile(path.join(__dirname, 'dist/index.html'));
		} else {
			res.send(`<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Tools | Collection of handy online tools for developers</title>
				<style>
					body {
						font-family: Arial, sans-serif;
						display: flex;
						justify-content: center;
						align-items: center;
						height: 100vh;
						margin: 0;
						background-color: #f0f0f0;
					}
					.container {
						text-align: center;
					}
					h1 {
						color: #333;
					}
				</style>
				<script>
					setTimeout(() => {
						location.reload();
					}, 15000);
				</script>
			</head>
			<body>
				<div class="container">
					<h1>Starting Services...</h1>
				</div>
			</body>
			</html>`);
		}
	});

	server.listen(port, () => {
		console.info(`Server is listening on port ${port}`);
	});
})();
