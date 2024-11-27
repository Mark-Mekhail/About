import React from "react";
import { motion } from "motion/react";

import Variants from "../utils/Variants";
import { experiences } from "../constants/content";

// Required components
import ExperienceCard from "./ExperienceCard";

const sectionVariants = Variants.defaultVariants();
const headingVariants = Variants.headingVariants;
const cardVariants = Variants.cardVariants;

export default function Experience() {
  return (
    <motion.section variants={sectionVariants} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} className="experience">
      <motion.h1 variants={headingVariants}>Professional Experience</motion.h1>
      <div className="section-body">
        {experiences.map((exp, index) => {
          return (
            <motion.div variants={cardVariants} key={index}>
              {ExperienceCard(index, exp.role, exp.company, exp.description, exp.logo)}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
