import React from "react";
import { motion } from "motion/react";

import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";
import { projects } from "../constants/content";

// Required components
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const staggerAnimationHelper = new StaggerAnimationHelper(
    projects.length + 1
  );

  return (
    <section className="projects">
      <motion.h1 {...staggerAnimationHelper.getHeadingProps()}>
        Projects
      </motion.h1>
      <div className="section-body">
        {projects.map((project, index) => (
          <motion.div
            key={project.link}
            {...staggerAnimationHelper.getCardProps(index)}
          >
            <ProjectCard
              link={project.link}
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
