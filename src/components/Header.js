import React from "react";
import { motion } from "motion/react";

import Variants from "../utils/Variants";

// Required images
import menu from "../images/menu-icon.png";
import mark from "../images/mark-portrait.jpeg";

const headerVariants = {
  initial: {},
  animate: Variants.defaultAnimateVariant(0, 0),
}
const childVariants = Variants.defaultVariants(0, "5vh", 0, 0);

export default function Header() {
  return (
    <motion.header variants={headerVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="header">
      <motion.div variants={childVariants} className="dropdown">
        <img className="menu-icon" src={menu}/>
      </motion.div>
      <motion.div variants={childVariants} className="signature">
        <img className="icon" src={mark}/>
        <h4>Mark Mekhail</h4>
      </motion.div>
    </motion.header>
  );
};