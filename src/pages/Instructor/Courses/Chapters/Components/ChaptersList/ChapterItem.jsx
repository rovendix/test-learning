import { useSortable } from "@dnd-kit/sortable";
import { Box, IconButton, Typography } from "@mui/material";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";
import styled from "@emotion/styled";
import CustomLink from "../../../../../../UI/CustomLink/CustomLink";
import { DragIndicator, MoreVert } from "@mui/icons-material";
import ChapterMenu from "../ChapterMenu/ChapterMenu";

const ChapterWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.background.b1,
  paddingLeft: "0.5em",
}));

function ChapterItem({ item, setRefetch }) {
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
            <ChapterMenu
              setRefetch={setRefetch}
              id={item.id}
              title={item.title}
            />
          </Box>
        </ChapterWrapper>
      </Box>
    </Box>
  );
}

export default ChapterItem;
