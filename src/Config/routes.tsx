import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { APP, DASHBOARD } from "../Config/path";
import AppLayout from "../layout/Applayout";
import { Loadable } from "../layout/Loadable/loadable";

const Dashboard = Loadable(lazy(() => import("../pages/Dashboard")));


const appRoutes: RouteObject = {
  path: APP,
  element: <AppLayout />,
  children: [{ path: DASHBOARD, element: <Dashboard /> }],
};

// Main Routes
const routes: RouteObject[] = [
  { path: "/", element: <Navigate to={`${APP}/${DASHBOARD}`} /> },
  appRoutes,
];

export default routes;
