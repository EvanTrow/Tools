import { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, CircularProgress, Card, CardContent, Divider, Stack, CardHeader, Box, LinearProgress } from '@mui/material';
import { Download, Reddit as RedditIcon } from '@mui/icons-material';
import ToolTitle from '../../components/ToolTitle';
import { Tool } from '../AllTools';
import { useSnackbar } from 'notistack';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { makeFilenameSafe } from './YouTube';
import { RedditDownload } from '../../types/DownloadsTypes';

export const tool: Tool = {
	title: 'Reddit',
	pageTitle: 'Reddit Downloader',
	description: 'Download videos from Reddit',
	path: '/downloader/reddit',
	page: Reddit,
	icon: <RedditIcon />,
};
export default tool;

function Reddit() {
	const { enqueueSnackbar } = useSnackbar();

	const [url, setUrl] = useState('');
	const [loading, setLoading] = useState(false);
	const [download, setDownload] = useState<RedditDownload | null>(null);

	const [downloading, setDownloading] = useState(false);
	const [downloaded, setDownloaded] = useState(false);

	const handleDownload = async () => {
		setLoading(true);
		setDownload(null);
		setDownloading(false);
		setDownloaded(false);

		try {
			const data = (await axios.post('/api/downloader/reddit', { url })).data;
			setDownload(data);
		} catch (err: any) {
			console.error(err);
			enqueueSnackbar(err?.response?.data?.error || 'Failed to download video.', { variant: 'error' });
		} finally {
			setLoading(false);
		}
	};

	function downloadFile() {
		setDownloading(true);
		var xhr = new XMLHttpRequest();
		const params = `url=${url}&download=true`;
		xhr.open('POST', '/api/downloader/reddit', true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.responseType = 'blob';
		xhr.onload = function () {
			var urlCreator = window.URL || window.webkitURL;
			var imageUrl = urlCreator.createObjectURL(this.response);
			var tag = document.createElement('a');
			tag.href = imageUrl;
			tag.target = '_blank';
			tag.download = makeFilenameSafe(`${download?.title}.mp4` || 'video.mp4');
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

	return (
		<Container maxWidth='sm'>
			<ToolTitle tool={tool} />
			<TextField
				label='Enter Reddit URL'
				variant='outlined'
				fullWidth
				value={url}
				onChange={(e) => setUrl(e.target.value)}
				margin='normal'
				disabled={loading}
				onKeyUp={(e) => {
					if (e.key === 'Enter') {
						handleDownload();
					}
				}}
			/>
			<Button variant='contained' color='primary' onClick={handleDownload} disabled={loading} fullWidth>
				{loading ? <CircularProgress size={24} /> : 'Download'}
			</Button>

			{download && (
				<>
					<Divider sx={{ my: 2 }} />
					<Card>
						<CardHeader title={download.title} subheader={`r/${download.subreddit} • u/${download.author}`} />

						<MediaPlayer title={'download.title'} src={download.secure_media.reddit_video.dash_url} fullscreenOrientation='none' loop>
							<MediaProvider />
							<DefaultVideoLayout icons={defaultLayoutIcons} />
						</MediaPlayer>
						<CardContent>
							<Typography variant='body2' color='text.secondary'>
								Up Votes: {download.ups.toLocaleString()}
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
								<Stack direction='row' spacing={1} sx={{ p: 1, flexWrap: 'wrap' }} useFlexGap>
									<Button variant='contained' onClick={() => downloadFile()} endIcon={<Download />}>
										Download MP4
									</Button>
								</Stack>
							)}
						</Box>
					</Card>
				</>
			)}
		</Container>
	);
}
