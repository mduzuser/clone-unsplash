//rrd
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//pages
import {
  Home,
  About,
  Contact,
  LikedImages,
  DownloadImages,
  ImageInfo,
  Login,
  Register,
} from "./pages";

//layout
import { MainLayout } from "./layout";

//action
import { action as HomeAction } from "./pages/Home";

//components
import { ProtectedRoutes } from "./components";
function App() {
  const user = false;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
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
        {
          path: "/image-info",
          element: <ImageInfo />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to={"/"} /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to={"/"} /> : <Register />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
