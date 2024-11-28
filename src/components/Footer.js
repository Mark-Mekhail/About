import React from "react";
import { motion } from "motion/react";

import Variants from "../utils/Variants";
import { socials } from "../constants/content";

const footerVariants = Variants.defaultVariants();
const socialVariants = Variants.defaultVariants("-10vw");
const copyrightVariants = Variants.defaultVariants("10vw");

export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="footer"
    >
      <motion.div variants={socialVariants} className="social-links">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.image} />
            {social.site}
          </a>
        ))}
      </motion.div>
      <motion.p variants={copyrightVariants}>
        &copy; {new Date().getUTCFullYear()} Mark Mekhail. Icons by{" "}
        <a href="https://icons8.com/">Icons8</a>
      </motion.p>
    </motion.footer>
  );
}
