import React from "react";
import { Fa500Px, FaAtom, FaBell } from "react-icons/fa";

const Navbar = () => {
  const NavItems = [
    "blog Dashboard",
    "blog Post",
    "Add new Post",
    "form and components",
    "tables",
    "user Profile",
    "error",
  ];
  return (
    // <div>
    <div className="sidebar">
      <div className="title">
        {" "}
        <Fa500Px style={{ color: "rgb(0, 204, 255)" }} />
        Shards Dashboard{" "}
      </div>
      {NavItems.map((item) => {
        return (
          <div className="menu ">
            {" "}
            <FaAtom className="menu_icon" />
            {item}{" "}
          </div>
        );
      })}
      <div className="menu ">
        {" "}
        <FaAtom className="menu_icon" />
        blog{" "}
      </div>
    </div>

    // </div>
  );
};

export default Navbar;
