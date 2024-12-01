import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
import IdeathonPage from "./Pages/IdeathonPage";
import IdeathonApplyPage from "./Pages/IdeathonApplyPage";
import KVKKPage from "./Pages/KVKK";

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
  {
    path: "/kvkk",
    element: <KVKKPage />,
  },
]);
export function Router() {
  return <RouterProvider router={router} />;
}
