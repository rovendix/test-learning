import {
  Box,
  Button,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import TextEditor from "../../../../Components/TextEditor/TextEditor";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect } from "react";
import { Cancel, Save, Upload, UploadFile } from "@mui/icons-material";
import styled from "@emotion/styled";
import axios from "axios";
import useUpload from "../../../../hooks/useUpload";
const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.b1,
  padding: "1em",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "1em",
}));
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
const UploadBoxWrapper = styled(Box)(({ theme }) => ({
  border: `1px dashed rgba(169, 169, 169, 0.23)`,
  borderRadius: "8px",
  backgroundColor: "rgba(169, 169, 169, 0.1)",
  width: "100%",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    cursor: "pointer",
  },
}));
const UploadBox = ({ onChange, progress, error }) => {
  return (
    <Box width="100%">
      <input type="file" id="file" hidden onChange={onChange} />
      <label htmlFor="file" style={{ height: "100%", width: "100%" }}>
        <UploadBoxWrapper>
          {error && <Typography variant="body1">{error}</Typography>}
          {progress && (
            <Box width={"100%"} flex="1" p="1em">
              <LinearProgressWithLabel value={progress} />
            </Box>
          )}
          {!progress && !error && (
            <UploadFile
              sx={{ fontSize: "4em", color: "rgba(169, 169, 169, 0.3)" }}
            />
          )}
        </UploadBoxWrapper>
      </label>
    </Box>
  );
};
function EditCourseInfo() {
  const [image, setImage] = React.useState(null);
  const {
    url: imgUrl,
    progress: imgProgress,
    error: imgError,
  } = useUpload(image);
  console.log(imgUrl, imgProgress, imgError);

  const [video, setVideo] = React.useState("");
  const {
    url: videoUrl,
    progress: videoProgress,
    error: videoError,
  } = useUpload(video);
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my="1em"
      >
        <Typography variant="h4">New Course</Typography>
      </Box>
      <Grid2 container spacing={2} component="form">
        <Grid2 xs={12} md={6}>
          <SectionWrapper>
            <Typography variant="h6">Course Details</Typography>
            <TextField
              label="Title"
              variant="outlined"
              sx={{ width: "100%" }}
            />
            <TextField
              label="Language"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </SectionWrapper>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <SectionWrapper>
            <Typography variant="h6">Course Price</Typography>
            <TextField
              label="Price"
              variant="outlined"
              sx={{ width: "100%" }}
            />
            <TextField
              label="Discount %"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </SectionWrapper>
        </Grid2>
        <Grid2 xs={12} sm={6}>
          <SectionWrapper>
            <Typography variant="h6">Course Image</Typography>
            {!imgUrl && (
              <UploadBox
                key={"image"}
                onChange={(event) => setImage(event.target.files[0])}
                progress={imgProgress}
                error={videoError}
              />
            )}
            {imgUrl && (
              <Box
                sx={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: `1px dashed rgba(169, 169, 169, 0.23)`,
                }}
              >
                <img
                  src={imgUrl}
                  style={{ width: "100%", height: "100%" }}
                  alt="course"
                />
              </Box>
            )}
          </SectionWrapper>
        </Grid2>
        <Grid2 xs={12} sm={6}>
          <SectionWrapper>
            <Typography variant="h6">Course Video</Typography>
            {!videoUrl && (
              <UploadBox
                key={"video"}
                onChange={(event) => setVideo(event.target.files[0])}
                progress={videoProgress}
                error={videoError}
              />
            )}
            {videoUrl && (
              <Box
                sx={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <video
                  src={videoUrl}
                  controls
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            )}
          </SectionWrapper>
        </Grid2>
        <Grid2 xs={12}>
          <SectionWrapper>
            <Typography variant="h6">Course Description</Typography>
            <TextEditor sx={{ height: "500px" }} />
          </SectionWrapper>
        </Grid2>
        <Grid2 xs={12}>
          <SectionWrapper>
            <Typography variant="h6">Course Tags</Typography>
            <TextField variant="outlined" sx={{ width: "100%" }} label="Tags" />
          </SectionWrapper>
        </Grid2>
        <Grid2 xs={12}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            mb="1em"
            gap="1em"
          >
            <Button variant="contained" startIcon={<Save />}>
              Add Course
            </Button>
            <Button variant="contained" startIcon={<Cancel />} color="error">
              Cancel
            </Button>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default EditCourseInfo;
