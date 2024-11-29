import React from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";
import { experiences } from "../constants/content";

// Required components
import ExperienceCard from "./ExperienceCard";

export default function Experience({ title }) {
  const staggerAnimationHelper = new StaggerAnimationHelper(
    experiences.length + 1
  );

  return (
    <section className="experience">
      <motion.h1 {...staggerAnimationHelper.getHeadingProps()}>
        {title}
      </motion.h1>
      <div className="section-body">
        {experiences.map((exp, index) => {
          return (
            <motion.div
              key={exp.company}
              {...staggerAnimationHelper.getCardProps(index)}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

Experience.propTypes = {
  title: PropTypes.string.isRequired,
};
