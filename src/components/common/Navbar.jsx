/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { FiDelete, FiMoon, FiSun } from "react-icons/fi";
import { BiMenu, BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink  } from "react-router-dom";
import SearchBar from "./SearchBar"; // Imported SearchBar component
import {
  closeDropdown,
  closeSidebar,
  openSidebar,
  toggleDarkMode,
  uiStore,
} from "../../features/uiSlice";
import { navLinks } from "../../data/navLinks";
import SingleLink from "./SingleLink";

const Navbar = () => {
  const rootDoc = document.querySelector(":root");
  const { darkMode, isSidebarOpen } = useSelector(uiStore);
  const dispatch = useDispatch();

  // Dark mode toggle
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  // Store dark mode value in localStorage
  useEffect(() => {
    if (darkMode) rootDoc.classList.add("dark");
    else rootDoc.classList.remove("dark");
    localStorage.setItem("Martvilla-theme-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleClose = (e) => {
    if (!e.target.classList.contains("link")) {
      dispatch(closeDropdown());
    }
  };

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("mobile-modal")) dispatch(closeSidebar());
  };

  return (
    <div
      className="navbar fixed w-full z-20 top-0 left-0 py-2 bg-white/60 border-b backdrop-blur-sm dark:border-dark dark:bg-card-dark/60"
      onMouseOver={handleClose}
    >
      <div className="max-w-7xl mx-auto px-4 flex-center-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex-align-center gap-x-1">
        <img
          src="/images/icon.png.ico" 
          alt="Hindsight Ventures Logo"
          className="h-10 w-auto"
        />
        <h1 className="hidden md:block">Hindsight Ventures</h1>
        </Link>

        <div className="flex-align-center gap-x-4">
          {/* ----------------------------- Desktop Menu ----------------------------- */}
          <ul className="hidden md:flex-align-center">
            {navLinks.map((link) => (
              <SingleLink {...link} key={link.id} />
            ))}
          </ul>

          {/* ----------------------------- Mobile Menu ----------------------------- */}
          <div
            className={`lg:hidden mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50 z-50 opacity-0 pointer-events-none transition-a ${
              isSidebarOpen && "open"
            }`}
            onClick={handleCloseSidebar}
          >
            <ul
              className={`mobile-dialog overflow-auto absolute flex flex-col space-y-4 p-3 bg-white dark:bg-card-dark h-screen max-w-[300px] w-full -translate-x-[500px] transition-a ${
                isSidebarOpen && "open"
              }`}
            >
              <div className="border-b flex-center-between dark:border-slate-800">
                <p className="uppercase">Menu</p>
                <div
                  className="icon-box md:hidden"
                  onClick={() => dispatch(closeSidebar())}
                >
                  <FiDelete />
                </div>
              </div>
              {navLinks?.map(({ id, linkText, url, subLinks }) => (
                <ul key={id}>
                  <NavLink
                    to={url}
                    end
                    className="w-fit before:!hidden"
                    onClick={() => dispatch(closeSidebar())}
                  >
                    {linkText}
                  </NavLink>
                  {subLinks?.map(({ id, linkText, url }) => (
                    <ul key={id} className="mt-2">
                      <NavLink
                        to={url}
                        end
                        className="relative ml-8 text-sm before:hidden w-fit after:absolute after:w-2 after:h-2 after:rounded-full after:border-2 after:top-1/2 after:-translate-y-1/2 after:-left-4 dark:after:opacity-50"
                        onClick={() => dispatch(closeSidebar())}
                      >
                        {linkText}
                      </NavLink>
                    </ul>
                  ))}
                </ul>
              ))}
            </ul>
          </div>

          {/* ----------------------------- Navbar Right Side ----------------------------- */}
          <div className="space-x-2 flex-align-center">
            {/* Search Bar */}
            <SearchBar />

            {/* Dark mode toggle */}
            <div
              className="bg-white shadow-md icon-box dark:bg-dark-light hover:shadow-lg hover:bg-transparent"
              onClick={handleDarkMode}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </div>

            {/* Profile Icon */}
            <div className="bg-white shadow-md icon-box dark:bg-dark-light hover:shadow-lg hover:bg-transparent">
              <BiUser />
            </div>

            {/* Mobile Menu Toggle */}
            <div
              className="icon-box md:hidden"
              onClick={() => dispatch(openSidebar())}
            >
              <BiMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
