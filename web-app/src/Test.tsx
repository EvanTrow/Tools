import React, { FC, useState, useCallback, HTMLAttributes, forwardRef, CSSProperties } from 'react';
import { DndContext, closestCenter, MouseSensor, TouchSensor, DragOverlay, useSensor, useSensors, DragStartEvent, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Grid2, Paper } from '@mui/material';

const SortableItem = (props: any) => {
	const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

	return (
		<Grid2 size={4} ref={setNodeRef} {...attributes} {...listeners}>
			<Paper
				elevation={isDragging ? 6 : 3}
				sx={{
					transform: CSS.Transform.toString(transform),
					transition: transition || undefined,
					opacity: isDragging ? 0.5 : 1,
				}}
			>
				{props.id}
			</Paper>
		</Grid2>
	);
};

const App: FC = () => {
	const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => (i + 1).toString()));
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
