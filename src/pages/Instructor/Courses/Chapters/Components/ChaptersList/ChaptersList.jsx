import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import React from "react";
import ChapterItem from "./ChapterItem";
import { Box } from "@mui/material";

function ChaptersList({ items, setItems }) {
  const sensors = [
    useSensor(PointerSensor, {
      activationConstraint: { delay: 150, tolerance: 5 },
    }),
  ];

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log(active, over);
    if (!over) return;
    setItems((items) => {
      const activeIndex = items.findIndex((item) => item.id === active.id);
      const overIndex = items.findIndex((item) => item.id === over.id);
      console.log(activeIndex, overIndex);
      return arrayMove(items, activeIndex, overIndex);
    });
  };
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext items={items}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
          {items.map((item) => (
            <ChapterItem key={item.id} item={item} />
          ))}
        </Box>
      </SortableContext>
    </DndContext>
  );
}

export default ChaptersList;
