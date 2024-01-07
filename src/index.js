import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./home";
import About from "./about";

//import Root, { rootLoader } from "./routes/root";
//import Team, { teamLoader } from "./routes/team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    //loader: rootLoader,
    children: [],
  },
  {
    path: "/about",
    element: <About />,
    //loader: rootLoader,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
