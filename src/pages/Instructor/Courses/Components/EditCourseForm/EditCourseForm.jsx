import { Box, Button } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { LoadingButton } from "@mui/lab";

const steps = [
  "Basic Information",
  "Target group",
  "Promotion",
  "Price",
  "Publish",
];

function EditCourseForm({
  id,
  title,
  subtitle,
  language,
  category,
  subcategory,
  level,
  price,
  discount,
  description,
  tags,
  promotionImage,
  promotionVideo,
  status,
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const formik = useFormik({
    initialValues: {
      title,
      subtitle,
      language,
      category,
      subcategory,
      level,
      price,
      discount,
      description,
      tags,
      promotionImage,
      promotionVideo,
      status,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const completed = [
    formik.values.title !== "" &&
      formik.values.subtitle !== "" &&
      formik.values.description !== "",
    formik.values.category !== "" &&
      formik.values.subcategory !== "" &&
      formik.values.level !== "" &&
      formik.values.language !== "" &&
      formik.values.tags !== "",
    formik.values.promotionImage !== "" && formik.values.promotionVideo !== "",
    formik.values.price !== "" && formik.values.discount !== "",
    formik.values.status === "published",
  ];

  const tabsList = [
    <Step1 formik={formik} />,
    <Step2 formik={formik} />,
    <Step3 formik={formik} />,
    <Step4 formik={formik} />,
    <Step5 formik={formik} status={status} />,
  ];

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: "100%",
          backgroundColor: (theme) => theme.palette.background.b1,
          px: "1em",
          py: "3em",
          borderRadius: "8px",
        }}
      >
        <Box width={{ xs: "100%", sm: "90%" }}>
          <Stepper
            nonLinear
            activeStep={activeStep}
            sx={{ flexWrap: "wrap", rowGap: "1em", pb: "3em" }}
          >
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton
                  color="inherit"
                  onClick={() => setActiveStep(index)}
                >
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          {tabsList[activeStep]}
          {activeStep !== 4 && (
            <Box display="flex" justifyContent="flex-end" gap="1em" pt="2em">
              <Button variant="contained" color="error">
                Cancel
              </Button>
              <LoadingButton variant="contained" type="submit">
                Save
              </LoadingButton>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default EditCourseForm;
