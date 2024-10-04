// components/Navbar.js
import { Link } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";
import ThemeToggleButton from "../components/ThemeToggleButton";

const StickyNav = () => {
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`fixed top-0 w-full transition-transform duration-300 bg-black/80  left-0  z-30 ${
        scrollPosition > 50 ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container h-full min-h-[60px] flex m-auto text-base font-bold text-white">
        <div className="logo flex-1 flex justify-start items-center">
          <Link className="p-4 text-blue-500 text-2xl font-bold" to="/">
            LOGO
          </Link>
          <ThemeToggleButton />
        </div>
        <div className="links flex justify-end items-center flex-1">
          <ul className="flex justify-center gap-2 duration-300">
            <li className="flex items-center justify-center">
              <Link className="p-4 hover:text-blue-500 duration-300" to="/">
                Home
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                className="p-4 hover:text-blue-500 duration-300"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                className="p-4 hover:text-blue-500 duration-300"
                to="/contactus"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
