import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "./dashboard";
import { MusicPage } from "./dashboard/music-page";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <MusicPage />,
      },
    ],
  },
]);
