import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Planner from "./routes/planner";
import Recipes from "./routes/recipes";
import Pantry from "./routes/pantry";
import Groceries from "./routes/groceries";
import Login from "./routes/login";
import Register from "./routes/register";
import ErrorPage from "./routes/error-page";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
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
