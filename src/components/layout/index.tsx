import React from "react";
import { Box } from "@chakra-ui/react";
import { Outlet, redirect, useLocation } from "react-router-dom";

import Sidebar from "components/sidebar";
import { SidebarProvider } from "contexts/SidebarContext";
import Navbar from "components/navbar";
import { Navigate } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  console.log(location);

  if (location.key === "default") return <Navigate to="/default" />;

  return (
    <SidebarProvider>
      <Sidebar />
      <Box
        float="right"
        minHeight="100vh"
        height="100%"
        overflow="auto"
        position="relative"
        maxHeight="100%"
        w={{ base: "100%", xl: "calc( 100% - 290px )" }}
        maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
        transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        transitionDuration=".2s, .2s, .35s"
        transitionProperty="top, bottom, width"
        transitionTimingFunction="linear, linear, ease"
        pt="111px"
        px={{ base: "0.8rem", md: "1.6rem" }}
      >
        <Navbar />
        <Outlet />

        {/* <Portal>
          <Box>
            <Navbar
              onOpen={onOpen}
              logoText={"Horizon UI Dashboard PRO"}
              brandText={getActiveRoute(routes)}
              secondary={getActiveNavbar(routes)}
              message={getActiveNavbarText(routes)}
              fixed={fixed}
              {...rest}
            />
          </Box>
        </Portal>

        {getRoute() ? (
          <Box
            mx="auto"
            p={{ base: "20px", md: "30px" }}
            pe="20px"
            minH="100vh"
            pt="50px"
          >
            <Switch>
              {getRoutes(routes)}
              <Redirect from="/" to="/admin/default" />
            </Switch>
          </Box>
        ) : null}
        <Box>
          <Footer />
        </Box> */}
      </Box>
    </SidebarProvider>
  );
};

export default Layout;
