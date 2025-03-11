import { Typography } from '@mui/material';
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
	return (
		<Navigation
			children={
				<Routes>
					<Route path='/' element={<App />} />
					{AllTools.map((section) => section.tools.map((tool) => <Route key={tool.path} path={tool.path} element={<tool.page />} />))}
					<Route path='*' element={<NotFound />} />
				</Routes>
			}
		/>
	);
}

export default Router;
