import * as React from 'react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';
import { Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme, ListSubheader, TextField, Typography } from '@mui/material';
import { HomeRounded } from '@mui/icons-material';

import { toolSections } from '../../Router';
import { useGetPinnedTools } from '../../data/usePinnedToosl';

export default function MenuContent({ toggleDrawer, open }: { toggleDrawer: () => void; open: boolean | undefined }) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [searchQuery, setSearchQuery] = useState('');

	const { data } = useGetPinnedTools();
	const pinnedTools = data ?? [];

	const fuse = useMemo(() => {
		const options = {
			keys: ['title', 'pageTitle', 'description'],
			threshold: 0.3,
		};
		return new Fuse(
			toolSections.flatMap((section) => section.tools),
			options
		);
	}, []);

	const filteredSections = useMemo(() => {
		const query = searchQuery.trim().toLowerCase();
		if (!query) return toolSections;

		const result = fuse.search(query).map(({ item }) => item);

		return toolSections
			.map((section) => ({
				...section,
				tools: section.tools.filter((tool) => result.includes(tool)),
			}))
			.filter((section) => section.title.toLowerCase().includes(query) || section.tools.length > 0);
	}, [searchQuery, fuse]);

	return (
		<>
			<Stack sx={{ flexGrow: 1, width: '100%' }}>
				{/* Main List */}
				<List
					dense
					subheader={
						<ListSubheader component='div' id='nested-list-subheader'>
							Main
						</ListSubheader>
					}
				>
					{/* Home */}
					<ListItem disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							selected={window.location.pathname === '/'}
							onClick={() => {
								isMobile && toggleDrawer();
							}}
							component={Link}
							to='/'
						>
							<ListItemIcon>
								<HomeRounded />
							</ListItemIcon>
							<ListItemText primary='Home' />
						</ListItemButton>
					</ListItem>

					{/* Search */}
					<ListItem disablePadding sx={{ display: 'block', px: 1, pt: 1 }}>
						<TextField
							variant='outlined'
							size='small'
							fullWidth
							placeholder='Search tools...'
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							inputRef={(input) => input && input.focus()}
						/>
					</ListItem>
				</List>

				{searchQuery.trim().length > 0 && (
					<Typography variant='caption' color='text.secondary' sx={{ px: 1 }}>
						{filteredSections.reduce((acc, section) => acc + section.tools.length, 0)} of {toolSections.reduce((acc, section) => acc + section.tools.length, 0)} tools found
					</Typography>
				)}

				{pinnedTools.length > 0 && (
					<List
						dense
						subheader={
							<ListSubheader component='div' id='nested-list-subheader'>
								Pinned
							</ListSubheader>
						}
					>
						{pinnedTools.map((toolPath) => {
							const tool = toolSections.flatMap((section) => section.tools).find((t) => t.path === toolPath);

							if (!tool) return null;
							return (
								<ListItem key={tool.path} disablePadding sx={{ display: 'block' }}>
									<ListItemButton
										selected={window.location.pathname === tool.path}
										onClick={() => {
											isMobile && toggleDrawer();
										}}
										component={Link}
										to={tool.path}
									>
										<ListItemIcon>{tool.icon}</ListItemIcon>
										<ListItemText primary={tool.title} />
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>
				)}

				{filteredSections.map((section) => (
					<List
						key={section.title}
						dense
						subheader={
							<ListSubheader component='div' id='nested-list-subheader'>
								{section.title}
							</ListSubheader>
						}
					>
						{section.tools.map((tool) => (
							<ListItem key={tool.path} disablePadding sx={{ display: 'block' }}>
								<ListItemButton
									selected={window.location.pathname === tool.path}
									onClick={() => {
										isMobile && toggleDrawer();
									}}
									component={Link}
									to={tool.path}
								>
									<ListItemIcon>{tool.icon}</ListItemIcon>
									<ListItemText primary={tool.title} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				))}
			</Stack>
		</>
	);
}
