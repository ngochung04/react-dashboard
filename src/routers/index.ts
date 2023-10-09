import { RouteObject, useRoutes } from "react-router-dom";

import Layout from "components/layout";
import Default from "pages/default";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "default",
        Component: Default,
      },
    ],
  },
];

const Routers = () => {
  return useRoutes(routes);
};

export default Routers;
