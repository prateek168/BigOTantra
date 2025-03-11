import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Ask from "./components/Ask";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Ask",
    element: <Ask />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
