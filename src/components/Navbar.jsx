//ri
import { FaBarsProgress, FaHeart } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { MdPhotoCamera } from "react-icons/md";

//rrd
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

//global context
import { useGlobalContext } from "../hooks/useGlobalContext";

//components
import { NavLinks } from "./";
import { FaDownload } from "react-icons/fa";

//firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

//toastfiye
import { toast } from "react-toastify";

//save theme local stroge
const themeLocalStorage = () => {
  return localStorage.getItem("theme") || "winter";
};
function Navbar() {
  const { likedImages, downloadImages, user, dispatch } = useGlobalContext();

  const [theme, setTheme] = useState(themeLocalStorage());

  const toggleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  const signOutUser = async () => {
    try {
      dispatch({ type: "LOGOUT" });
      await signOut(auth);
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <header className="bg-primary-content">
      <div className="align-elements navbar">
        {/* navbar start */}
        <div className="navbar-start">
          <Link to={"/"}>
            <MdPhotoCamera className="text-4xl md:text-5xl" />
          </Link>
        </div>
        {/* navbar start */}

        {/* navbar center */}
        <div className="navbar-center hidden md:flex">
          <ul className="flex items-center gap-5">
            <NavLinks />
          </ul>
        </div>
        {/* navbar center */}

        {/* navbar end */}
        <div className="navbar-end flex gap-5">
          {/* downloaded images */}
          <Link to={"/download-images"} className="hidden md:flex">
            <div className="indicator">
              <span className="badge indicator-item badge-secondary badge-sm">
                {downloadImages.length}
              </span>
              <FaDownload className="text-2xl md:text-3xl" />
            </div>
          </Link>
          {/* downloaded images */}

          {/* liked images */}
          <Link to={"/liked-images"} className="hidden md:flex">
            <div className="indicator">
              <span className="badge indicator-item badge-secondary badge-sm">
                {likedImages.length}
              </span>
              <FaHeart className="text-2xl md:text-3xl" />
            </div>
          </Link>
          {/* liked images */}

          {/* day/night */}
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={toggleTheme} />

            <IoSunnyOutline className="swap-on fill-current text-3xl md:text-4xl" />

            <IoMdMoon className="swap-off fill-current text-3xl md:text-4xl" />
          </label>
          {/* day/night */}

          {/* user */}
          <div className="flex items-center gap-3">
            <p className="font-bold">
              {user.displayName && user.displayName.split(" ")[0]}
            </p>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar btn btn-circle btn-ghost"
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                  {user.photoURL && <img src={user.photoURL} />}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={signOutUser}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
          {/* user */}

          {/* bars */}
          <div className="dropdown dropdown-end dropdown-bottom md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 border-none bg-transparent shadow-none hover:bg-transparent"
            >
              <FaBarsProgress className="text-3xl md:text-4xl" />
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-auto rounded-lg bg-base-100 p-5 text-center shadow"
            >
              <NavLinks />

              <div className="mt-5 flex items-center justify-center gap-5">
                {/* downloaded images */}
                <Link to={"/download-images"}>
                  <div className="indicator">
                    <span className="badge indicator-item badge-secondary badge-sm">
                      {downloadImages.length}
                    </span>
                    <FaDownload className="text-2xl md:text-3xl" />
                  </div>
                </Link>
                {/* downloaded images */}

                {/* liked images */}
                <Link to={"/liked-images"}>
                  <div className="indicator">
                    <span className="badge indicator-item badge-secondary badge-sm">
                      {likedImages.length}
                    </span>
                    <FaHeart className="text-2xl md:text-3xl" />
                  </div>
                </Link>
                {/* liked images */}
              </div>
            </ul>
          </div>
          {/* bars */}
        </div>
        {/* navbar end */}
      </div>
    </header>
  );
}

export default Navbar;
