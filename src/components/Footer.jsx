//ri
import { FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-primary-content">
      <footer
        className="align-elements align-elements-sm py-4 
        md:flex md:items-center md:justify-center md:gap-10"
      >
        <div>
          <p className="text-center">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </div>

        <div className="flex items-center justify-center gap-5 mt-4 md:mt-0">
          <a href="https://Instagram.com/mduzuser">
            <FaInstagram className="text-2xl" />
          </a>

          <a href="https://x.com/mrmarcusedev?t=TWZhcVieDxG2nK11-HvWzA&s=09">
            <FaTwitter className="text-2xl" />
          </a>

          <a href="https://t.me/mduzuser">
            <FaTelegramPlane className="text-2xl" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

{
  /* <aside className="w-full md:w-auto">
          
        </aside>

        <nav className="flex items-center justify-center gap-5 w-full md:w-auto">
         
        </nav> */
}
