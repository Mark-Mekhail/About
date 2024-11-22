import React from "react";
import mark from "../images/mark-portrait.jpeg";

const Header = () => {
  return (
    <header class="header">
      <div id="dropdown">
      </div>
      <div id="signature">
        <img id="mark-photo" src={mark}/>
        <p>Mark Mekhail</p>
      </div>
    </header>
  );
};

export default Header;