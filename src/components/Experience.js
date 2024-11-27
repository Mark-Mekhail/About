import React from "react";
import { motion } from "motion/react";

import Variants from "../utils/Variants";
import { experiences } from "../constants/content";

// Required components
import ExperienceCard from "./ExperienceCard";

const variants = Variants.defaultVariants();
const cardVariants = Variants.cardVariants();

export default function Experience() {
  return (
    <motion.section variants={variants} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} className="experience">
      <h1>Professional Experience</h1>
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
