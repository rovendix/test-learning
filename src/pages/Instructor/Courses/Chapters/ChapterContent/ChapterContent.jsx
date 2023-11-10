import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import TopicsList from "../../../../../Components/Instructor/Content/TopicsList/TopicsList";
function ChapterContent() {
  return (
    <Box>
      <Box
        my="1em"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Chapter Content</Typography>
        <Button variant="contained" startIcon={<Add />}>
          Add Chapter
        </Button>
      </Box>
      <Box>
        <TopicsList />
      </Box>
    </Box>
  );
}

export default ChapterContent;
