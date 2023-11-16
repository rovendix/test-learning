import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { useState } from "react";
import { BaseApi } from "../../../../../../util/BaseApi";

export default function NewChapter({ open, setOpen, setRefetch }) {
  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      chapterTitle: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      axios
        .post(BaseApi + "/course/createChapter", values, {
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setLoading(false);
          setOpen(false);
          setRefetch(true);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    },
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          width: "500px",
          backgroundColor: (theme) => theme.palette.background.b1,
          backgroundImage: "none",
        },
      }}
    >
      <DialogTitle
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.primary.border}`,
        }}
      >
        Create new chapter
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="chapterTitle"
          label="Chapter Title"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.courseTitle}
          onChange={formik.handleChange}
          autoFocus
          autoComplete="off"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <LoadingButton
          onClick={formik.handleSubmit}
          loading={loading}
          disabled={formik.values.chapterTitle === ""}
        >
          Create
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
