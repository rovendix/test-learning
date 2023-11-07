import { Box } from "@mui/material";
import React, { Suspense, useRef } from "react";
import Navbar from "../../Components/Instructor/Navbar/Navbar";
import MiniDrawer from "../../Components/Instructor/Drawer/Drawer";
import { Outlet } from "react-router-dom";

function Layout() {
  const drawerRef = useRef(null);
  return (
    <Box sx={{ pt: "0.5em" }}>
      <MiniDrawer ref={drawerRef} />
      <Navbar onMenuClick={() => drawerRef.current?.toggleOpenDrawer()} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          pt: "calc(60px + 1em)",
          mr: "1em",
          ml: {
            xs: "1em",
            md: "calc(65px + 1em)",
            lg: "calc(240px + 1em)",
          },
        }}
      >
        <Box width="100%" maxWidth="1400px">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
