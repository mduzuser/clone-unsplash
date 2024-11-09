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
import { FaDownload, FaUserCircle } from "react-icons/fa";

//save theme local stroge
const themeLocalStorage = () => {
  return localStorage.getItem("theme") || "winter";
};
function Navbar() {
  const { likedImages } = useGlobalContext();

  const [theme, setTheme] = useState(themeLocalStorage());

  const toggleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
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
                0
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
          <div>
            <FaUserCircle className="text-3xl md:text-4xl" />
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
                      0
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