import React, { useState } from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/Header.module.css";

// Utils
import Variants from "../utils/Variants";
import { emToPx } from "../utils/unitConversion";

// Required images
import mark from "../images/mark-portrait.jpeg";
import hamburger from "../images/hamburger.png";

const staggerVariants = Variants.staggerVariants(0.5, -1);
const navItemVariants = Variants.defaultVariants("-50vw");
const signatureItemVariants = Variants.defaultVariants("-100vw");

const scrollOffset = emToPx(5);
function scrollToSection(ref) {
  window.scrollTo({
    top: ref.current.offsetTop - scrollOffset,
    behavior: "smooth",
  });
}

/**
 * Renders the header component.
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header({
  aboutRef,
  experienceRef,
  skillsRef,
  projectsRef,
  ...props
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const onLinkClick = (ref) => () => {
    setIsMenuOpen(false);
    scrollToSection(ref);
  };

  const linkStyle = isMenuOpen ? { display: "block" } : {};

  return (
    <motion.header
      variants={staggerVariants}
      initial="initial"
      animate="animate"
      className={styles.Header}
      {...props}
    >
      <div className={styles.nav}>
        <motion.img
          variants={navItemVariants}
          animate="animate"
          src={hamburger}
          alt="hamburger icon"
          className={styles.icon}
          onClick={toggleMenu}
        />
        <motion.h5
          variants={navItemVariants}
          style={linkStyle}
          className={styles["nav-item"]}
          onClick={onLinkClick(aboutRef)}
        >
          About
        </motion.h5>
        <motion.h5
          variants={navItemVariants}
          style={linkStyle}
          className={styles["nav-item"]}
          onClick={onLinkClick(experienceRef)}
        >
          Experience
        </motion.h5>
        <motion.h5
          variants={navItemVariants}
          style={linkStyle}
          className={styles["nav-item"]}
          onClick={onLinkClick(skillsRef)}
        >
          Skills
        </motion.h5>
        <motion.h5
          variants={navItemVariants}
          style={linkStyle}
          className={styles["nav-item"]}
          onClick={onLinkClick(projectsRef)}
        >
          Projects
        </motion.h5>
      </div>
      <div className={styles.signature}>
        <motion.img
          variants={signatureItemVariants}
          src={mark}
          alt="mark portrait"
          className={styles.icon}
        />
        <motion.h4 variants={signatureItemVariants}>Mark Mekhail</motion.h4>
      </div>
    </motion.header>
  );
}

Header.propTypes = {
  aboutRef: PropTypes.object.isRequired,
  experienceRef: PropTypes.object.isRequired,
  skillsRef: PropTypes.object.isRequired,
  projectsRef: PropTypes.object.isRequired,
};
