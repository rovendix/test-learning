import React from "react";
import {
  Box,
  Button,
  ButtonBase,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
  alpha,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Delete, Edit, MoreVert, Visibility } from "@mui/icons-material";
import CustomTable from "../../../CustomTable/CustomTable";

const MoreButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ p: "4px" }}
      >
        <MoreVert sx={{ fontWeight: "16px" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          "& >.MuiPaper-root": {
            backgroundColor: (theme) => alpha(theme.palette.background.b1, 0.7),
            backdropFilter: "blur(3px)",
            borderRadius: "8px",
            overflow: "hidden",
          },
        }}
      >
        <MenuItem onClick={handleClose} aria-label="preview">
          <Visibility sx={{ fontSize: "1.3em" }} />
          <Typography variant="body2" sx={{ ml: "0.5em" }} fontSize="1em">
            Preview
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} aria-label="edit">
          <Edit sx={{ fontSize: "1.3em" }} />
          <Typography variant="body2" sx={{ ml: "0.5em" }} fontSize="1em">
            Edit
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} aria-label="delete">
          <Delete sx={{ fontSize: "1.3em" }} color="error" />
          <Typography
            variant="body2"
            sx={{ ml: "0.5em" }}
            color="error"
            fontSize="1em"
          >
            Delete
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};
const CourseName = ({ name, url }) => {
  return (
    <Link
      component={RouterLink}
      to={url}
      underline="none"
      sx={{ fontWeight: "600" }}
    >
      {name}
    </Link>
  );
};
function CoursesList() {
  const headCells = [
    {
      id: "courseName",
      disablePadding: false,
      label: "Course Name",
    },
    {
      id: "videoCount",
      disablePadding: false,
      label: "Video Count",
    },
    {
      id: "studentCount",
      disablePadding: false,
      label: "Student Count",
    },
    {
      id: "courseRating",
      disablePadding: false,
      label: "Course Rating",
    },
    {
      id: "courseStatus",
      disablePadding: false,
      label: "Course Status",
    },
    {
      id: "settings",
      disablePadding: false,
      label: "",
      disableSorting: true,
    },
  ];

  function createData(
    id,
    courseName,
    videoCount,
    studentCount,
    courseRating,
    courseStatus
  ) {
    return {
      id,
      courseName: (
        <CourseName name={courseName} url={`/instructor/courses/${id}`} />
      ),
      videoCount,
      studentCount,
      courseRating,
      courseStatus,
      settings: <MoreButton key={id} />,
    };
  }

  const rows = [
    createData(1, "React JS", 50, 1000, 4.5, "Published"),
    createData(2, "Node JS", 18, 150, 4.0, "Published"),
    createData(3, "Mongo DB", 1, 50, 3.5, "Published"),
    createData(4, "Express JS", 3, 0, 0, "Draft"),
  ];

  return (
    <CustomTable
      rowsCount={5}
      title={"Courses List"}
      rows={rows}
      headCells={headCells}
      showCheckbox={false}
    />
  );
}

export default CoursesList;
