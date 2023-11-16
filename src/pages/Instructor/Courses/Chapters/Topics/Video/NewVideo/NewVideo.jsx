import { Box, Button, Typography } from "@mui/material";
import React from "react";
import VideoForm from "../Components/VideoForm/VideoForm";

function NewVideo() {
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        my="1em"
      >
        <Typography variant="h5" component="h2">
          New Video
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.b1,
          padding: "1em",
          borderRadius: "8px",
        }}
      >
        <VideoForm />
      </Box>
    </Box>
  );
}

export default NewVideo;
