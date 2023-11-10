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
  height: "30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.background.b1,
  paddingLeft: "0.5em",
}));

function TopicItem({ item }) {
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
            <Typography variant="body1" component="p">
              <CustomLink to={item.id}>{item.title}</CustomLink>
            </Typography>
          </Box>
          <Box mr="4px">
            <IconButton sx={{ padding: "4px" }}>
              <MoreVert sx={{ fontSize: "0.8em" }} />
            </IconButton>
          </Box>
        </ChapterWrapper>
      </Box>
    </Box>
  );
}

export default TopicItem;
