import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Pages
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Recipes from "./pages/Recipes";
import Pantry from "./pages/Pantry";
import Groceries from "./pages/Groceries";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="planner" element={<Planner />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="pantry" element={<Pantry />} />
      <Route path="groceries" element={<Groceries />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
