import React from "react";
import CoursesList from "../../../Components/Instructor/Courses/CoursesList/CoursesList";
import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();
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
          Courses List
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => navigate("new")}
        >
          New Course
        </Button>
      </Box>
      <CoursesList />
    </Box>
  );
}

export default Courses;
