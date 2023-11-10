import { useSortable } from "@dnd-kit/sortable";
import { Box, Icon, IconButton, Typography } from "@mui/material";
import { CSS } from "@dnd-kit/utilities";
import React, { memo, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import CustomLink from "../../../../UI/CustomLink/CustomLink";
import {
  Add,
  ArrowDropDown,
  DragIndicator,
  MoreVert,
} from "@mui/icons-material";

const ChapterWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.background.b1,
  borderRadius: "8px",
  paddingLeft: "0.5em",
}));

function ContentItem({ item }) {
  const [MenuIsOpened, setMenuIsOpened] = useState(false);
  const [topics, setTopics] = useState(item.topics);
  useEffect(() => {}, [topics]);
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Box ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <Box>
        <ChapterWrapper>
          <Box display="flex" alignItems="center" gap="8px">
            <DragIndicator sx={{ "&:hover": { cursor: "grab" } }} />
            <Typography variant="h6" component="p">
              <CustomLink to={item.id}>{item.title}</CustomLink>
            </Typography>
          </Box>
          <Box mr="4px">
            <IconButton
              onClick={() => setMenuIsOpened((prev) => !prev)}
              sx={{ padding: "4px" }}
            >
              <ArrowDropDown />
            </IconButton>
            <IconButton sx={{ padding: "4px" }}>
              <Add />
            </IconButton>
            <IconButton sx={{ padding: "4px" }}>
              <MoreVert />
            </IconButton>
          </Box>
        </ChapterWrapper>

        <Box sx={{ display: MenuIsOpened ? "block" : "none" }}>
          <Typography variant="body1" component="p">
            Add Video
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ContentItem;
