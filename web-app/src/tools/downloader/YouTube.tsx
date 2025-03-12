import { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, CircularProgress, Card, CardContent, CardMedia, Avatar, CardHeader, Divider, Box, Stack, LinearProgress } from '@mui/material';
import { YouTubeDownload } from '../../types/DownloadsTypes';
import { Download, YouTube } from '@mui/icons-material';
import ToolTitle from '../../components/ToolTitle';
import { Tool } from '../AllTools';
import { useSnackbar } from 'notistack';
import DownloadAgreement from '../../components/DownloadAgreement';

const tool: Tool = {
	title: 'YouTube',
	pageTitle: 'YouTube Downloader',
	description: 'Download videos from YouTube',
	path: '/downloader/youtube',
	page: Youtube,
	icon: <YouTube />,
};
export default tool;

function Youtube() {
	const { enqueueSnackbar } = useSnackbar();

	const [url, setUrl] = useState('');
	const [loading, setLoading] = useState(false);
	const [download, setDownload] = useState<YouTubeDownload | null>(null);
	const [downloading, setDownloading] = useState(false);
	const [downloaded, setDownloaded] = useState(false);

	const handleDownload = async () => {
		setLoading(true);
		setDownload(null);
		setDownloading(false);
		setDownloaded(false);
		try {
			const data = (await axios.post('/api/downloader/youtube', { url })).data as YouTubeDownload;
			setDownload(data);
		} catch (err: any) {
			console.error(err);
			enqueueSnackbar('Failed to download video', { variant: 'error' });
		} finally {
			setLoading(false);
		}
	};

	function downloadFile(quality: string) {
		setDownloading(true);
		var xhr = new XMLHttpRequest();
		const params = `url=${url}&quality=${quality}`;
		xhr.open('POST', '/api/downloader/youtube', true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.responseType = 'blob';
		xhr.onload = function () {
			var urlCreator = window.URL || window.webkitURL;
			var imageUrl = urlCreator.createObjectURL(this.response);
			var tag = document.createElement('a');
			tag.href = imageUrl;
			tag.target = '_blank';
			tag.download = makeFilenameSafe(`${download?.videoDetails.title}.mp4` || 'video.mp4');
			document.body.appendChild(tag);
			tag.click();
			document.body.removeChild(tag);
			setDownloaded(true);
		};
		xhr.onerror = (err) => {
			console.error(err);
			enqueueSnackbar('Failed to download file', { variant: 'error' });
		};
		xhr.send(params);
	}

	const groupByHeight = (formats: any[]): Record<number, any[]> => {
		return formats
			.filter((f) => f.height !== undefined)
			.reduce((acc, format) => {
				if (!acc[format.height ?? 0]) {
					acc[format.height ?? 0] = [];
				}
				acc[format.height ?? 0].push(format);
				return acc;
			}, {} as Record<number, any[]>);
	};
	const groupedFormats = groupByHeight(download?.formats ?? []);

	// https://www.youtube.com/watch?v=udO6bDeIhmM
	return (
		<Container maxWidth='sm'>
			<DownloadAgreement />
			<ToolTitle tool={tool} />
			<TextField label='Enter YouTube URL' variant='outlined' fullWidth value={url} onChange={(e) => setUrl(e.target.value)} margin='normal' />
			<Button variant='contained' color='primary' onClick={handleDownload} disabled={loading} fullWidth>
				{loading ? <CircularProgress size={24} /> : 'Download'}
			</Button>

			{download && (
				<>
					<Divider sx={{ my: 2 }} />
					<Card>
						<CardHeader
							avatar={<Avatar alt={download.videoDetails.author.name} src={download.videoDetails.author.thumbnails.sort((a, b) => b.height - a.height)[0]?.url} />}
							title={download.videoDetails.title}
							subheader={download.videoDetails.author.name}
						/>
						<CardMedia component='img' height='300' image={download.videoDetails.thumbnails.sort((a, b) => b.height - a.height)[0]?.url} alt={download.videoDetails.title} />
						<CardContent>
							<Typography variant='body2' color='text.secondary'>
								Duration: {formatVideoDuration(parseInt(download.videoDetails.lengthSeconds))}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Views: {parseInt(download.videoDetails.viewCount).toLocaleString()}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Likes: {download.videoDetails.likes.toLocaleString()}
							</Typography>
						</CardContent>
						<Box sx={{ p: 1 }}>
							{downloading ? (
								<>
									<Typography variant='body2' color='text.secondary'>
										{downloaded ? 'Complete!' : 'Downloading...'}
									</Typography>
									{!downloaded && <LinearProgress />}
								</>
							) : (
								<Stack direction='column' spacing={1} maxWidth={'100%'}>
									{Object.entries(groupedFormats).map(([height, formats]) => (
										<Button
											key={height}
											variant={height === '1080' ? 'contained' : 'outlined'}
											fullWidth
											endIcon={<Download />}
											onClick={() => {
												let download = formats.find((f) => f.container === 'webm');
												if (!download) download = formats[0];
												if (download.qualityLabel) downloadFile(String(download.itag));
											}}
										>
											Download {height}P
										</Button>
									))}
								</Stack>
							)}
						</Box>
					</Card>
				</>
			)}
		</Container>
	);
}

export function formatVideoDuration(seconds: number): string {
	if (seconds < 0) throw new Error('Seconds cannot be negative');

	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secs = seconds % 60;

	if (hours > 0) {
		return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
	}

	return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

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
