import express from 'express';
import { createLogger } from '@root/helpers';
import axios from 'axios';
import ytdl from '@distube/ytdl-core';
import scdl from 'soundcloud-downloader';
import Spotify from '@root/lib/spotifydl-core';

import { spawn } from 'child_process';
import { Writable } from 'stream';
import { TwitterDL } from 'twitter-downloader';
import { TwitterDownload } from '../web-app/src/types/DownloadsTypes';
import contentDisposition from 'content-disposition';

// logging
const console = createLogger('Downloaders');

const router = express.Router();

/**
 * @openapi
 * /api/downloader/svgRepo:
 *   get:
 *     summary: Fetches an SVG from a given URL.
 *     tags:
 *       - Downloader
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: true
 *         description: The URL of the SVG to fetch.
 *     responses:
 *       200:
 *         description: SVG content fetched successfully.
 *         content:
 *           image/svg+xml:
 *             schema:
 *               type: string
 *       400:
 *         description: Missing or invalid URL parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/svgRepo', async (req, res) => {
	try {
		const svgUrl = req.query.url as string;
		if (!svgUrl) {
			return res.status(400).json({ error: 'Missing url parameter' });
		}

		const response = await axios.get(svgUrl);
		if (response.status !== 200) {
			return res.status(400).json({ error: 'Failed to fetch SVG' });
		}

		const svgContent = response.data;
		res.setHeader('Content-Type', 'image/svg+xml');
		res.setHeader('Cache-Control', 'public, max-age=2592000'); // Cache for 30 days
		res.send(svgContent);
	} catch (error) {
		console.error('Error fetching system settings:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

/**
 * @openapi
 * /api/downloader/tiktok:
 *   post:
 *     summary: Downloads a TikTok video from a given URL.
 *     tags:
 *       - Downloader
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL of the TikTok video to download.
 *     responses:
 *       200:
 *         description: TikTok video data fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TikTokDownload'
 *       400:
 *         description: Missing or invalid URL parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/tiktok', async (req, res) => {
	try {
		const url = req.body?.url as string;
		if (!url) {
			return res.status(400).json({ error: 'Missing url parameter' });
		}

		console.log('Downloading TikTok video:', url);

		const response = await axios.get(`https://www.tikwm.com/api`, {
			headers: {
				accept: 'application/json, text/javascript, */*; q=0.01',
				'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
				// 'cookie': 'current_language=en; _ga=GA1.1.115940210.1660795490; _gcl_au=1.1.669324151.1660795490; _ga_5370HT04Z3=GS1.1.1660795489.1.1.1660795513.0.0.0',
				'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
			},
			params: {
				url: url,
				count: 12,
				cursor: 0,
				web: 1,
				hd: 1,
			},
		});
		if (response.status !== 200) {
			return res.status(400).json({ error: 'Failed to fetch tiktok video.' });
		}
		if (response.data.code === -1) {
			return res.status(400).json({ error: response.data.msg });
		}

		res.send({
			...response.data.data,
			cover: `https://www.tikwm.com${response.data.data.cover}`,
			play: `https://www.tikwm.com${response.data.data.play}`,
			hdplay: `https://www.tikwm.com${response.data.data.hdplay}`,
			wmplay: `https://www.tikwm.com${response.data.data.wmplay}`,
			music: `https://www.tikwm.com${response.data.data.music}`,
			author: {
				...response.data.data.author,
				avatar: `https://www.tikwm.com${response.data.data.author.avatar}`,
			},
		});
	} catch (error) {
		console.error('Error fetching system settings:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

/**
 * @swagger
 * /api/downloader/youtube:
 *   post:
 *     summary: Downloads a YouTube video from a given URL. FFmpeg is used to merge video and audio streams.
 *     tags:
 *       - Downloader
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL of the YouTube video to download.
 *               quality:
 *                 type: string
 *                 description: The desired quality of the video.
 *                 required: false
 *     responses:
 *       200:
 *         description: YouTube video data fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/YouTubeDownload'
 *           video/mp4:
 *             schema:
 *               type: string
 *               format: binary
 *       400:
 *         description: Missing or invalid URL parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/youtube', async (req, res) => {
	try {
		const url = req.body?.url as string;
		const quality = req.body?.quality as string;

		if (!url) {
			return res.status(400).json({ error: 'Missing url parameter' });
		}
		console.log('Downloading YouTube video:', url, quality);

		const info = await ytdl.getInfo(url);

		// Set response headers
		if (quality) {
			// Get the best available video and audio streams from YouTube
			const videoStream = ytdl(url, { quality: quality });
			const audioStream = ytdl(url, { quality: 'highestaudio' });
			res.setHeader('Content-Disposition', `attachment; filename="${contentDisposition(makeFilenameSafe(info.videoDetails.title))}.mp4"`);
			res.setHeader('Content-Type', 'video/mp4');

			const ffmpegProcess = spawn(
				'ffmpeg',
				[
					'-y',
					'-i',
					'pipe:3', // video input
					'-i',
					'pipe:4', // audio input
					'-c:v',
					'copy',
					// '-c:a',
					// 'aac',
					'-movflags',
					'frag_keyframe+empty_moov',
					'-f',
					'mp4',
					'pipe:1',
				],
				{
					stdio: [
						'inherit', // ffmpeg's own stdin
						'pipe', // ffmpeg's stdout
						'inherit', // ffmpeg's stderr (so we see any errors in console)
						'pipe', // ffmpeg's pipe:3 (video input)
						'pipe', // ffmpeg's pipe:4 (audio input)
					],
				}
			);

			// Pipe the final MP4 output from ffmpeg straight to the client
			if (ffmpegProcess.stdout) {
				ffmpegProcess.stdout.pipe(res);
			} else {
				console.error('FFmpeg stdout is null');
				res.status(500).json({ error: 'Internal server error' });
			}

			// Pipe ytdl’s video and audio streams to ffmpeg’s corresponding input pipes
			videoStream.pipe(ffmpegProcess.stdio[3] as Writable);
			audioStream.pipe(ffmpegProcess.stdio[4] as Writable);

			ffmpegProcess.on('close', (code) => {
				console.log(`FFmpeg closed, exit code: ${code}`);
			});
		} else {
			res.send(info);
		}
	} catch (error) {
		console.error('Error merging video/audio with GPU encoding:', error);
		return res.status(500).json({ error: 'Internal server error' });
	}
});

/**
 * @openapi
 * /api/downloader/twitter:
 *   post:
 *     summary: Downloads a Twitter video from a given URL.
 *     tags:
 *       - Downloader
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL of the Twitter video to download.
 *     responses:
 *       200:
 *         description: Twitter video data fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TwitterDownload'
 *       400:
 *         description: Missing or invalid URL parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/twitter', async (req, res) => {
	try {
		const url = req.body?.url as string;
		if (!url) {
			return res.status(400).json({ error: 'Missing url parameter' });
		}
		console.log('Downloading Twitter video:', url);

		const data = (await TwitterDL(url)).result as TwitterDownload;
		if (data.media.filter((media) => media.type === 'video').length === 0) {
			return res.status(400).json({ error: 'No video found in tweet' });
		}

		res.send(data);
	} catch (error) {
		console.error('Error downloading Twitter video:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

/**
 * @openapi
 * /api/downloader/reddit:
 *   post:
 *     summary: Downloads a Reddit video from a given URL. FFmpeg is used to merge video and audio streams.
 *     tags:
 *       - Downloader
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL of the Reddit video to download.
 *               download:
 *                 type: boolean
 *                 description: Whether to download the video or just return the post data.
 *                 required: false
 *     responses:
 *       200:
 *         description: Reddit video data fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RedditDownload'
 *           video/mp4:
 *             schema:
 *               type: string
 *               format: binary
 *       400:
 *         description: Missing or invalid URL parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       404:
 *         description: No video found in the Reddit post.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/reddit', async (req, res) => {
	try {
		const url = req.body?.url as string;
		const download = req.body?.download as boolean;
		if (!url) {
			return res.status(400).json({ error: 'Missing url parameter' });
		}
		console.log('Downloading Reddit video:', url);

		// Convert Reddit post URL to JSON API URL
		const jsonUrl = url.endsWith('/') ? `${url}.json` : `${url}/.json`;
		const { data } = await axios.get(jsonUrl, {
			headers: { 'User-Agent': 'Mozilla/5.0' },
		});

		// Navigate JSON structure to find video URL
		const post = data[0].data.children[0].data;
		if (!post || !post.secure_media || !post.secure_media.reddit_video) {
			return res.status(404).json({ error: 'No video found in this post' });
		}

		if (!download) {
			return res.send(post);
		} else {
			const dashContent = (await axios.get(post.secure_media.reddit_video.dash_url, { responseType: 'text' })).data;

			const baseUrl = post.url;
			const videoUrl = `${baseUrl}/${
				dashContent.match(/DASH_\d+\.\w+/g)?.sort((a: any, b: any) => {
					const aBitrate = parseInt(a.match(/\d+/)?.[0] || '0', 10);
					const bBitrate = parseInt(b.match(/\d+/)?.[0] || '0', 10);
					return bBitrate - aBitrate;
				})[0]
			}`;
			const audioUrl = `${baseUrl}/${
				dashContent.match(/DASH_AUDIO_\d+\.\w+/g)?.sort((a: any, b: any) => {
					const aBitrate = parseInt(a.match(/\d+/)?.[0] || '0', 10);
					const bBitrate = parseInt(b.match(/\d+/)?.[0] || '0', 10);
					return bBitrate - aBitrate;
				})[0]
			}`;

			const ffmpegProcess = spawn(
				'ffmpeg',
				[
					'-y',
					'-i',
					videoUrl, // video input
					'-i',
					audioUrl, // audio input
					'-c:v',
					'copy',
					'-c:a',
					'aac',
					'-movflags',
					'frag_keyframe+empty_moov',
					'-f',
					'mp4',
					'pipe:1',
				],
				{
					stdio: [
						'inherit', // ffmpeg's own stdin
						'pipe', // ffmpeg's stdout
						'inherit', // ffmpeg's stderr (so we see any errors in console)
					],
				}
			);

			// Set response headers
			res.setHeader('Content-Disposition', `attachment; filename="${contentDisposition(makeFilenameSafe(post.title))}.mp4"`);
			res.setHeader('Content-Type', 'video/mp4');

			// Pipe the final MP4 output from ffmpeg straight to the client
			if (ffmpegProcess.stdout) {
				ffmpegProcess.stdout.pipe(res);
			} else {
				console.error('FFmpeg stdout is null');
				res.status(500).json({ error: 'Internal server error' });
			}

			ffmpegProcess.on('close', (code) => {
				console.log(`FFmpeg closed, exit code: ${code}`);
			});
		}
	} catch (error) {
		console.error('Error downloading Reddit video:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

/**
 * @swagger
 * /api/downloader/music:
 *   post:
 *     summary: Downloads music from Spotify, SoundCloud or YouTube.
 *     tags:
 *       - Downloader
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL of the Spotify, SoundCloud or YouTube music to download.
 *               download:
 *                 type: boolean
 *                 description: Whether to download the music or just return the post data.
 *                 required: false
 *     responses:
 *       200:
 *         description: Spotify, SoundCloud or YouTube music data fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: Title of the post.
 *                 author:
 *                   type: string
 *                   description: Author of the post.
 *           audio/mp3:
 *             schema:
 *               type: string
 *               format: binary
 *       400:
 *         description: Missing or invalid URL parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/music', async (req, res) => {
	try {
		const url = req.body?.url as string;
		const download = req.body?.download as boolean;
		if (!url) {
			return res.status(400).json({ error: 'Missing url parameter' });
		}

		const credentials = {
			clientId: process.env.SPOTIFY_CLIENT_ID ?? '',
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? '',
		};
		const spotify = new Spotify(credentials);

		let host,
			ytInfo,
			scInfo,
			spInfo = null;
		try {
			ytInfo = await ytdl.getInfo(url);
			host = 'youtube';
		} catch {}
		try {
			scInfo = await scdl.getInfo(url);
			host = 'soundcloud';
		} catch {}
		try {
			spInfo = await spotify.getTrack(url);
			host = 'spotify';
		} catch {}
		if (!host) {
			return res.status(400).json({ error: 'Invalid URL host' });
		}
		let info = {
			title: 'music',
			author: 'unknown',
		};

		switch (host) {
			case 'youtube':
				info = {
					title: ytInfo?.videoDetails?.title ?? 'music',
					author: ytInfo?.videoDetails?.author?.name ?? 'unknown',
				};
				break;
			case 'soundcloud':
				info = {
					title: scInfo?.title ?? 'music',
					author: scInfo?.user?.username ?? 'unknown',
				};

				break;
			case 'spotify':
				info = {
					title: spInfo?.name ?? 'music',
					author: spInfo?.artists[0] ?? 'unknown',
				};
				break;
		}

		console.log(`Downloading ${host} music: ${info.title} - ${info.author}`, url);
		if (!download) {
			return res.send(info);
		} else {
			res.setHeader('Content-Disposition', `attachment; filename="${contentDisposition(`${info.title} - ${info.author}`)}.mp3"`);
			res.setHeader('Content-Type', 'audio/mp3');
			switch (host) {
				case 'youtube':
					ytdl(url, { quality: 'highestaudio' }).pipe(res);
					break;
				case 'soundcloud':
					(await scdl.downloadFormat(url, scdl.FORMATS.MP3)).pipe(res);
					break;
				case 'spotify':
					const spotifyStream = await spotify.downloadTrack(url); // Downloading goes brr brr
					spotifyStream.pipe(res);
					break;
				default:
					return res.status(400).json({ error: 'Invalid host parameter' });
			}
		}
	} catch (error) {
		console.error('Error downloading music:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

export const service = {
	path: '/api/downloader',
	router: router,
};

export function makeFilenameSafe(title: string, replacement: string = '_'): string {
	// Remove leading/trailing whitespace
	let safeTitle = title.trim();

	// Define characters that are not allowed in filenames across different OS and Content-Disposition header
	const invalidChars = /[<>:"/\\|?*\x00-\x1F;=]/g; // Added ';' and '=' for Content-Disposition header
	const reservedNames = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i; // Windows reserved names
	const trailingDotsAndSpaces = /[. ]+$/; // Windows doesn't allow trailing spaces or dots

	// Replace invalid characters
	safeTitle = safeTitle.replace(invalidChars, replacement);

	// Replace reserved names
	if (reservedNames.test(safeTitle)) {
		safeTitle = '_' + safeTitle;
	}

	// Remove trailing dots and spaces
	safeTitle = safeTitle.replace(trailingDotsAndSpaces, '');

	safeTitle = safeTitle.replace(/[<>:"/\\|?*]+/g, '').replace(/&+/g, 'and');

	// Ensure filename isn't empty
	return safeTitle.length > 0 ? safeTitle : 'untitled';
}
