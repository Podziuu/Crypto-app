import React from "react";

const NavLink = (props) => {
  return (
    <li className="w-full hover:bg-sky-300 hover:text-white cursor-pointer p-2 text-white">
      <a className="flex items-center text-right">
        {props.icon}
        {props.name}
      </a>
    </li>
  );
};

export default NavLink;
