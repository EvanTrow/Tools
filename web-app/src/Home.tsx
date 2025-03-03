import { Grid2, Card, CardContent, Typography, CardActionArea, Container, Box, Divider, IconButton, CardHeader, Collapse } from '@mui/material';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Tool, toolSections } from './Router';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useGetPinnedTools, useSetPinnedTools } from './data/usePinnedToosl';
import { TransitionGroup } from 'react-transition-group';

function renderItem({ tool, navigate, pinnedTools, handlePinTool }: { tool: Tool; navigate: NavigateFunction; pinnedTools: string[]; handlePinTool: (toolPath: string) => void }) {
	return (
		<Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={tool.path} component={Collapse} timeout={pinnedTools.length === 1 ? 0 : 'auto'} unmountOnExit>
			<Card>
				<CardActionArea onClick={() => navigate(tool.path)}>
					<CardHeader
						action={
							<IconButton
								size='small'
								onClick={(e) => {
									e.stopPropagation();
									handlePinTool(tool.path);
								}}
							>
								{pinnedTools.includes(tool.path) ? <Favorite /> : <FavoriteBorder />}
							</IconButton>
						}
						title={
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								{tool.icon && <Box sx={{ mr: 1 }}>{tool.icon}</Box>}
								<Typography variant='h6' gutterBottom>
									{tool.title}
								</Typography>
							</Box>
						}
						subheader={
							<Typography variant='body2' color='textSecondary'>
								{tool.description}
							</Typography>
						}
					/>
				</CardActionArea>
			</Card>
		</Grid2>
	);
}

function Home() {
	const navigate = useNavigate();

	const { data } = useGetPinnedTools();
	const pinnedTools = data ?? [];
	const setPinnedTools = useSetPinnedTools();

	const handlePinTool = (toolPath: string) => {
		const updatedPinnedTools = pinnedTools?.includes(toolPath) ? pinnedTools.filter((path) => path !== toolPath) : [...pinnedTools, toolPath];
		setPinnedTools.mutate(updatedPinnedTools);
	};

	return (
		<Container maxWidth='lg' sx={{ mt: 2, pb: 2 }}>
			<Collapse in={pinnedTools.length > 0}>
				<Box sx={{ mt: 2 }}>
					<Typography variant='h5' gutterBottom>
						Pinned
					</Typography>
					<Grid2 container spacing={2}>
						<TransitionGroup component={null}>
							{pinnedTools
								.sort((a, b) => {
									const toolA = toolSections.flatMap((section) => section.tools).find((t) => t.path === a);
									const toolB = toolSections.flatMap((section) => section.tools).find((t) => t.path === b);
									if (!toolA || !toolB) return 0;
									return toolA.title.localeCompare(toolB.title);
								})
								.map((toolPath) => {
									const tool = toolSections.flatMap((section) => section.tools).find((t) => t.path === toolPath);
									if (!tool) return null;
									return renderItem({ tool, navigate, pinnedTools, handlePinTool });
								})}
						</TransitionGroup>
					</Grid2>
					<Divider sx={{ mt: 2 }} />
				</Box>
			</Collapse>

			{toolSections.map((section) => (
				<Box key={section.title} sx={{ mt: 2 }}>
					<Typography variant='h5' gutterBottom>
						{section.title}
					</Typography>
					<Grid2 container spacing={2}>
						{section.tools.map((tool) => (
							<>{renderItem({ tool, navigate, pinnedTools, handlePinTool })}</>
						))}
					</Grid2>

					<Grid2 container spacing={2}>
						<TransitionGroup component={null}>{section.tools.map((tool) => renderItem({ tool, navigate, pinnedTools, handlePinTool }))}</TransitionGroup>
					</Grid2>
				</Box>
			))}
		</Container>
	);
}

export default Home;
