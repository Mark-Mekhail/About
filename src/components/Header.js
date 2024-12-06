import React, { useState } from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

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
      className="header"
      {...props}
    >
      <div className="nav">
        <motion.img
          variants={navItemVariants}
          src={hamburger}
          alt="hamburger icon"
          className="icon"
          onClick={toggleMenu}
        />
        <motion.a
          variants={navItemVariants}
          onClick={onLinkClick(aboutRef)}
          style={linkStyle}
        >
          <h5>About</h5>
        </motion.a>
        <motion.a
          variants={navItemVariants}
          onClick={onLinkClick(experienceRef)}
          style={linkStyle}
        >
          <h5>Experience</h5>
        </motion.a>
        <motion.a
          variants={navItemVariants}
          onClick={onLinkClick(skillsRef)}
          style={linkStyle}
        >
          <h5>Skills</h5>
        </motion.a>
        <motion.a
          variants={navItemVariants}
          onClick={onLinkClick(projectsRef)}
          style={linkStyle}
        >
          <h5>Projects</h5>
        </motion.a>
      </div>
      <div className="signature">
        <motion.img
          variants={signatureItemVariants}
          src={mark}
          alt="mark portrait"
          className="icon"
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
