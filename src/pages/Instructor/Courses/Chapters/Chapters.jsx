import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import ChaptersList from "./Components/ChaptersList/ChaptersList";
import NewChapter from "./Components/NewChapter/NewChapter";
import useGetData from "../../../../hooks/useGetData";
import { BaseApi } from "../../../../util/BaseApi";
function Chapters() {
  const [newFormIsShown, setNewFormIsShown] = useState(false);
  const [chaptersList, setChaptersList] = useState([
    {
      id: "1",
      title: "Introduction",
      topics: [
        { id: "1", title: "First Video" },
        {
          id: "2",
          title: "Second Video",
        },
        {
          id: "3",
          title: "Third Video",
        },
      ],
    },
    {
      id: "2",
      title: "React Basics",
      topics: [
        [
          { id: "1", title: "First Video" },
          {
            id: "2",
            title: "Second Video",
          },
          {
            id: "3",
            title: "Third Video",
          },
        ],
      ],
    },
    {
      id: "3",
      title: "Styling in React",
      topics: [
        { id: "1", title: "First Video" },
        {
          id: "2",
          title: "Second Video",
        },
        {
          id: "3",
          title: "Third Video",
        },
      ],
    },
    {
      id: "4",
      title: "React Router",
      topics: [
        { id: "1", title: "First Video" },
        {
          id: "2",
          title: "Second Video",
        },
        {
          id: "3",
          title: "Third Video",
        },
      ],
    },
  ]);
  const { data, loading, error, setRefetch } = useGetData(
    BaseApi + "/course/getMyCreatedChapters"
  );
  const chaptersList1 = data?.chapters;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Chapters List</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setNewFormIsShown(true)}
        >
          Add Chapter
        </Button>
      </Box>
      <Box>
        <ChaptersList items={chaptersList} setItems={setChaptersList} />
      </Box>
      <NewChapter
        open={newFormIsShown}
        setOpen={setNewFormIsShown}
        setRefetch={setRefetch}
      />
    </Box>
  );
}

export default Chapters;
