import React, { FC, useState, useCallback, HTMLAttributes, forwardRef, CSSProperties } from 'react';
import { DndContext, closestCenter, MouseSensor, TouchSensor, DragOverlay, useSensor, useSensors, DragStartEvent, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Card, CardActionArea, CardHeader, Grid2, IconButton, Paper, Typography } from '@mui/material';
import { toolSections } from './Router';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const SortableItem = (props: any) => {
	const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

	const tool = toolSections.flatMap((section) => section.tools).find((tool) => tool.path === props.id);
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
				<CardActionArea>
					<CardHeader
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
};

const App: FC = () => {
	const [items, setItems] = useState(toolSections.flatMap((section) => section.tools).map((tool) => tool.path));
	const [activeId, setActiveId] = useState<string | number | null>(null);
	const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

	const handleDragStart = useCallback((event: DragStartEvent) => {
		setActiveId(event.active.id);
	}, []);
	const handleDragEnd = useCallback((event: DragEndEvent) => {
		const { active, over } = event;

		if (active.id !== over?.id) {
			setItems((items) => {
				const oldIndex = items.indexOf(active.id.toString());
				const newIndex = items.indexOf(over!.id.toString());

				return arrayMove(items, oldIndex, newIndex);
			});
		}

		setActiveId(null);
	}, []);
	const handleDragCancel = useCallback(() => {
		setActiveId(null);
	}, []);

	return (
		<DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragCancel={handleDragCancel}>
			<SortableContext items={items} strategy={rectSortingStrategy}>
				<Grid2 container spacing={2}>
					{items.map((id) => (
						<SortableItem key={id} id={id} />
					))}
				</Grid2>
			</SortableContext>
			<DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
				{activeId ? <SortableItem id={activeId.toString()} isDragging /> : null}
			</DragOverlay>
		</DndContext>
	);
};

export default App;
