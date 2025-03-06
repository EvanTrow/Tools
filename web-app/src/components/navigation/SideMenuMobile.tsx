import React from 'react';

import MenuContent from './MenuContent';
import { Drawer, drawerClasses, Stack, Avatar, Typography, Divider } from '@mui/material';

interface SideMenuMobileProps {
	open: boolean | undefined;
	toggleDrawer: () => void;
}

export default function SideMenuMobile({ open, toggleDrawer }: SideMenuMobileProps) {
	return (
		<Drawer
			anchor='right'
			open={open}
			onClose={toggleDrawer}
			sx={{
				zIndex: 1202,
				display: { xs: 'auto', md: 'none' },

				[`& .${drawerClasses.paper}`]: {
					backgroundImage: 'none',
					backgroundColor: 'background.paper',
				},
			}}
		>
			<Stack
				sx={{
					height: '100%',
					width: '60dvw',
				}}
			>
				<Stack direction='row' sx={{ p: 2, pb: 0, gap: 1 }}>
					<Stack direction='row' sx={{ gap: 1, alignItems: 'center', flexGrow: 1, p: 1 }}>
						<Typography component='p' variant='h6'>
							Tech Tools
						</Typography>
					</Stack>
				</Stack>
				<Divider />
				<MenuContent toggleDrawer={toggleDrawer} open={open} />
			</Stack>
		</Drawer>
	);
}
