import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import React, { useState } from "react";
import { Box } from "@mui/material";
import TopicItem from "./TopicItem";

function TopicsList() {
  const sensors = [
    useSensor(PointerSensor, {
      activationConstraint: { delay: 150, tolerance: 5 },
    }),
  ];

  const [items, setItems] = useState([
    { id: "1", title: "First Video" },
    {
      id: "2",
      title: "Second Video",
    },
    {
      id: "3",
      title: "Third Video",
    },
    {
      id: "4",
      title: "Fourth Video",
    },
    {
      id: "5",
      title: "Fifth Video",
    },
    {
      id: "6",
      title: "Sixth Video",
    },
  ]);
  console.log(items);
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.25em",
          }}
        >
          {items.map((item) => (
            <TopicItem key={item.id} item={item} />
          ))}
        </Box>
      </SortableContext>
    </DndContext>
  );
}

export default TopicsList;
