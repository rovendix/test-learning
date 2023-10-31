import React, { useState } from "react";
import { Form, Link as RouterLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Google } from "@mui/icons-material";
import { siteUrl } from "../../../util/backend";
export default function SignupForm() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  // Define the validation schema
  const validationSchema = yup.object({
    userName: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/\d/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\W/, "Password must contain at least one special character"),
    cpassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    terms: yup.bool().oneOf([true], "Please agree to terms and conditions"),
  });

  const handleSignup = async (values) => {
    setLoading(true);
    let { data } = await axios
      .post(`${siteUrl}/auth/signup`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
    if (data.message === "success") {
      setLoading(false);
      nav("/login");
    }
  };
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      cpassword: "",
      terms: false,
    },
    validationSchema,
    onSubmit: handleSignup,
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        sx={{
          "& input:-webkit-autofill": {
            WebkitBoxShadow: (theme) =>
              `0 0 0 1000px ${theme.palette.background.autofill} inset`,
          },
        }}
      >
        <TextField
          name="userName"
          label="Username"
          type="text"
          required
          error={formik.touched.userName && formik.errors.userName}
          helperText={formik.touched.userName && formik.errors.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
          autoComplete="userName"
          variant="outlined"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />
        <TextField
          name="email"
          label="email"
          type="email"
          required
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          autoComplete="email"
          variant="outlined"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          required
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          variant="outlined"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />
        <TextField
          name="cpassword"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          required
          error={formik.touched.cpassword && formik.errors.cpassword}
          helperText={formik.touched.cpassword && formik.errors.cpassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cpassword}
          variant="outlined"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />
        <Box
          sx={{
            width: { xs: "90%", sm: "400px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <FormControl error={formik.touched.terms && formik.errors.terms}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.terms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="terms"
                />
              }
              label="I agree to the terms and conditions"
            />
            <FormHelperText>
              {formik.touched.terms && formik.errors.terms}
            </FormHelperText>
          </FormControl>
        </Box>

        <LoadingButton
          variant="contained"
          type="submit"
          loading={loading}
          sx={{
            width: "250px",
            height: "56px",
            borderRadius: "25px",
            fontSize: "20px",
            marginBottom: "80px",
          }}
        >
          SIGN UP
        </LoadingButton>
        <Divider sx={{ width: { xs: "90%", sm: "400px" } }}>OR</Divider>
        <Button
          startIcon={<Google />}
          sx={{
            height: "56px",
            fontSize: "1em",
            fontWeight: 600,
            color: (theme) =>
              theme.palette.mode === "dark"
                ? "white"
                : theme.palette.primary.main,
          }}
        >
          Sign in with Google
        </Button>
        <Typography variant="body1" marginY={"20px !important"}>
          Already have an account?{" "}
          <Link component={RouterLink} to={"/signin"}>
            Sign in
          </Link>
        </Typography>
      </Stack>
    </Form>
  );
}
