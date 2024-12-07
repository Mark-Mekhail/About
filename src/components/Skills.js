import React from "react";
import { motion } from "motion/react";

// Styles
import styles from "../styles/components/Skills.module.css";

// Utils
import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";
import { skillsets } from "../constants/content";

// Required components
import SkillsetBanner from "./SkillsetBanner";

/**
 * Renders the Skills component.
 * @returns {JSX.Element} The rendered Skills component.
 */
export default function Skills({ ...props }) {
  const staggerAnimationHelper = new StaggerAnimationHelper(
    skillsets.length + 1
  );

  return (
    <section className={styles.Skills} role="skills-section" {...props}>
      <motion.h1 {...staggerAnimationHelper.headingProps()}>Skills</motion.h1>
      <div className={styles.skillsets}>
        {skillsets.map((skillset, index) => (
          <motion.div
            key={skillset.category}
            {...staggerAnimationHelper.cardProps(index)}
            className={styles["skillset-container"]}
          >
            <SkillsetBanner {...skillset} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
