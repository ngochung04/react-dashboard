import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import Routers from "routers";
import { BrowserRouter } from "react-router-dom";
import { theme } from "theme";
import "assets/css/base.scss";
import { SidebarProvider } from "contexts/SidebarContext";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <SidebarProvider>
        <BrowserRouter basename="/">
          <Routers />
        </BrowserRouter>
      </SidebarProvider>
    </ChakraProvider>
  </>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
