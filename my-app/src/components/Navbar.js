import React, { useState } from "react";

import { SiBitcoinsv } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import NavbarLink from "./Layout/NavbarLink";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const clickHandler = (e) => {
    setShowNav((prevShowNav) => {
      return !prevShowNav;
    });
  };

  return (
    <div>
      <nav className="fixed sm:h-screen bg-blue-500 m-0 w-full sm:w-fit sm:block z-50 flex items-center justify-between p-6 sm:p-0">
        <a href="/" className="flex justify-start sm:justify-center items-center sm:p-6 text-white font-bold text-xl z-50">
          <img
            className="w-12 mr-4 z-50"
            src="https://github.com/adrianhajdin/project_cryptoverse/blob/main/src/images/cryptocurrency.png?raw=true"
          />
          Crypto-app
        </a>
        <ul className="hidden sm:block">
          <NavbarLink
            link=""
            name="Home"
            icon={<AiFillHome className="mr-4 text-white" />}
          />
          <NavbarLink
            link="cryptocurrencies"
            name="Cryptocurrencies"
            icon={<SiBitcoinsv className="mr-4 text-white" />}
          />
          <NavbarLink
            link="news"
            name="News"
            icon={<BiNews className="mr-4 text-white" />}
          />
        </ul>
        <FaBars
          onClick={clickHandler}
          size={25}
          color="white"
          className="cursor-pointer z-50 block sm:hidden"
        />
      </nav>
      {showNav && (
        <ul className="fixed text-center bg-blue-500 flex flex-col w-full left-0 items-center mt-24 z-10 animate-slide">
          <NavbarLink
            link=""
            name="Home"
            icon={<AiFillHome className="mr-4 text-white z-0" />}
            onClick={clickHandler}
          />
          <NavbarLink
            link="cryptocurrencies"
            name="Cryptocurrencies"
            icon={<SiBitcoinsv className="mr-4 text-white" />}
            onClick={clickHandler}
          />
          <NavbarLink
            link="news"
            name="News"
            icon={<BiNews className="mr-4 text-white" />}
            onClick={clickHandler}
          />
        </ul>
      )}
    </div>
  );
};

export default Navbar;
