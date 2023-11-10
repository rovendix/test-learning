import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ContentList from "../../../../Components/Instructor/Content/ContentList/ContentList";
import { Add } from "@mui/icons-material";

function CourseContent() {
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
        <Typography variant="h5">Course Content</Typography>
        <Button variant="contained" startIcon={<Add />}>
          Add Chapter
        </Button>
      </Box>
      <Box>
        <ContentList />
      </Box>
    </Box>
  );
}

export default CourseContent;
