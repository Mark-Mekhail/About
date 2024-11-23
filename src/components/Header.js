import React from "react";

// Required images
import menu from "../images/menu-icon.png";
import mark from "../images/mark-portrait.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="dropdown">
        <img className="menu-icon" src={menu}/>
      </div>
      <div className="signature">
        <img className="icon" src={mark}/>
        <h4>Mark Mekhail</h4>
      </div>
    </header>
  );
};

export default Header;