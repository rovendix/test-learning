import { Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

function CustomLink(props) {
  return (
    <Link component={RouterLink} sx={props.sx} to={props.to}>
      {props.children}
    </Link>
  );
}

export default CustomLink;
