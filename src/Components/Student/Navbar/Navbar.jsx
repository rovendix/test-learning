import { Box, IconButton } from "@mui/material";
import React from "react";
import ActionsRight from "../../Navbar/ActionsRight/ActionsRight";
import { Menu } from "@mui/icons-material";
function Navbar({ onMenuClick }) {
  return (
    <Box
      component="header"
      sx={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "space-between", md: "flex-end" },
        px: "0.5em",
        backgroundColor: (theme) => theme.palette.background.b1,
        borderRadius: "8px",
        position: "fixed",
        width: {
          xs: "calc(100vw - 2.5em)",
          md: "calc(100vw - 65px - 2.5em)",
          lg: "calc(100vw - 240px - 2.5em)",
        },
        maxWidth: "1400px",
        transform: "translateX(-50%)",
        left: {
          xs: "50%",
          md: "calc(50% + 32.5px)",
          lg: "calc(50% + 120px)",
        },
        zIndex: 100,
      }}
    >
      <IconButton
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={onMenuClick}
      >
        <Menu />
      </IconButton>
      <ActionsRight cartVisible={false} />
    </Box>
  );
}

export default Navbar;
