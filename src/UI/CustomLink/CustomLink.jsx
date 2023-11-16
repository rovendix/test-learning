import { Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

function CustomLink({ sx, to, children, target }) {
  return (
    <Link component={RouterLink} sx={sx} to={to} target={target}>
      {children}
    </Link>
  );
}

export default CustomLink;
