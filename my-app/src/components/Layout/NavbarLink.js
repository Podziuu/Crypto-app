import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = (props) => {
  return (
    <NavLink
      onClick={props.onClick}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "rgb(125 211 252)" : "",
        };
      }}
      to={`/${props.link}`}
      className="w-full flex items-center text-white p-2 hover:bg-sky-300"
    >
      {props.icon}
      {props.name}
    </NavLink>
  );
};

export default NavbarLink;
