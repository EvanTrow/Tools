import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Home from './Home'; // Import Home component

import TikTok from './tools/downloader/TikTok';
import SvgRepo from './components/SvgRepo';
import { Link, YouTube } from '@mui/icons-material';
import { SvgIconProps } from '@mui/material';
import Youtube from './tools/downloader/YouTube';
import Base64 from './tools/converter/Base64';
import FileSize from './tools/converter/FileSize';
import UrlEncoder from './tools/converter/UrlEncoder';
import UrlParser from './tools/converter/UrlParser';
import Test from './Test';

export const NotFound = () => {
	return (
		<Typography variant='h5' gutterBottom style={{ marginTop: 100, textAlign: 'center' }}>
			Page not found!
		</Typography>
	);
};

export type ToolSection = {
	title: string;
	tools: Tool[];
};
export type Tool = {
	title: string;
	pageTitle: string;
	description: string;
	path: string;
	page: React.ComponentType<{ tool: Tool }>;
	icon: React.ReactElement<SvgIconProps>;
};

export const toolSections: ToolSection[] = [
	{
		title: 'Downloader',
		tools: [
			{
				title: 'YouTube',
				pageTitle: 'YouTube Downloader',
				description: 'Download videos from YouTube',
				path: '/downloader/youtube',
				page: Youtube,
				icon: <YouTube />,
			},
			{
				title: 'TikTok',
				pageTitle: 'TikTok Downloader',
				description: 'Download videos from TikTok',
				path: '/downloader/tiktok',
				page: TikTok,
				icon: <SvgRepo url='https://www.svgrepo.com/show/473806/tiktok.svg' padding={0.25} />,
			},
		].sort((a, b) => a.title.localeCompare(b.title)),
	},
	{
		title: 'Converter',
		tools: [
			{
				title: 'Base64',
				pageTitle: 'Base64 Encoder/Decoder',
				description: 'Convert text to and from base64',
				path: '/converter/base64',
				page: Base64,
				icon: <SvgRepo url='/icons/base64.svg' padding={0.25} cors={false} />,
			},
			{
				title: 'File Size',
				pageTitle: 'File Size Converter',
				description: 'Convert file sizes between different units',
				path: '/converter/filesize',
				page: FileSize,
				icon: <SvgRepo url='https://www.svgrepo.com/show/532782/file-info-alt-1.svg' padding={0.25} />,
			},
			{
				title: 'URL Encoder/Decoder',
				pageTitle: 'URL Encoder/Decoder',
				description: 'Convert text to and from URL encoding',
				path: '/converter/url-encoder',
				page: UrlEncoder,
				icon: <Link />,
			},
			{
				title: 'URL Parser',
				pageTitle: 'URL Parser',
				description: 'Parse and edit URL parts',
				path: '/converter/url-parser',
				page: UrlParser,
				icon: <SvgRepo url='https://www.svgrepo.com/show/452391/url-parameter.svg' removeColor={['#1F2328']} />,
			},
		].sort((a, b) => a.title.localeCompare(b.title)),
	},
].sort((a, b) => a.title.localeCompare(b.title));

function Router() {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Routes>
			<Route path='/' element={<Navigation children={<Home />} />} /> {/* Add Home route */}
			<Route path='/test' element={<Navigation children={<Test />} />} /> {/* Add Home route */}
			{toolSections.map((section) => section.tools.map((tool) => <Route key={tool.path} path={tool.path} element={<Navigation children={<tool.page tool={tool} />} />} />))}
			<Route path='*' element={<Navigation children={<NotFound />} />} />
		</Routes>
	);
}

export default Router;
