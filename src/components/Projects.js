import React from "react";
import { motion } from "motion/react";

// Styles
import styles from "../styles/components/Projects.module.css";

// Utils
import HeightStandardizer from "../utils/HeightStandardizer";
import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";

// Constants
import { projects } from "../constants/content";

// Required components
import ProjectCard from "./ProjectCard";

/**
 * Renders the Projects component.
 *
 * @returns {JSX.Element} The rendered Projects component.
 */
export default function Projects({ ...props }) {
  const staggerAnimationHelper = new StaggerAnimationHelper(
    projects.length + 1
  );
  const heightStandardizer = new HeightStandardizer();

  return (
    <section className={styles.Projects} role="projects-section" {...props}>
      <motion.h1 {...staggerAnimationHelper.headingProps()}>Projects</motion.h1>
      <div className={styles.body}>
        {projects.map((project, index) => (
          <motion.div
            key={project.link}
            {...staggerAnimationHelper.cardProps(index)}
          >
            <ProjectCard
              {...project}
              tags={project.tags}
              overlayHeight={heightStandardizer.heightProp}
              overlayRef={heightStandardizer.itemRefAssigner(index)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
