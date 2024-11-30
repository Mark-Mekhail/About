import React from "react";
import { motion } from "motion/react";

import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";
import { abouts } from "../constants/content";

// Required components
import AboutCard from "./AboutCard";

/**
 * Renders the About section of the website.
 * @returns {JSX.Element} The About section component.
 */
export default function About() {
  const staggerAnimationHelper = new StaggerAnimationHelper(abouts.length + 1);

  return (
    <section className="about">
      <motion.h1 {...staggerAnimationHelper.headingProps()}>
        About Me
      </motion.h1>
      <div className="section-body">
        {abouts.map((about, index) => {
          return (
            <motion.div
              key={about.title}
              {...staggerAnimationHelper.cardProps(index)}
            >
              <AboutCard {...about} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
