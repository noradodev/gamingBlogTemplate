import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Logo = () => (
  <div className="img-l-logo px-3">
    <img
      src="https://www.freeiconspng.com/thumbs/gaming-logo/gaming-joystick-logo-png-image-26.png"
      alt=""
      className="w-20"
    />
  </div>
);

const SearchBar = () => (
  <div className="search-l-bar hidden md:block px-3 relative">
    <input
      type="text"
      placeholder="Discover new Games"
      className="bg-blue-800/10 p-2 rounded px-10"
    />
    <span className="absolute left-6 top-3">
      <FiSearch className="text-blue-800" />
    </span>
  </div>
);

const NavLinks = () => (
  <div className="menu-l-link hidden md:block px-3">
    <Link to="/" className="mx-2">
      Explore
    </Link>
    <Link to="/profile" className="mx-1">
      Profile
    </Link>
  </div>
);

const AuthLinks = () => (
  <div className="hidden md:block">
    <Link to="/login" className="bg-blue-100/40 p-3 rounded-md mr-2">
      Login
    </Link>
    <Link to="/register" className="bg-blue-800 p-3 rounded-md ">
      Register
    </Link>
  </div>
);

const NavBar = () => {
  const [fixedNavBar, setFixedNavBar] = useState(false);
  const [menuBar, setMenuBar] = useState(false);

  const handleMenuClick = () => {
    setMenuBar((prevMenuBar) => !prevMenuBar);
  };

  const handleScroll = () => {
    setFixedNavBar(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuBar(false); // Close the menu when a link is clicked
  };

  return (
    <div
      className={`container mx-auto fixed top-0 left-0 w-full h-20 z-50 ${
        fixedNavBar ? "bg-[#030323]" : ""
      }`}
    >
      <div className="flex justify-between text-white px-10 h-20">
        <div className="l-section-nav flex justify-center items-center">
          <div className="logo-nav flex justify-center items-center">
            <Logo />
            <NavLinks />
            <SearchBar />
          </div>
        </div>
        <div className="r-section-nav flex justify-center items-center">
          <AuthLinks />
          <CiMenuFries
            className="text-white w-10 md:hidden"
            onClick={handleMenuClick}
          />
          {menuBar && (
            <div className="menu-bar fixed top-0 left-0 w-full h-full block md:hidden bg-blue-900 ">
              <div className="absolute top-20 right-20">
                <div className="flex justify-between">
                  <FiSearch className="p-1" size={30} />
                  <AiOutlineClose
                    onClick={handleMenuClick}
                    size={30}
                    className="p-1"
                  />
                </div>
              </div>
              <div className="menu-l-link flex flex-col justify-center items-center h-full px-3 ">
                <div className="w-full flex flex-col text-center ">
                  <Link to="/" className="pb-5" onClick={handleLinkClick}>
                    Explore
                  </Link>
                  <Link
                    to="/profile"
                    className="pb-5"
                    onClick={handleLinkClick}
                  >
                    Profile
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="bg-blue-100/40 p-3 rounded-md mr-2"
                    onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-blue-800 p-3 rounded-md "
                    onClick={handleLinkClick}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
