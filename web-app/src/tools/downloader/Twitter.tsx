import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, CircularProgress, Card, CardContent, Avatar, CardHeader, Divider, Stack } from '@mui/material';
import { TwitterDownload } from '../../types/DownloadsTypes';
import { Download } from '@mui/icons-material';
import ToolTitle from '../../components/ToolTitle';
import { Tool } from '../../Router';
import { makeFilenameSafe } from './YouTube';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { useSnackbar } from 'notistack';

function Twitter({ tool }: { tool: Tool }) {
	const { enqueueSnackbar } = useSnackbar();

	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLDivElement>(null);
	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};
	const handleClose = (event: Event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}

		setOpen(false);
	};

	const [url, setUrl] = useState('');
	const [loading, setLoading] = useState(false);
	const [download, setDownload] = useState<TwitterDownload | null>(null);

	const handleDownload = async (downloadUrl?: string) => {
		setLoading(true);
		setDownload(null);
		try {
			const data = (await axios.post('/api/downloader/twitter', { url: downloadUrl || url })).data as TwitterDownload;
			setDownload(data);
		} catch (err: any) {
			console.error(err);
			enqueueSnackbar(err?.response?.data?.error || 'Failed to download video.', { variant: 'error' });
		} finally {
			setLoading(false);
		}
	};

	function downloadFile(url: string) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'blob';
		xhr.onload = function () {
			var urlCreator = window.URL || window.webkitURL;
			var imageUrl = urlCreator.createObjectURL(this.response);
			var tag = document.createElement('a');
			tag.href = imageUrl;
			tag.target = '_blank';
			tag.download = makeFilenameSafe(download?.description + '.mp4' || 'video.mp4');
			document.body.appendChild(tag);
			tag.click();
			document.body.removeChild(tag);
		};
		xhr.onerror = (err) => {
			console.error(err);
			enqueueSnackbar('Failed to download file', { variant: 'error' });
		};
		xhr.send();
	}

	// https://x.com/NoCapMediaa/status/1889570132307153094
	return (
		<Container maxWidth='sm'>
			<ToolTitle tool={tool} />
			<TextField
				label='Enter Twitter URL'
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
			<Button variant='contained' color='primary' onClick={() => handleDownload()} disabled={loading} fullWidth>
				{loading ? <CircularProgress size={24} /> : 'Download'}
			</Button>

			{download && (
				<>
					<Divider sx={{ my: 2 }} />
					<Card>
						<CardHeader avatar={<Avatar alt={download.author.username} src={download.author.profileImageUrl} />} title={download.description} subheader={download.author.username} />

						<MediaPlayer title={download.description} src={download.media[0].videos.sort((a, b) => b.bitrate - a.bitrate)[0].url} fullscreenOrientation='none' loop>
							<MediaProvider />
							<DefaultVideoLayout icons={defaultLayoutIcons} />
							<Poster className='vds-poster' src={download.media[0].cover} alt={download.description} />
						</MediaPlayer>

						<CardContent>
							<Typography variant='body2' color='text.secondary'>
								Duration: {download.media[0].duration}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Views: {download.statistics.viewCount.toLocaleString()}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Likes: {download.statistics.favoriteCount.toLocaleString()}
							</Typography>
						</CardContent>
						<Stack direction='row' spacing={1} sx={{ p: 1, flexWrap: 'wrap' }} useFlexGap>
							<Button variant='contained' onClick={() => downloadFile(download.media[0].videos.sort((a, b) => b.bitrate - a.bitrate)[0].url)} endIcon={<Download />}>
								Download MP4
							</Button>
						</Stack>
					</Card>
				</>
			)}
		</Container>
	);
}

export default Twitter;
