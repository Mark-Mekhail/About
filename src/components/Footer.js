import React from "react";
import { motion } from "motion/react";

import Variants from "../animation/Variants";
import { socials } from "../constants/content";

export default function Footer() {
  const variants = {
    initial: Variants.baseInitialVariant(),
    animate: Variants.baseAnimationVariant()
  };

  return (
    <footer className="footer">
      <motion.div variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }} className="social-links">
        {socials.map((social, index) => (
          <a key={index} href="https://www.linkedin.com/in/markmekhail" target="_blank" rel="noopener noreferrer">
            <img src={social.image} />
            {social.site}
          </a>
        ))}
      </motion.div>
      <motion.p variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }}>
        &copy; {new Date().getUTCFullYear()} Mark Mekhail. Icons by <a href="https://icons8.com/">Icons8</a>
      </motion.p>
    </footer>
  );
};
