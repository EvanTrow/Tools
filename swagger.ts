import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import * as TJS from 'typescript-json-schema';

import { version } from './package.json';
import { createLogger } from '@root/helpers';
import { resolve } from 'path';

const console = createLogger('Swagger');

const options: swaggerJsdoc.Options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Tools API',
			description: 'API for the tool endpoints.',
			version: version,
			contact: {
				name: 'GitHub',
				url: 'https://github.com/EvanTrow/Tools',
			},
		},
		components: {
			schemas: {
				TikTokDownload: TJS.generateSchema(
					TJS.getProgramFromFiles(
						[resolve('web-app/src/types/DownloadsTypes.tsx')],
						{
							strictNullChecks: true,
						},
						'./'
					),
					'TikTokDownload',
					{ required: true }
				),
				TwitterDownload: TJS.generateSchema(
					TJS.getProgramFromFiles(
						[resolve('web-app/src/types/DownloadsTypes.tsx')],
						{
							strictNullChecks: true,
						},
						'./'
					),
					'TwitterDownload',
					{ required: true }
				),
				YouTubeDownload: TJS.generateSchema(
					TJS.getProgramFromFiles(
						[resolve('web-app/src/types/DownloadsTypes.tsx')],
						{
							strictNullChecks: true,
						},
						'./'
					),
					'YouTubeDownload',
					{ required: true }
				),
				RedditDownload: TJS.generateSchema(
					TJS.getProgramFromFiles(
						[resolve('web-app/src/types/DownloadsTypes.tsx')],
						{
							strictNullChecks: true,
						},
						'./'
					),
					'RedditDownload',
					{ required: true }
				),
			},
		},
	},
	apis: ['./index.ts', './services/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export default function setupSwagger(app: Express) {
	app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

	app.get('/api/swagger.json', (req: Request, res: Response) => {
		res.setHeader('Content-Type', 'application/json');
		res.send(swaggerSpec);
	});

	console.log('Docs available at /api');
}
