import React, { useEffect, useState } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { SvgIconProps } from '@mui/material/SvgIcon';
import axios from 'axios';
import { useTheme } from '@mui/material';

interface SvgRepoProps extends SvgIconProps {
	url: string;
	padding?: string | number; // Add optional margin prop
	removeColor?: string[]; // Add optional margin prop
	replaceColor?: { search: string; replace: string }[]; // Add optional margin prop
	cors?: boolean; // Add optional margin prop
}

const SvgRepo: React.FC<SvgRepoProps> = ({ url, padding: padding, removeColor = [], replaceColor = [], cors = true, ...props }) => {
	const theme = useTheme();

	const [svgContent, setSvgContent] = useState<string | null>(null);
	const [viewBox, setViewBox] = useState<string | undefined>(undefined);

	const removeBlackStrock = (data: string) => {
		// Change the stroke color to white in dark mode and to a light gray in light mode
		if (theme.palette.mode === 'dark') data = data.replaceAll(/stroke="#000000"/g, `stroke="${theme.palette.text.primary}"`);
		else data = data.replaceAll(/stroke="#000000"/g, `stroke="${theme.palette.text.primary}"`);

		for (const color of removeColor) {
			data = data.replaceAll(new RegExp(`stroke="${color}"`, 'g'), `stroke="${theme.palette.text.primary}"`);
			data = data.replaceAll(new RegExp(`fill="${color}"`, 'g'), `fill="${theme.palette.text.primary}"`);
		}

		for (const color of replaceColor) {
			data = data.replaceAll(new RegExp(`stroke="${color.search}"`, 'g'), `stroke="${color.replace}"`);
			data = data.replaceAll(new RegExp(`fill="${color.search}"`, 'g'), `fill="${color.replace}"`);
		}

		return data;
	};

	useEffect(() => {
		axios
			.get(cors ? '/api/downloader/svgRepo' : url, { params: { url } })
			.then((response) => {
				let svgData = response.data;

				// Parse the SVG to manipulate it
				const parser = new DOMParser();
				const svgDoc = parser.parseFromString(svgData, 'image/svg+xml');
				const svgElement = svgDoc.querySelector('svg');

				if (svgElement) {
					// Update viewBox
					const viewBoxAttr = svgElement.getAttribute('viewBox');
					if (viewBoxAttr) {
						setViewBox(viewBoxAttr);
					}

					svgElement.removeAttribute('width');
					svgElement.removeAttribute('height');

					if (svgElement.getAttribute('fill') == '#000000') {
						svgElement.removeAttribute('fill');
					}

					// Serialize the SVG back to string
					const serializer = new XMLSerializer();
					svgData = serializer.serializeToString(svgElement);
				}

				setSvgContent(svgData);
			})
			.catch((error) => console.error('Error fetching SVG:', error));
	}, [url]);

	return (
		<SvgIcon {...props} viewBox={viewBox} sx={{ padding }}>
			{svgContent && <g dangerouslySetInnerHTML={{ __html: removeBlackStrock(svgContent) }} />}
		</SvgIcon>
	);
};

export default SvgRepo;
