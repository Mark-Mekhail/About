import React from "react";
import { motion } from "motion/react";

import Variants from "../utils/Variants";

// Required images
import menu from "../images/menu-icon.png";
import mark from "../images/mark-portrait.jpeg";

const signatureVariants = Variants.defaultVariants(0, "5vh", 0, 0);

export default function Header() {
  return (
    <header className="header">
      <motion.div variants={signatureVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="signature">
        <img className="icon" src={mark}/>
        <h4>Mark Mekhail</h4>
      </motion.div>
    </header>
  );
};