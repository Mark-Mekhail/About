import React from "react";
import { motion } from "motion/react";

// Styles
import styles from "../styles/components/Footer.module.css";

// Utils
import Variants from "../utils/Variants";

// Constants
import { socials } from "../constants/content";

const footerVariants = Variants.defaultVariants();
const socialVariants = Variants.defaultVariants("-10vw");
const copyrightVariants = Variants.defaultVariants("10vw");

/**
 * Renders the Footer component.
 * @returns {JSX.Element} The rendered Footer component.
 */
export default function Footer({ ...props }) {
  return (
    <motion.footer
      variants={footerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={styles.Footer}
      {...props}
    >
      <motion.div variants={socialVariants} className={styles["social-links"]}>
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["social-link"]}
          >
            <img src={social.icon.src} alt={social.icon.alt} />
            {social.site}
          </a>
        ))}
      </motion.div>
      <motion.p variants={copyrightVariants}>
        &copy; {new Date().getUTCFullYear()} Mark Mekhail. Icons by{" "}
        <a href="https://icons8.com/" target="_blank" rel="noreferrer noopener">
          Icons8
        </a>
      </motion.p>
    </motion.footer>
  );
}
