import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = (props) => {
  return (
    <NavLink style={({isActive}) => {
      return {
        backgroundColor: isActive ? 'rgb(125 211 252)' : ''
      }
    }} to={`/${props.link}`} className="w-full flex items-center text-white p-2 hover:bg-sky-300">
      {props.icon}
      {props.name}
    </NavLink>
  );
};

export default NavbarLink;

// const NavbarLink = (props) => {
//   return (
//     <li className="w-full hover:bg-sky-300 hover:text-white cursor-pointer p-2 text-white">
//       <NavLink style={({isActive}) => {
//         return {
//           backgroundColor: isActive ? 'black' : ''
//         }
//       }} to={`/${props.link}`} className="flex items-center text-right" >
//         {props.icon}
//         {props.name}
//       </NavLink>
//     </li>
//   );
// };
