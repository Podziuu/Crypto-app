import React from "react";

import { SiBitcoinsv } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import NavLink from "./Layout/NavLink";

const Navbar = () => {
  return (
    <div className="fixed h-screen bg-blue-500 m-0">
      <a className="flex justify-center items-center p-6 text-white font-bold text-xl">
        <img
          className="w-12 mr-4"
          src="https://github.com/adrianhajdin/project_cryptoverse/blob/main/src/images/cryptocurrency.png?raw=true"
        />
        Crypto-app
      </a>
      <ul>
        <NavLink name="Home" icon={<AiFillHome className="mr-4 text-white" />} />
        <NavLink name="Cryptocurrencies" icon={<SiBitcoinsv className="mr-4 text-white" />} />
        <NavLink name="News" icon={<BiNews className="mr-4 text-white" />} />
      </ul>
    </div>
  );
};

export default Navbar;
