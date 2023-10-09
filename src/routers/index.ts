import { RouteObject, useRoutes } from "react-router-dom";

import Layout from "components/layout";
import Default from "pages/default";

export const routes: RouteObject[] = [
  {
    path: "",
    Component: Default,
  },
];

const Routers = () => {
  return useRoutes([
    {
      path: "/",
      Component: Layout,
      children: routes,
    },
  ]);
};

export default Routers;
