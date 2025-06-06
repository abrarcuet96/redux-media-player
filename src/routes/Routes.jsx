import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import VideoPage from "../pages/VideoPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: `/videos/:videoId`,
        element: <VideoPage />,
      },
    ],
  },
]);
export default routes;
