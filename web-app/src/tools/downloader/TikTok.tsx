import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	TextField,
	Button,
	Typography,
	Container,
	CircularProgress,
	Card,
	CardContent,
	Avatar,
	CardHeader,
	ButtonGroup,
	ClickAwayListener,
	Grow,
	Paper,
	Popper,
	Divider,
	Stack,
	Box,
} from '@mui/material';
import { TikTokDownload } from '../../types/DownloadsTypes';
import { Download, ArrowDropDown, MusicNote, ContentCopy } from '@mui/icons-material';
import ToolTitle from '../../components/ToolTitle';
import { Tool } from '../AllTools';
import { formatVideoDuration } from './YouTube';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { useSnackbar } from 'notistack';
import SvgRepo from '../../components/SvgRepo';

export const tool: Tool = {
	title: 'TikTok',
	pageTitle: 'TikTok Downloader',
	description: 'Download videos from TikTok',
	path: '/downloader/tiktok',
	page: TikTok,
	icon: <SvgRepo url='https://www.svgrepo.com/show/473806/tiktok.svg' padding={0.25} />,
};
export default tool;

function TikTok() {
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
	const [download, setDownload] = useState<TikTokDownload | null>(null);

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const urlParam = urlParams.get('id');
		if (urlParam) {
			handleDownload(urlParam);
		}
	}, []);

	useEffect(() => {
		const handlePopState = () => {
			const urlParams = new URLSearchParams(window.location.search);
			const urlParam = urlParams.get('id');
			if (urlParam) {
				handleDownload(urlParam);
			}
		};

		window.addEventListener('popstate', handlePopState);

		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	}, []);

	const handleDownload = async (downloadUrl?: string) => {
		setLoading(true);
		setDownload(null);
		try {
			const data = (await axios.post('/api/downloader/tiktok', { url: downloadUrl || url })).data as TikTokDownload;
			setDownload(data);
			setUrl(`https://www.tiktok.com/@${data.author.unique_id}/video/${data.id}`);
			const newUrl = new URL(window.location.href);
			newUrl.searchParams.set('id', data.id);
			window.history.replaceState({}, '', newUrl.toString());
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
			tag.download = url.split('/').pop() || 'video.mp4';
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

	const copyToClipboard = () => {
		navigator.clipboard.writeText(window.location.href).then(() => {
			enqueueSnackbar('URL copied to clipboard!', { variant: 'info' });
		});
	};

	// https://www.tiktok.com/@claireedery/video/7466121696836160774
	return (
		<Container maxWidth='sm'>
			<ToolTitle tool={tool} />
			<TextField
				label='Enter TikTok URL'
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
						<CardHeader avatar={<Avatar alt={download.author.unique_id} src={download.author.avatar} />} title={download.title} subheader={download.author.unique_id} />

						<MediaPlayer title={download.title} src={download.play} fullscreenOrientation='none' loop>
							<MediaProvider />
							<DefaultVideoLayout icons={defaultLayoutIcons} />
							<Poster className='vds-poster' src={download.cover} alt={download.title} />
						</MediaPlayer>

						<CardContent>
							<Typography variant='body2' color='text.secondary'>
								Duration: {formatVideoDuration(download.duration)}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Views: {download.play_count.toLocaleString()}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Likes: {download.digg_count.toLocaleString()}
							</Typography>
						</CardContent>
						<Stack direction='row' spacing={1} sx={{ p: 1, flexWrap: 'wrap' }} useFlexGap>
							<Box>
								<ButtonGroup variant='contained' ref={anchorRef}>
									<Button onClick={() => downloadFile(download.play)} endIcon={<Download />}>
										Download MP4
									</Button>
									<Button onClick={handleToggle}>
										<ArrowDropDown />
									</Button>
								</ButtonGroup>
								<Popper
									sx={{
										zIndex: 1,
									}}
									open={open}
									anchorEl={anchorRef.current}
									role={undefined}
									transition
									disablePortal
									placement='bottom'
								>
									{({ TransitionProps, placement }) => (
										<Grow
											{...TransitionProps}
											style={{
												transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
											}}
										>
											<Paper>
												<ClickAwayListener onClickAway={handleClose}>
													<Button variant='outlined' color='warning' endIcon={<Download />} onClick={() => downloadFile(download.wmplay)} sx={{ mb: 0.5 }}>
														Watermarked MP4
													</Button>
												</ClickAwayListener>
											</Paper>
										</Grow>
									)}
								</Popper>
							</Box>
							<Button variant='contained' color='secondary' onClick={() => downloadFile(download.music)} endIcon={<MusicNote />}>
								Download MP3
							</Button>
							<Button variant='contained' color='inherit' onClick={copyToClipboard} endIcon={<ContentCopy />}>
								Copy Share Link
							</Button>
						</Stack>
					</Card>
				</>
			)}
		</Container>
	);
}
