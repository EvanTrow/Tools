import express from 'express';
import { createLogger } from '../helpers';

import sharp from 'sharp';

const icoEndec = require('ico-endec');
const decodeIco = require('decode-ico');
const bmp = require('sharp-bmp');
const heicDecode = require('heic-decode');

// logging
const console = createLogger('Converters');

const router = express.Router();

router.use(express.raw({ type: 'image/*', limit: '25mb' })); // Accepts image uploads

router.post('/image/:convertTo', async (req, res) => {
	try {
		const { convertTo } = req.params;

		const filename = req.headers['file-name'] as string;
		const contentType = req.headers['content-type'] as string;

		if (!['image/png', 'image/jpeg', 'image/gif', 'image/tiff', 'image/bmp', 'image/x-icon', 'image/webp', 'image/heic'].includes(contentType)) {
			console.log('Unsupported format:', contentType);
			return res.status(400).json({ error: 'Unsupported format.' });
		}

		console.log(`Converting ${filename} to ${convertTo}.`);

		const buffer = Buffer.from(req.body);

		let image: any = null;

		switch (contentType) {
			case 'image/x-icon':
				image = await sharp(
					decodeIco(buffer)
						.filter((i: any) => i.type === 'png')
						.reduce((largest: any, current: any) => {
							return current.width * current.height > largest.width * largest.height ? current : largest;
						}).data
				);
				break;
			case 'image/bmp':
				const bitmap = bmp.decode(buffer);
				image = sharp(bitmap.data, {
					raw: {
						width: bitmap.width,
						height: bitmap.height,
						channels: 4,
					},
				});
				break;
			case 'image/heic':
				const {
					width, // integer width of the image
					height, // integer height of the image
					data, // Uint8ClampedArray containing pixel data
				} = await heicDecode({ buffer });
				image = sharp(data, {
					raw: {
						width,
						height,
						channels: 4,
					},
				});
				break;
			default:
				image = await sharp(buffer);
				break;
		}

		const metadata = await image.metadata();
		switch (convertTo) {
			case 'png':
				image = await image.png().toBuffer();
				res.setHeader('Content-Type', 'image/png');
				return res.send(image);
			case 'jpg':
				image = await image.jpeg().toBuffer();
				res.setHeader('Content-Type', 'image/jpeg');
				return res.send(image);
			case 'gif':
				image = await image.gif().toBuffer();
				res.setHeader('Content-Type', 'image/gif');
				return res.send(image);
			case 'tiff':
				image = await image.tiff().toBuffer();
				res.setHeader('Content-Type', 'image/tiff');
				return res.send(image);
			case 'heic':
				// sharp().heif({ compression: 'hevc' }).toBuffer().then((data) => {

				image = await image.heif({ compression: 'av1' }).toBuffer();
				res.setHeader('Content-Type', 'image/heif');
				return res.send(image);
			case 'ico':
				// Resize image to 256x256 if it's larger
				if ((metadata.width && metadata.width > 256) || (metadata.height && metadata.height > 256)) {
					image = image.resize({
						width: 256,
						height: 256,
						fit: sharp.fit.inside,
						withoutEnlargement: true,
					});
				}

				image = await image.png().toBuffer();
				image = icoEndec.encode([image]);

				res.setHeader('Content-Type', 'image/x-icon');
				return res.send(image);
			case 'bmp':
				const { data, info } = await image
					// If the image has alpha transparency channel
					.flatten({ background: '#ffffff' })
					// If the image has no alpha transparency channel
					.ensureAlpha()
					.raw()
					.toBuffer({ resolveWithObject: true });

				image = bmp.encode({
					data,
					width: info.width,
					height: info.height,
				}).data;

				res.setHeader('Content-Type', 'image/bmp');
				return res.send(image);
			case 'webp':
				image = await image.webp().toBuffer();
				res.setHeader('Content-Type', 'image/webp');
				return res.send(image);
			default:
				return res.status(400).json({ error: 'Unsupported format.' });
		}
	} catch (error) {
		console.error('Error processing image:', error);
		res.status(500).json({ error: 'Internal Server Error.' });
	}
});

export const service = {
	path: '/api/downloader',
	router: router,
};
