import { useState } from 'react';
import { TextField, Container, Box, Grid2, Divider } from '@mui/material';
import ToolTitle from '../../components/ToolTitle';
import { useSnackbar } from 'notistack';
import SvgRepo from '../../components/SvgRepo';
import { Tool } from '../AllTools';

const tool: Tool = {
	title: 'Base64',
	pageTitle: 'Base64 Encoder/Decoder',
	description: 'Convert text to and from base64',
	path: '/converter/base64',
	page: Base64,
	icon: <SvgRepo url='/icons/base64.svg' padding={0.25} cors={false} />,
};
export default tool;

function Base64() {
	const { enqueueSnackbar } = useSnackbar();

	const [text, setText] = useState('');
	const [base64, setBase64] = useState('');

	return (
		<Container maxWidth='md'>
			<ToolTitle tool={tool} />
			<Grid2 container spacing={2} direction={{ xs: 'column', md: 'row' }}>
				<Grid2 size={{ xs: 12 }}>
					<TextField
						label='Text'
						multiline
						minRows={3}
						variant='outlined'
						fullWidth
						value={text}
						onChange={(e) => {
							setText(e.target.value);
							try {
								setBase64(btoa(e.target.value));
							} catch (error) {
								enqueueSnackbar('Error encoding Base64', { variant: 'error' });
								setText('');
							}
						}}
					/>
				</Grid2>
				<Grid2 size={{ xs: 12 }}>
					<Divider />
				</Grid2>
				<Grid2 size={{ xs: 12 }}>
					<TextField
						label='Base64'
						multiline
						minRows={3}
						variant='outlined'
						fullWidth
						value={base64}
						onChange={(e) => {
							setBase64(e.target.value);
							try {
								setText(atob(e.target.value));
							} catch (error) {
								enqueueSnackbar('Error decoding Base64', { variant: 'error' });
								setText('');
							}
						}}
					/>
				</Grid2>
			</Grid2>
		</Container>
	);
}
