import React, { useState } from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

import Variants from "../utils/Variants";
import { emToPx } from "../utils/unitConversion";

// Required images
import mark from "../images/mark-portrait.jpeg";
import hamburger from "../images/hamburger.png";

const signatureVariants = Variants.defaultVariants(0, "5vh");

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
    <header className="header" {...props}>
      <div className="nav">
        <img
          src={hamburger}
          alt="hamburger icon"
          className="icon"
          onClick={toggleMenu}
        />
        <a onClick={onLinkClick(aboutRef)} style={linkStyle}>
          <h5>About</h5>
        </a>
        <a onClick={onLinkClick(experienceRef)} style={linkStyle}>
          <h5>Experience</h5>
        </a>
        <a onClick={onLinkClick(skillsRef)} style={linkStyle}>
          <h5>Skills</h5>
        </a>
        <a onClick={onLinkClick(projectsRef)} style={linkStyle}>
          <h5>Projects</h5>
        </a>
      </div>
      <motion.div
        variants={signatureVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="signature"
      >
        <img src={mark} alt="mark portrait" className="icon" />
        <h4>Mark Mekhail</h4>
      </motion.div>
    </header>
  );
}

Header.propTypes = {
  aboutRef: PropTypes.object.isRequired,
  experienceRef: PropTypes.object.isRequired,
  skillsRef: PropTypes.object.isRequired,
  projectsRef: PropTypes.object.isRequired,
};
