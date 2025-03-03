import React from 'react';
import { Typography, Box } from '@mui/material';
import { Tool } from '../Router';

function ToolTitle({ tool }: { tool: Tool }) {
	return (
		<Box>
			<Typography variant='h4'>{tool.pageTitle}</Typography>
			<Typography variant='body1'>{tool.description}</Typography>
		</Box>
	);
}

export default ToolTitle;
