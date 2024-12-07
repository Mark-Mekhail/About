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
export default function Body({
  aboutRef,
  experienceRef,
  skillsRef,
  projectsRef,
  ...props
}) {
  return (
    <section className={styles.Body} {...props}>
      <Intro />
      <Photos />
      <About ref={aboutRef} />
      <Experience
        ref={experienceRef}
        title="Student Work Experience"
        id="experience"
      />
      <Skills ref={skillsRef} id="skills" />
      <Projects ref={projectsRef} id="projects" />
    </section>
  );
}

Body.propTypes = {
  aboutRef: PropTypes.object.isRequired,
  experienceRef: PropTypes.object.isRequired,
  skillsRef: PropTypes.object.isRequired,
  projectsRef: PropTypes.object.isRequired,
};
