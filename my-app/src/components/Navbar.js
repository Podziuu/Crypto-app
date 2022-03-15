import React from "react";

import { SiBitcoinsv } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import NavbarLink from "./Layout/NavbarLink";

const Navbar = () => {
  return (
    <nav className="fixed h-screen bg-blue-500 m-0 hidden sm:block">
      <a className="flex justify-center items-center p-6 text-white font-bold text-xl">
        <img
          className="w-12 mr-4"
          src="https://github.com/adrianhajdin/project_cryptoverse/blob/main/src/images/cryptocurrency.png?raw=true"
        />
        Crypto-app
      </a>
      <ul>
        <NavbarLink link='' name="Home" icon={<AiFillHome className="mr-4 text-white" />} />
        <NavbarLink link="cryptocurrencies" name="Cryptocurrencies" icon={<SiBitcoinsv className="mr-4 text-white" />} />
        <NavbarLink link="news" name="News" icon={<BiNews className="mr-4 text-white" />} />
      </ul>
    </nav>
  );
};

export default Navbar;
