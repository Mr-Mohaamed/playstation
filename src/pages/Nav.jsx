import { Link } from "react-router-dom";
import ThemeToggleButton from "../components/ThemeToggleButton";
import useScrollNavbar from "../hooks/useScrollNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import DropLinkComponent from "../components/DropLinkComponent";
import { useState } from "react";

const Nav = () => {
  const { visible, TopPage } = useScrollNavbar();

  const navbarStyle = {
    position: "sticky",
    top: visible ? "0" : "-50px",
    transition: "top 0.5s",
  };
  const secondaryNav = {
    position: "sticky",
    top: visible ? "50px" : "0",
    transition: "top 0.5s",
  };

  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    // const menu = document.querySelector(".menu");
    // menu.classList.toggle("hidden");
    setMenuActive(!menuActive);
  };

  console.log(visible + TopPage);
  return (
    <>
      <nav className="bg-white top-0 left-0 w-full z-30" style={navbarStyle}>
        <div className="pc h-full min-h-[50px]  m-auto text-base font-bold text-black px-4 hidden mobile:flex ">
          <div className="logo flex-1 flex justify-start items-center">
            <Link className=" text-blue-500 text-2xl font-bold px-4" to="/">
              <FontAwesomeIcon icon={faPlaystation} />
            </Link>
            <ThemeToggleButton />
            <div className="links flex justify-start items-center flex-1 text-xs lg:text-sm 2xl:text-base ">
              <ul className="flex justify-center xl:gap-2 duration-300">
                <li className="flex items-center justify-center ">
                  <Link
                    className="text-gray-600  hover:text-blue-500 duration-300"
                    to="/"
                  >
                    <DropLinkComponent
                      linkName="Games"
                      icon={faChevronDown}
                      color="gray"
                    />
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <Link
                    className="text-gray-600  hover:text-blue-500 duration-300"
                    to="/about"
                  >
                    <DropLinkComponent
                      linkName="PS5"
                      icon={faChevronDown}
                      color="gray"
                    />
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <Link
                    className="text-gray-600  hover:text-blue-500 duration-300"
                    to="/about"
                  >
                    <DropLinkComponent
                      linkName="PS4"
                      icon={faChevronDown}
                      color="gray"
                    />
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <Link
                    className="text-gray-600  hover:text-blue-500 duration-300"
                    to="/about"
                  >
                    <DropLinkComponent
                      linkName="Services"
                      icon={faChevronDown}
                      color="gray"
                    />
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <Link
                    className="text-gray-600  hover:text-blue-500 duration-300"
                    to="/about"
                  >
                    <DropLinkComponent
                      linkName="Accessories"
                      icon={faChevronDown}
                      color="gray"
                    />
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <Link
                    className="text-gray-600  hover:text-blue-500 duration-300"
                    to="/about"
                  >
                    <DropLinkComponent
                      linkName="News"
                      icon={faChevronDown}
                      color="gray"
                    />
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <Link
                    className="text-gray-600  hover:text-blue-500 duration-300"
                    to="/about"
                  >
                    <DropLinkComponent
                      linkName="Store"
                      icon={faChevronDown}
                      color="gray"
                    />
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <Link
                    className="text-gray-600  hover:text-blue-500 duration-300"
                    to="/about"
                  >
                    <DropLinkComponent
                      linkName="Support"
                      icon={faChevronDown}
                      color="gray"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="buttons flex items-center justify-center gap-3 2xl:gap-6">
            <button className="rounded-full bg-blue-500 hover:bg-blue-600 duration-200 px-2 2xl:px-4 py-1 2xl:py-2 text-white text-xs lg:text-sm 2xl:text-lg">
              Sign Up
            </button>
            <button className="rounded-full bg-gray-300 hover:bg-gray-400 duration-200 px-2 2xl:px-4 py-1 2xl:py-2 text-white text-xs lg:text-sm 2xl:text-lg">
              Login
            </button>
          </div>
        </div>
        <div className="mobile flex justify-between items-center mobile:hidden px-4 py-2">
          <div className="icons flex justify-center items-center gap-4">
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: "1.5em" }}
              className={` cursor-pointer ${
                menuActive ? "flip-right" : ""
              } duration-200`}
              onClick={() => toggleMenu()}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ fontSize: "1.5em" }}
            />
          </div>
          <Link className=" text-blue-600 text-2xl font-bold px-4" to="/">
            <FontAwesomeIcon
              icon={faPlaystation}
              style={{ fontSize: "1.5em" }}
            />
          </Link>
          <button className="font-bold rounded-full bg-blue-500 hover:bg-blue-600 duration-200 px-2 2xl:px-4 py-1 2xl:py-2 text-white text-sm ">
            Sign Up
          </button>
        </div>
      </nav>
      <section
        className="flex justify-center gap-4 items-center h-16 bg-white z-30"
        style={secondaryNav}
      >
        <a className="rounded-full hover:bg-gray-300 duration-200 px-4 py-1 cursor-pointer font-semibold text-xs lg:text-sm 2xl:text-lg flex justify-center items-center ">
          PlayStation PC games
        </a>
        <a className="rounded-full bg-gray-300 hover:bg-gray-400 duration-200 px-4 py-1 cursor-pointer font-semibold text-xs lg:text-sm 2xl:text-lg flex justify-center items-center ">
          FAQs
        </a>
      </section>
    </>
  );
};

export default Nav;
