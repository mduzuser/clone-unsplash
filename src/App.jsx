//rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import { Home, About, Contact, LikedImages, DownloadImages } from "./pages";

//layout
import { MainLayout } from "./layout";

//action

import { action as HomeAction } from "./pages/Home";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          action: HomeAction,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/liked-images",
          element: <LikedImages />,
        },
        {
          path: "/download-images",
          element: <DownloadImages />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
