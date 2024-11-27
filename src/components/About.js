import React from "react";
import { motion } from "motion/react";

import Variants from "../animation/Variants";
import { abouts } from "../constants/content";

// Required components
import AboutCard from "./AboutCard";

const variants = Variants.defaultVariants();
const cardVariants = Variants.defaultVariants(0, "5vh", 0, 0);

export default function About() {
  return (
    <motion.section variants={variants} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} className="about">
      <h1>About Me</h1>
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
