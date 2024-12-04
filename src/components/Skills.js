import React from "react";
import { motion } from "motion/react";

import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";
import { skillsets } from "../constants/content";

// Required components
import SkillsetBanner from "./SkillsetBanner";

/**
 * Renders the Skills component.
 * @returns {JSX.Element} The rendered Skills component.
 */
export default function Skills() {
  const staggerAnimationHelper = new StaggerAnimationHelper(
    skillsets.length + 1
  );

  return (
    <section className="skills">
      <motion.h1 {...staggerAnimationHelper.headingProps()}>Skills</motion.h1>
      <div className="skillsets">
        {skillsets.map((skillset, index) => (
          <motion.div
            key={skillset.category}
            {...staggerAnimationHelper.cardProps(index)}
            className="skillset-container"
          >
            <SkillsetBanner {...skillset} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
