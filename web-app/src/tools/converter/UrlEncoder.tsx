import { useState } from 'react';
import { TextField, Container, Box, Grid2, Divider } from '@mui/material';
import ToolTitle from '../../components/ToolTitle';
import { Tool } from '../../Router';
import { useSnackbar } from 'notistack';

function UrlEncoder({ tool }: { tool: Tool }) {
	const { enqueueSnackbar } = useSnackbar();

	const [text, setText] = useState('');
	const [encoded, setEncoded] = useState('');

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
								setEncoded(encodeURIComponent(e.target.value));
							} catch (error) {
								enqueueSnackbar('Error encoding URL', { variant: 'error' });
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
						label='Encoded URL'
						multiline
						minRows={3}
						variant='outlined'
						fullWidth
						value={encoded}
						onChange={(e) => {
							setEncoded(e.target.value);
							try {
								setText(decodeURIComponent(e.target.value));
							} catch (error) {
								enqueueSnackbar('Error decoding URL', { variant: 'error' });
								setText('');
							}
						}}
					/>
				</Grid2>
			</Grid2>
		</Container>
	);
}

export default UrlEncoder;
