import express from 'express';
import { createLogger } from '../helpers';
import axios from 'axios';
import ytdl from '@distube/ytdl-core';
import { spawn } from 'child_process';
import { Writable } from 'stream';
import { TwitterDL } from 'twitter-downloader';
import { TwitterDownload } from '../web-app/src/types/DownloadsTypes';

// logging
const console = createLogger('Downloaders');

const router = express.Router();

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
			res.setHeader('Content-Disposition', `attachment; filename="${makeFilenameSafe(info.videoDetails.title)}.mp4"`);
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

export const service = {
	path: '/api/downloader',
	router: router,
};

export function makeFilenameSafe(title: string, replacement: string = '_'): string {
	// Remove leading/trailing whitespace
	let safeTitle = title.trim();

	// Define characters that are not allowed in filenames across different OS
	const invalidChars = /[<>:"/\\|?*\x00-\x1F]/g; // Windows & Unix illegal characters
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

	// Ensure filename isn't empty
	return safeTitle.length > 0 ? safeTitle : 'untitled';
}
