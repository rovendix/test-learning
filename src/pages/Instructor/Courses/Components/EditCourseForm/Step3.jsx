import { Box, IconButton, Typography, Grid } from "@mui/material";
import React, { useEffect } from "react";
import useUpload from "../../../../../hooks/useUpload";
import styled from "@emotion/styled";
import { DeleteForever } from "@mui/icons-material";
import UploadBox from "../../../Components/UploadBox/UploadBox";

const BoxWrapper = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: "rgba(169, 169, 169, 0.1)",
  height: "300px",
  overflow: "hidden",
  position: "relative",
}));
function Step3({ formik }) {
  const [imgFile, setImageFile] = React.useState("");
  const [videoFile, setVideoFile] = React.useState("");

  const {
    url: imgUrl,
    progress: imgProgress,
    error: imgError,
  } = useUpload(imgFile);
  const {
    url: videoUrl,
    progress: videoProgress,
    error: videoError,
  } = useUpload(videoFile);
  useEffect(() => {
    if (imgUrl !== null) {
      formik.setFieldValue("promotionImage", imgUrl);
    }
  }, [imgUrl]);
  useEffect(() => {
    if (videoUrl !== null) {
      formik.setFieldValue("promotionVideo", videoUrl);
    }
  }, [videoUrl]);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" mb="0.5em">
              Promotion Image
            </Typography>
            <Typography variant="body2" pb="1em" color="text.secondary">
              Capture the essence of your course in a single image! Show the
              world what makes your course extraordinary. An enticing promotion
              image can paint a vivid picture, drawing in eager minds and
              inviting them to explore what you have to offer. Submit an image
              that encapsulates the heart of your course, beckoning learners to
              step into a world of growth and discovery.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {formik.values.promotionImage === "" && (
              <UploadBox
                sx={{ height: "300px" }}
                id="uploadImage"
                key="uploadImage"
                onChange={(event) => setImageFile(event.target.files[0])}
                progress={imgProgress}
                error={imgError}
              />
            )}
            {formik.values.promotionImage !== "" && (
              <BoxWrapper>
                <IconButton
                  sx={{
                    position: "absolute",
                    right: "4px",
                    top: "4px",
                    zIndex: 1,
                  }}
                  onClick={() => {
                    formik.setFieldValue("promotionImage", "");
                  }}
                >
                  <DeleteForever color="error" />
                </IconButton>
                <img
                  src={formik.values.promotionImage}
                  alt="promotion image"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
                <input
                  type="text"
                  hidden
                  id="promotionImage"
                  value={formik.values.promotionImage}
                  onChange={formik.handleChange}
                />
              </BoxWrapper>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" mb="0.5em">
              Promotion Video
            </Typography>
            <Typography variant="body2" pb="1em" color="text.secondary">
              Unlock the potential of your course through the magic of video! A
              well-crafted promotion video has the power to captivate, educate,
              and inspire like no other medium. It's your chance to connect with
              potential learners on a personal level, sharing your passion,
              knowledge, and the unique essence of your course.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {formik.values.promotionVideo === "" && (
              <UploadBox
                id={"uploadVideo"}
                key="uploadVideo"
                sx={{ height: "300px" }}
                onChange={(event) => setVideoFile(event.target.files[0])}
                progress={videoProgress}
                error={videoError}
              />
            )}
            {formik.values.promotionVideo !== "" && (
              <BoxWrapper>
                <IconButton
                  sx={{
                    position: "absolute",
                    right: "4px",
                    top: "4px",
                    zIndex: 1,
                  }}
                  onClick={() => {
                    formik.setFieldValue("promotionVideo", "");
                  }}
                >
                  <DeleteForever color="error" />
                </IconButton>
                <video
                  controls
                  src={formik.values.promotionVideo}
                  alt="promotion video"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
                <input
                  type="text"
                  hidden
                  id="promotionVideo"
                  value={formik.values.promotionVideo}
                  onChange={formik.handleChange}
                />
              </BoxWrapper>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Step3;
