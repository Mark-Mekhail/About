import React from "react";
import { motion } from "motion/react";

import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";
import { abouts } from "../constants/content";

// Required components
import AboutCard from "./AboutCard";

export default function About() {
  const staggerAnimationHelper = new StaggerAnimationHelper(abouts.length + 1);

  return (
    <section className="about">
      <motion.h1 {...staggerAnimationHelper.getHeadingProps()}>About Me</motion.h1>
      <div className="section-body">
        {abouts.map((about, index) => {
          return (
            <motion.div key={about.title} {...staggerAnimationHelper.getCardProps(index)}>
              <AboutCard title={about.title} icon={about.icon} content={about.content} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
