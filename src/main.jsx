import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Recipes from "./pages/Recipes";
import Pantry from "./pages/Pantry";
import Groceries from "./pages/Groceries";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/planner",
    element: <Planner />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
  },
  {
    path: "/pantry",
    element: <Pantry />,
  },
  {
    path: "/groceries",
    element: <Groceries />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
