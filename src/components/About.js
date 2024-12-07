import React from "react";
import { motion } from "motion/react";

// Styles
import styles from "../styles/components/About.module.css";

// Required components
import AboutCard from "./AboutCard";

// Utils
import Variants from "../utils/Variants";
import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";

// Constants
import { abouts } from "../constants/content";

const aboutCardAnimateVariant = Variants.defaultAnimateVariant();

/**
 * Renders the About section of the website.
 * @returns {JSX.Element} The About section component.
 */
export default function About({ ...props }) {
  const staggerAnimationHelper = new StaggerAnimationHelper(abouts.length + 1);

  return (
    <section className={styles.About} {...props}>
      <motion.h1 {...staggerAnimationHelper.headingProps()}>About Me</motion.h1>
      <div className={styles.body}>
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
