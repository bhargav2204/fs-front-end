import React from "react";

const homePage = React.lazy(() => import("../../components/dashboard/index"));
const ProjectManager = React.lazy(() => import("../../components/project-manager/project-manager"));

const Routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "homepage", component: homePage },
  { path: "/projectmanager", name: "projectmanager", component: ProjectManager },
];

export default Routes;
