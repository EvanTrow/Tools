import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import App from './App';

import AllTools from './tools/AllTools';

export const NotFound = () => {
	return (
		<>
			<Typography variant='h5' gutterBottom style={{ marginTop: 100, textAlign: 'center' }}>
				Page not found!
			</Typography>
		</>
	);
};

function Router() {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Routes>
			<Route path='/' element={<Navigation children={<App />} />} />
			{AllTools.map((section) => section.tools.map((tool) => <Route key={tool.path} path={tool.path} element={<Navigation children={<tool.page />} />} />))}
			<Route path='*' element={<Navigation children={<NotFound />} />} />
		</Routes>
	);
}

export default Router;
