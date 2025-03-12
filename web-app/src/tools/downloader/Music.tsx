import { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, CircularProgress, Card, CardHeader, Divider, Stack, Box, LinearProgress } from '@mui/material';
import { Download, MusicNote } from '@mui/icons-material';
import ToolTitle from '../../components/ToolTitle';
import { Tool } from '../AllTools';
import { makeFilenameSafe } from './YouTube';

import { useSnackbar } from 'notistack';
import DownloadAgreement from '../../components/DownloadAgreement';

export const tool: Tool = {
	title: 'Music',
	pageTitle: 'Music Downloader',
	description: 'Download music from Spotify, SoundCloud or YouTube',
	path: '/downloader/music',
	page: Music,
	icon: <MusicNote />,
};
export default tool;

function Music() {
	const { enqueueSnackbar } = useSnackbar();

	const [url, setUrl] = useState('');
	const [loading, setLoading] = useState(false);
	const [download, setDownload] = useState<{ title: string; author: string } | null>(null);
	const [downloading, setDownloading] = useState(false);
	const [downloaded, setDownloaded] = useState(false);

	const handleDownload = async () => {
		setLoading(true);
		setDownload(null);
		setDownloading(false);
		setDownloaded(false);
		try {
			const data = (await axios.post('/api/downloader/music', { url })).data;
			setDownload(data);
		} catch (err: any) {
			console.error(err);
			enqueueSnackbar('Failed to download music', { variant: 'error' });
		} finally {
			setLoading(false);
		}
	};

	function downloadFile() {
		setDownloading(true);
		var xhr = new XMLHttpRequest();
		const params = `url=${url}&download=true`;
		xhr.open('POST', '/api/downloader/music', true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.responseType = 'blob';
		xhr.onload = function () {
			var urlCreator = window.URL || window.webkitURL;
			var imageUrl = urlCreator.createObjectURL(this.response);
			var tag = document.createElement('a');
			tag.href = imageUrl;
			tag.target = '_blank';
			tag.download = makeFilenameSafe(`${download?.title} - ${download?.author}.mp3` || 'music.mp3');
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

	// https://www.youtube.com/watch?v=udO6bDeIhmM
	// https://soundcloud.com/octobersveryown/drake-idgaf-feat-yeat
	// https://open.spotify.com/track/2b808IC3KHNMLU5vHjhcjg?si=6a28fb38361346c0
	return (
		<Container maxWidth='sm'>
			<DownloadAgreement />
			<ToolTitle tool={tool} />
			<TextField label='Enter YouTube, Spotify or SoundCloud URL' variant='outlined' fullWidth value={url} onChange={(e) => setUrl(e.target.value)} margin='normal' />
			<Button variant='contained' color='primary' onClick={handleDownload} disabled={loading} fullWidth>
				{loading ? <CircularProgress size={24} /> : 'Download'}
			</Button>

			{download && (
				<>
					<Divider sx={{ my: 2 }} />
					<Card>
						<CardHeader title={download.title} subheader={download.author} />
						{/* <CardMedia component='img' height='300' image={download.videoDetails.thumbnails.sort((a, b) => b.height - a.height)[0]?.url} alt={download.videoDetails.title} /> */}
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
										Download MP3
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
