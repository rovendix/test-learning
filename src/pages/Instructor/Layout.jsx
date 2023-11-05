import { Box } from "@mui/material";
import React, { Suspense, useRef } from "react";
import Navbar from "../../Components/Student/Navbar/Navbar";
import MiniDrawer from "./Drawer/Drawer";
import { Outlet } from "react-router-dom";

function Layout() {
  const drawerRef = useRef(null);
  return (
    <Suspense>
      <Box sx={{ pt: "0.5em" }}>
        <MiniDrawer ref={drawerRef} />
        <Navbar onMenuClick={() => drawerRef.current?.toggleOpenDrawer()} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            py: "calc(60px + 1em)",
            height: "1000px",
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
    </Suspense>
  );
}

export default Layout;
