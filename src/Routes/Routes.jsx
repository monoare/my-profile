import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skill from "../Pages/Skills/Skill";
import Project from "../Pages/Project/Project";
import ProjectOne from "../Pages/Project/ProjectOne";
import ProjectTwo from "../Pages/Project/ProjectTwo";
import ProjectThree from "../Pages/Project/ProjectThree";
import Education from "../Pages/Education/Education";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skill />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/projectOne",
        element: <ProjectOne />,
      },
      {
        path: "/projectTwo",
        element: <ProjectTwo />,
      },
      {
        path: "/projectThree",
        element: <ProjectThree />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
