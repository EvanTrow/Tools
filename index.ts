import express from 'express';
import http from 'http';
import fs from 'fs';
import path from 'path';

import util from 'util';
import { exec as execute } from 'child_process';

import { createLogger } from './helpers';

import { Server } from 'socket.io';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

// logging
const console = createLogger('Server');

// get config path
require('dotenv').config();

export const REX_FILES_ROOT = '/rex';
export const rexRootFolderExists = (): boolean => fs.existsSync(REX_FILES_ROOT);

export const exec = util.promisify(execute);
export const isWindows = process.platform === 'win32';

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

// Mount the routes
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

// Handle other routes
app.get('*', (req, res) => {
	if (fs.existsSync(path.join(__dirname + '/dist/index.html'))) {
		res.sendFile(path.join(__dirname + '/dist/index.html'));
	} else {
		res.status(404).send('Not Found');
	}
});

server.listen(port, () => {
	console.info(`Server is listening on port ${port}`);
});
