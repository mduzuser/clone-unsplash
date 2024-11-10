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
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";

//components
import { ProtectedRoutes } from "./components";

//global context
import { useGlobalContext } from "./hooks/useGlobalContext";

//react impotrs
import { useEffect } from "react";

//firebase auth
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const { user, dispatch, authReady } = useGlobalContext();
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
      action: LoginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to={"/"} /> : <Register />,
      action: RegisterAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });
  }, []);

  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
