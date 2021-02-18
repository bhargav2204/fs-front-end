import React from "react";

const homePage = React.lazy(() => import("../../components/dashboard/index"));

const Routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "homepage", component: homePage },
];

export default Routes;
