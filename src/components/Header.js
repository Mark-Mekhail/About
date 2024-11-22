import React from "react";
import menu from "../images/menu-icon.png";
import mark from "../images/mark-portrait.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div id="dropdown">
        <img id="menu-icon" src={menu}/>
      </div>
      <div id="signature">
        <img id="mark-photo" src={mark}/>
        <p>Mark Mekhail</p>
      </div>
    </header>
  );
};

export default Header;