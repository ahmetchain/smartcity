import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
import IdeathonPage from "./Pages/IdeathonPage";
import IdeathonApplyPage from "./Pages/IdeathonApplyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/ideathon",
    element: <IdeathonPage />,
  },
  {
    path: "/ideathon-apply",
    element: <IdeathonApplyPage />,
  },
]);
export function Router() {
  return <RouterProvider router={router} />;
}
