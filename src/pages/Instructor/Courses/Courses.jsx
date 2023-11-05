import { Box } from "@mui/material";
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";

function Courses() {
  return (
    <Suspense>
      <Helmet>
        <title>Courses</title>
      </Helmet>
      <Box></Box>
    </Suspense>
  );
}

export default Courses;
