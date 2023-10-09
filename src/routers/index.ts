import React from "react";
import { useRoutes } from "react-router-dom";
import { MdHome } from "react-icons/md";

import Layout from "components/layout";
import Default from "pages/default";

export interface IRouteItem {
  name: string;
  path: string;
  icon?: React.ComponentType;
  Component: React.ComponentType;
}

export const routes: IRouteItem[] = [
  {
    name: "Default",
    path: "default",
    icon: MdHome,
    Component: Default,
  },
  {
    name: "TEST 1",
    path: "test1",
    Component: Default,
  },
  {
    name: "TEST 2",
    path: "test2",
    Component: Default,
  },
];

const Routers = () => {
  return useRoutes([
    {
      path: "/",
      Component: Layout,
      children: routes.map((route) => ({
        path: route.path,
        Component: route.Component,
      })),
    },
  ]);
};

export default Routers;
