import React from "react";
import PropTypes from "prop-types";

// Required components
import Intro from "./Intro";
import Photos from "./Photos";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

import styles from "../styles/components/Body.module.css";

/**
 * Renders the main body component.
 * @returns {JSX.Element} The rendered main body component.
 */
export default function Body({ navSectionRefs, ...props }) {
  return (
    <section className={styles.body} {...props}>
      <Intro ref={navSectionRefs["Intro"]} />
      <Photos ref={navSectionRefs["Photos"]} />
      <About ref={navSectionRefs["About"]} />
      <Experience
        ref={navSectionRefs["Experience"]}
        title="Student Work Experience"
        id="experience"
      />
      <Skills ref={navSectionRefs["Skills"]} id="skills" />
      <Projects ref={navSectionRefs["Projects"]} id="projects" />
    </section>
  );
}

Body.propTypes = {
  navSectionRefs: PropTypes.objectOf(PropTypes.object).isRequired,
};
