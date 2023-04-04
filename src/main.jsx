import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Planner from "./routes/Planner";
import Recipes from "./routes/Recipes";
import Pantry from "./routes/Pantry";
import Groceries from "./routes/Groceries";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ErrorPage from "./routes/error-page";

// import Groceries from "./routes/Groceries";

// import planner from "./routes/Planner";
// import recipes from "./routes/Recipes";
// import pantry from "./routes/Pantry";
// import groceries from "./routes/Groceries";

import App from "./App";
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
