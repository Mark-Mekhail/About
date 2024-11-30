import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { debounce } from "lodash";

import HeightStandardizer from "../utils/HeightStandardizer";
import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";
import { projects } from "../constants/content";

// Required components
import ProjectCard from "./ProjectCard";

/**
 * Renders the Projects component.
 *
 * @returns {JSX.Element} The rendered Projects component.
 */
export default function Projects() {
  const staggerAnimationHelper = new StaggerAnimationHelper(
    projects.length + 1
  );

  const heightStandardizer = new HeightStandardizer();

  return (
    <section className="projects">
      <motion.h1 {...staggerAnimationHelper.headingProps()}>
        Projects
      </motion.h1>
      <div className="section-body">
        {projects.map((project, index) => (
          <motion.div
            key={project.link}
            {...staggerAnimationHelper.cardProps(index)}
          >
            <ProjectCard
              {...project}
              tags={project.tags}
              overlayHeight={heightStandardizer.heightProp}
              overlayTitleRef={heightStandardizer.itemRefAssigner(2 * index)}
              overlayContentRef={heightStandardizer.itemRefAssigner(2 * index + 1)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
