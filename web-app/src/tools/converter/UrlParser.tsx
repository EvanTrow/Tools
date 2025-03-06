import { useState, useEffect } from 'react';
import { TextField, Container, Box, Grid2, Divider, Button, IconButton } from '@mui/material';
import ToolTitle from '../../components/ToolTitle';
import { Tool } from '../AllTools';
import { useSnackbar } from 'notistack';
import { Add, Delete } from '@mui/icons-material';
import SvgRepo from '../../components/SvgRepo';

export const tool: Tool = {
	title: 'URL Parser',
	pageTitle: 'URL Parser',
	description: 'Parse and edit URL parts',
	path: '/converter/url-parser',
	page: UrlParser,
	icon: <SvgRepo url='https://www.svgrepo.com/show/452391/url-parameter.svg' removeColor={['#1F2328']} />,
};
export default tool;

function UrlParser() {
	const { enqueueSnackbar } = useSnackbar();

	const [url, setUrl] = useState('https://me:pwd@localhost:3000/url-parser?key1=value&key2=value2#the-hash');
	const [urlParts, setUrlParts] = useState({
		protocol: 'https:',
		username: 'me',
		password: 'pwd',
		hostname: 'localhost',
		port: '3000',
		path: '/url-parser',
		params: [
			{ key: 'key1', value: 'value' },
			{ key: 'key2', value: 'value2' },
		],
		hash: '#the-hash',
	});

	useEffect(() => {
		const timeoutId = setTimeout(updateUrl, 15);
		return () => clearTimeout(timeoutId);
	}, [urlParts]);

	const parseUrl = (urlString: string) => {
		try {
			const urlObj = new URL(urlString);
			const params = Array.from(urlObj.searchParams.entries()).map(([key, value]) => ({ key, value }));
			setUrlParts({
				protocol: urlObj.protocol,
				username: urlObj.username,
				password: urlObj.password,
				hostname: urlObj.hostname,
				port: urlObj.port,
				path: urlObj.pathname,
				params,
				hash: urlObj.hash,
			});
		} catch (error) {
			enqueueSnackbar('Error parsing URL', { variant: 'error' });
		}
	};

	const updateUrl = () => {
		try {
			let urlString = '';
			if (urlParts.protocol) urlString += `${urlParts.protocol}//`;
			if (urlParts.username) urlString += `${urlParts.username}`;
			if (urlParts.password) urlString += `:${urlParts.password}`;
			if (urlParts.username || urlParts.password) urlString += '@';
			if (urlParts.hostname) urlString += urlParts.hostname;
			if (urlParts.port) urlString += `:${urlParts.port}`;
			if (urlParts.path) urlString += urlParts.path;
			const urlObj = new URL(urlString);
			urlParts.params.forEach(({ key, value }) => urlObj.searchParams.set(key, value));
			if (urlParts.hash) urlObj.hash = urlParts.hash;
			setUrl(urlObj.toString());
		} catch (error) {
			enqueueSnackbar('Error updating URL', { variant: 'error' });
		}
	};

	const handleParamChange = (index: number, key: string, value: string) => {
		const newParams = [...urlParts.params];
		newParams[index] = { key, value };
		setUrlParts({ ...urlParts, params: newParams });
	};

	const addParam = () => {
		setUrlParts({ ...urlParts, params: [...urlParts.params, { key: '', value: '' }] });
	};

	const removeParam = (index: number) => {
		const newParams = urlParts.params.filter((_, i) => i !== index);
		setUrlParts({ ...urlParts, params: newParams });
	};

	return (
		<Container maxWidth='md'>
			<ToolTitle tool={tool} />
			<Grid2 container spacing={2}>
				<Grid2 size={{ xs: 12 }}>
					<TextField
						label='URL'
						variant='outlined'
						fullWidth
						value={url}
						onChange={(e) => {
							setUrl(e.target.value);
							parseUrl(e.target.value);
						}}
					/>
				</Grid2>
				<Grid2 size={{ xs: 12 }}>
					<Divider />
				</Grid2>
				<Grid2 size={{ xs: 12 }}>
					<TextField label='Protocol' variant='outlined' size='small' fullWidth value={urlParts.protocol} onChange={(e) => setUrlParts({ ...urlParts, protocol: e.target.value })} />
				</Grid2>
				<Grid2 size={{ xs: 12 }}>
					<TextField label='Username' variant='outlined' size='small' fullWidth value={urlParts.username} onChange={(e) => setUrlParts({ ...urlParts, username: e.target.value })} />
				</Grid2>
				<Grid2 size={{ xs: 12 }}>
					<TextField label='Password' variant='outlined' size='small' fullWidth value={urlParts.password} onChange={(e) => setUrlParts({ ...urlParts, password: e.target.value })} />
				</Grid2>
				<Grid2 size={{ xs: 12 }}>
					<TextField label='Hostname' variant='outlined' size='small' fullWidth value={urlParts.hostname} onChange={(e) => setUrlParts({ ...urlParts, hostname: e.target.value })} />
				</Grid2>
				<Grid2 size={{ xs: 12 }}>
					<TextField
						label='Port'
						variant='outlined'
						size='small'
						fullWidth
						value={urlParts.port}
						onChange={(e) => {
							const port = Math.max(0, Math.min(65535, Number(e.target.value)));
							setUrlParts({ ...urlParts, port: port.toString() });
						}}
						type='number'
					/>
				</Grid2>
				<Grid2 size={{ xs: 12 }}>
					<TextField label='Path' variant='outlined' size='small' fullWidth value={urlParts.path} onChange={(e) => setUrlParts({ ...urlParts, path: e.target.value })} />
				</Grid2>
				<Grid2 size={{ xs: 12 }}>
					<Divider />
				</Grid2>
				{urlParts.params.map((param, index) => (
					<Grid2 container size={{ xs: 12 }} spacing={2} key={index}>
						<Grid2 size='grow'>
							<TextField label='Key' variant='outlined' size='small' fullWidth value={param.key} onChange={(e) => handleParamChange(index, e.target.value, param.value)} />
						</Grid2>
						<Grid2 size='grow'>
							<TextField label='Value' variant='outlined' size='small' fullWidth value={param.value} onChange={(e) => handleParamChange(index, param.key, e.target.value)} />
						</Grid2>
						<Grid2 size='auto'>
							<IconButton onClick={() => removeParam(index)}>
								<Delete />
							</IconButton>
						</Grid2>
					</Grid2>
				))}
				<Grid2 size={{ xs: 12 }}>
					<Button variant='outlined' size='small' startIcon={<Add />} onClick={addParam}>
						Add Param
					</Button>
				</Grid2>
				<Grid2 size={{ xs: 12 }}>
					<TextField label='Hash' variant='outlined' size='small' fullWidth value={urlParts.hash} onChange={(e) => setUrlParts({ ...urlParts, hash: e.target.value })} />
				</Grid2>
			</Grid2>
		</Container>
	);
}
