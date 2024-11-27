import React from "react";
import { motion } from "motion/react";

import Variants from "../utils/Variants";
import { abouts } from "../constants/content";

// Required components
import AboutCard from "./AboutCard";

const sectionVariants = Variants.defaultVariants();
const headingVariants = Variants.headingVariants;
const cardVariants = Variants.cardVariants;

export default function About() {
  return (
    <motion.section variants={sectionVariants} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} className="about">
      <motion.h1 variants={headingVariants}>About Me</motion.h1>
      <div className="section-body">
        {abouts.map((section, index) => {
          return (
            <motion.div key={index} variants={cardVariants}>
              {AboutCard(index, section.title, section.icon, section.content)}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
