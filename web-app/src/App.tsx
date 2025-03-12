import { Grid2, Card, Typography, CardActionArea, Container, Box, Divider, IconButton, CardHeader } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useGetPinnedTools, useSetPinnedTools } from './data/usePinnedTools';
import { CSS } from '@dnd-kit/utilities';
import { arrayMove, rectSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { DndContext, closestCenter, DragOverlay, useSensors, useSensor, DragEndEvent, DragStartEvent, MouseSensor, TouchSensor } from '@dnd-kit/core';
import { useCallback, useEffect, useState } from 'react';

import AllTools from './tools/AllTools';

const SortableItem = (props: any) => {
	const navigate = useNavigate();

	const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

	const tool = AllTools.flatMap((section) => section.tools).find((tool) => tool.path === props.id);
	if (!tool) return null;
	return (
		<Grid2 size={{ xs: 12, sm: 6, md: 4 }} ref={setNodeRef} {...attributes} {...listeners}>
			<Card
				sx={{
					transform: CSS.Transform.toString(transform),
					transition: transition || undefined,
					opacity: isDragging ? 0.5 : 1,
				}}
			>
				<CardActionArea
					onClick={() => {
						navigate(tool.path);
					}}
				>
					<CardHeader
						title={
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								{tool.icon && <Box sx={{ mr: 1 }}>{tool.icon}</Box>}
								<Typography variant='h6' gutterBottom>
									{tool.title}
								</Typography>
							</Box>
						}
						action={
							<IconButton
								size='small'
								onClick={(e) => {
									e.stopPropagation();
									console.log('pinning', tool.path);
									props.handlePinTool(tool.path);
								}}
							>
								{props.pinned ? <Favorite /> : <FavoriteBorder />}
							</IconButton>
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
};

function Home() {
	const { data: pinnedTools } = useGetPinnedTools();
	const setPinnedTools = useSetPinnedTools();

	const [loaded, setLoaded] = useState(false);
	const [items, setItems] = useState<string[]>([]);
	const handlePinTool = (toolPath: string) => {
		const updatedPinnedTools = pinnedTools?.includes(toolPath) ? pinnedTools.filter((path) => path !== toolPath) : [...(pinnedTools ?? []), toolPath];
		setItems(updatedPinnedTools);
		setPinnedTools.mutate(updatedPinnedTools);
	};

	useEffect(() => {
		if (!loaded && pinnedTools) {
			setLoaded(true);
			setItems(pinnedTools);
		}
	}, [pinnedTools]);

	// drag stuff
	const [activeId, setActiveId] = useState<string | number | null>(null);
	const sensors = useSensors(
		useSensor(MouseSensor, {
			activationConstraint: { delay: 100, tolerance: 1 },
		}),
		useSensor(TouchSensor, {
			activationConstraint: { delay: 100, tolerance: 1 },
		})
	);

	const handleDragStart = useCallback((event: DragStartEvent) => {
		setActiveId(event.active.id);
	}, []);
	const handleDragEnd = useCallback((event: DragEndEvent) => {
		const { active, over } = event;

		if (active.id !== over?.id) {
			setItems((items) => {
				const oldIndex = items.indexOf(active.id.toString());
				const newIndex = items.indexOf(over!.id.toString());
				const newOrder = arrayMove(items, oldIndex, newIndex);
				setPinnedTools.mutate(newOrder);
				return newOrder;
			});
		}

		setActiveId(null);
	}, []);
	const handleDragCancel = useCallback(() => {
		setActiveId(null);
	}, []);

	return (
		<Container maxWidth='lg' sx={{ mt: 2, pb: 2 }}>
			{items.length > 0 && (
				<Box sx={{ mt: 2 }}>
					<Typography variant='h5' gutterBottom>
						Pinned
					</Typography>
					<DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragCancel={handleDragCancel} autoScroll>
						<SortableContext items={items} strategy={rectSortingStrategy}>
							<Grid2 container spacing={2}>
								{items.map((path) => (
									<SortableItem key={path} id={path} items={items} handlePinTool={handlePinTool} pinned />
								))}
							</Grid2>
						</SortableContext>
						<DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
							{activeId ? <SortableItem id={activeId.toString()} items={items} handlePinTool={handlePinTool} isDragging active pinned /> : null}
						</DragOverlay>
					</DndContext>
					<Divider sx={{ mt: 2 }} />
				</Box>
			)}

			{AllTools.map((section) => (
				<Box key={section.title} sx={{ mt: 2 }}>
					<Typography variant='h5' gutterBottom>
						{section.title}
					</Typography>
					<Grid2 container spacing={2}>
						{section.tools.map((tool, i) => (
							<SortableItem key={tool.path} id={tool.path} items={items} handlePinTool={handlePinTool} pinned={items.includes(tool.path)} />
						))}
					</Grid2>
				</Box>
			))}
		</Container>
	);
}

export default Home;
