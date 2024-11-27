import React from "react";
import { motion } from "motion/react";

import Variants from "../animation/Variants";

// Required images
import menu from "../images/menu-icon.png";
import mark from "../images/mark-portrait.jpeg";

export default function Header() {
  const variants = {
    initial: Variants.baseInitialVariant(0, "5vh"),
    animate: Variants.baseAnimationVariant(0, 0)
  };

  return (
    <motion className="header">
      <div className="dropdown">
        <img className="menu-icon" src={menu}/>
      </div>
      <motion.div variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }} className="signature">
        <img className="icon" src={mark}/>
        <h4>Mark Mekhail</h4>
      </motion.div>
    </motion>
  );
};