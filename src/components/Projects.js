import React from "react";
import { motion } from "motion/react";

import Variants from "../utils/Variants";
import { projects } from "../constants/content";

// Required components
import ProjectCard from "./ProjectCard";

const sectionVariants = Variants.defaultVariants();
const headingVariants = Variants.headingVariants;
const cardVariants = Variants.cardVariants;

export default function Projects() {
  return (
    <motion.section variants={sectionVariants} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} className="projects">
      <motion.h1 variants={headingVariants}>Projects</motion.h1>
      <div className="section-body">
        {projects.map((project, index) => {
          return (
            <motion.div variants={cardVariants} key={index}>
              {ProjectCard(index, project.link, project.image, project.title, project.description, project.tags)}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
