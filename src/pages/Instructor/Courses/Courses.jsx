import React, { useEffect, useState } from "react";
import CoursesList from "./Components/CoursesList/CoursesList";
import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import NewCourse from "./Components/NewCourse/NewCourse";
import { BaseApi } from "../../../util/BaseApi";
import useGetData from "../../../hooks/useGetData";
import axios from "axios";

function Courses() {
  const [newFormIsShown, setNewFormIsShown] = useState(false);
  const [courseD, setCourseD] = useState("");
  const { data, loading, error, setRefetch } = useGetData(
    BaseApi + "/course/getMyCreatedCourses"
  );
  const coursesList = data?.courses;
  console.log("coursesList: ", coursesList);
  useEffect(() => {
    axios
      .get(BaseApi + "/course/getCourse/654e9f76f9927557102343f6")
      .then((res) => {
        console.log("res: ", res.data);
      });
  }, []);
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
          onClick={() => setNewFormIsShown(true)}
        >
          New Course
        </Button>
      </Box>
      <CoursesList setRefetch={setRefetch} items={coursesList} />
      <NewCourse
        open={newFormIsShown}
        setOpen={setNewFormIsShown}
        setRefetch={setRefetch}
      />
    </Box>
  );
}

export default Courses;
