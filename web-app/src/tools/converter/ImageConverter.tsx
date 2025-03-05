import React, { useState } from 'react';
import { Button, Typography, Container, MenuItem, Grid2, Card, CardHeader, IconButton, Select, FormControl, InputLabel, Stack, LinearProgress, Collapse, Alert, Box } from '@mui/material';
import { Close, Download, Upload } from '@mui/icons-material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { Tool } from '../../Router';
import ToolTitle from '../../components/ToolTitle';

function ImageConverter({ tool }: { tool: Tool }) {
	const { enqueueSnackbar } = useSnackbar();

	const [loading, setLoading] = useState(false);
	const [convertTo, setConvertTo] = useState('PNG');
	const [file, setFile] = useState<File | null>(null);
	const [convertedImage, setConvertedImage] = useState<string | null>(null);

	const formats = ['PNG', 'JPG', 'GIF', 'BMP', 'TIFF', 'ICO', 'WEBP', 'HEIC'];
	const fileExtension = file ? file.name.split('.').pop()?.toUpperCase() : '';

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			const selectFile = event.target.files[0];
			setFile(selectFile);

			// if the file extension is in the formats array and the file extension is equal to the convertTo value
			const fileExtension = selectFile.name.split('.').pop()?.toUpperCase();
			if (fileExtension && formats.includes(fileExtension) && fileExtension === convertTo) {
				const currentIndex = formats.indexOf(fileExtension);
				const nextIndex = (currentIndex + 1) % formats.length;
				setConvertTo(formats[nextIndex]);
			}
		}
	};

	const usePrevious = (value: any) => {
		const ref = React.useRef<any>(null);
		React.useEffect(() => {
			ref.current = value;
		}, [value]);
		return ref.current;
	};
	const prevFile = usePrevious(file);
	const prevConvertTo = usePrevious(convertTo);

	React.useEffect(() => {
		if (file && (file !== prevFile || convertTo !== prevConvertTo)) {
			handleConvert();
		}
	}, [file, prevFile, convertTo]);

	const handleConvert = async () => {
		if (!file) return;
		setConvertedImage(null);
		setLoading(true);

		try {
			const image = await file.arrayBuffer();
			const response = await axios.post(`/api/converter/image/${convertTo.toLowerCase()}`, image, {
				headers: {
					'file-name': file.name,
					'Content-Type': file.type.length > 0 ? file.type : `image/${fileExtension?.toLowerCase()}`,
				},
				responseType: 'arraybuffer',
			});

			await new Promise((resolve) => setTimeout(resolve, 750));

			const blob = new Blob([response.data], { type: 'image/png' });
			const imageUrl = URL.createObjectURL(blob);
			setConvertedImage(imageUrl);
		} catch (error: any) {
			console.error('Error converting image:', error);

			enqueueSnackbar(JSON.parse(new TextDecoder().decode(error?.response?.data))?.error || 'Error converting image.', { variant: 'error' });
		} finally {
			setLoading(false);
		}
	};

	const newFileName = file ? file.name.replace(/\.[^/.]+$/, `.${convertTo.toLowerCase()}`) : '';

	return (
		<Container maxWidth='sm'>
			<ToolTitle tool={tool} />

			<Grid2 container spacing={2}>
				<Grid2 size={12}>
					<FormControl fullWidth>
						<InputLabel>Convert To</InputLabel>
						<Select value={convertTo} label='Convert To' onChange={(e) => setConvertTo(e.target.value)}>
							{formats.map((format) => (
								<MenuItem key={format} value={format}>
									{format}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid2>
				<Grid2 size={12}>
					<Button variant='contained' component='label' fullWidth endIcon={<Upload />}>
						Upload Image
						<input type='file' accept='.png,.jpg,.jpeg,.gif,.bmp,.tiff,.ico,.webp,.heic' hidden onChange={handleFileChange} />
					</Button>
				</Grid2>
				<Grid2 size={12}>
					{loading && <LinearProgress sx={{ mt: 1 }} />}
					<Collapse in={convertedImage !== null}>
						<Card>
							<CardHeader
								action={
									<IconButton
										onClick={() => {
											setFile(null);
											setConvertedImage(null);
										}}
										color='error'
									>
										<Close />
									</IconButton>
								}
								title={<Typography variant='subtitle1'>{newFileName}</Typography>}
							/>

							<Box sx={{ p: 1 }}>
								{convertTo === 'TIFF' ? (
									<Alert severity='warning'>
										<Typography variant='body2'>TIFF format is not supported in the browser. Please download the image to view it.</Typography>
									</Alert>
								) : (
									<img src={convertedImage ?? ''} alt={newFileName} style={{ maxWidth: '100%', maxHeight: 500, paddingLeft: 8, paddingRight: 8 }} />
								)}

								<Stack direction='column' spacing={1} sx={{ mt: 1 }}>
									<Button
										variant='contained'
										color='primary'
										onClick={() => {
											const a = document.createElement('a');
											a.href = convertedImage ?? '';
											a.download = newFileName;
											a.click();
										}}
										fullWidth
										endIcon={<Download />}
									>
										Download
									</Button>
								</Stack>
							</Box>
						</Card>
					</Collapse>
				</Grid2>
			</Grid2>
		</Container>
	);
}

export default ImageConverter;
