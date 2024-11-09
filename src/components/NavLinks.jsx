//data links

import { Link } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];
function NavLinks() {
  return (
    <>
      {navLinks.map((navLink) => {
        return (
          <li key={navLink.path}>
            <Link to={navLink.path} className="font-semibold">
              {navLink.text}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
