import React from "react";

// Required components
import Intro from "./Intro";
import Photos from "./Photos";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

/**
 * Renders the main body component.
 * @returns {JSX.Element} The rendered main body component.
 */
export default function Body() {
  return (
    <div className="main-body">
      <Intro />
      <Photos />
      <About />
      <Experience title="Student Work Experience" />
      <Projects />
    </div>
  );
}
