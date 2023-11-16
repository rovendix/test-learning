import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import TopicsList from "./Components/TopicsList/TopicsList";
import TopicsMenu from "./Components/NewTopic/NewTopic";
import NewTopic from "./Components/NewTopic/NewTopic";

function Topics() {
  const [topicsList, setTopicsList] = useState([
    { id: "1", title: "First Video", type: "video" },
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
  const [newFormIsShown, setNewFormIsShown] = useState(false);
  return (
    <Box>
      <Box
        mb="1em"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          height: "36px",
        }}
      >
        <Typography variant="h5">Topics List</Typography>
        <NewTopic />
      </Box>
      <Box>
        <TopicsList items={topicsList} setItems={setTopicsList} />
      </Box>
    </Box>
  );
}

export default Topics;
