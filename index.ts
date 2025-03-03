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
import { downloaderRoutes } from './services/Downloaders';

// logging
const console = createLogger('Server');

// get config path
require('dotenv').config();

// console.log('Config path:', configPath);

// import { authenticate, authenticateSocket } from './authenticate';
// import { connected } from './services/databaseService';

// import { userRoutes } from './services/userService';
// import { adminRoutes } from './services/adminService';
// import { initializeUserStatusService } from './services/userStatusService';
// import { searchService } from './services/searchService';
// import { requestRoutes } from './services/requestService';
// import { plexRoutes } from './services/plexService';
// import { openSubtitlesRoutes } from './services/openSubtitlesService';
// import { megaRoutes } from './services/megaService';
// import { downloadRoutes } from './services/downloadService';
// import { fileSystemRoutes } from './services/fileSystemService';
// import { utilRoutes } from './services/utilService';
// import { pfSenseRoutes } from './services/pfSenseService';
// import { snahpRoutes } from './services/snahpService';

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

app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/dist')));

// Mount the routes
app.use('/api/downloader', downloaderRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/search', searchService);
// app.use('/api/snahp', snahpRoutes);
// app.use('/api/requests', requestRoutes);
// app.use('/api/plex', plexRoutes);
// app.use('/api/opensubtitles', openSubtitlesRoutes);
// app.use('/api/mega', megaRoutes);
// app.use('/api/downloads', downloadRoutes);
// app.use('/api/pfsense', pfSenseRoutes);
// app.use('/api/fs', fileSystemRoutes);
// app.use('/api/util', utilRoutes);

// Middleware to ensure trailing slash for '/vnc' route
// app.use('/api/vnc', authenticate);
app.use('/api/vnc', (req, res, next) => {
	if (req.originalUrl === '/api/vnc') return res.redirect(301, req.originalUrl + '/');
	next();
});
app.use(
	'/api/vnc',
	createProxyMiddleware({
		target: process.env.VNC_URL ? String(process.env.VNC_URL) : 'http://localhost:5800', // The target site you're proxying to
		changeOrigin: true, // Needed for virtual hosted sites
		ws: true, // Enable WebSocket proxying
		pathRewrite: {
			'^/api/vnc/': '/', // Remove '/vnc/' from the path before proxying
		},
	})
);

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
