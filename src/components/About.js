import React from "react";
import { motion } from "motion/react";

import Variants from "../utils/Variants";
import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";
import { abouts } from "../constants/content";

// Required components
import AboutCard from "./AboutCard";

const aboutCardAnimateVariant = Variants.defaultAnimateVariant();

/**
 * Renders the About section of the website.
 * @returns {JSX.Element} The About section component.
 */
export default function About({ ...props }) {
  const staggerAnimationHelper = new StaggerAnimationHelper(abouts.length + 1);

  return (
    <section className="about" {...props}>
      <motion.h1 {...staggerAnimationHelper.headingProps()}>About Me</motion.h1>
      <div className="section-body">
        {abouts.map((about, index) => {
          return (
            <motion.div
              key={about.title}
              {...staggerAnimationHelper.cardProps(
                index,
                aboutCardAnimateVariant
              )}
            >
              <AboutCard {...about} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
