import React from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/SkillsetBanner.module.css";

// Utils
import Variants from "../utils/Variants";

const staggerVariants = Variants.staggerVariants(0.25);
const headingVariants = Variants.headingVariants;
const skillTileVariants = Variants.defaultVariants("100%");

/**
 * Renders a skillset banner component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.category - The category of the skillset.
 * @param {Array} props.skills - The array of skills to display.
 * @returns {JSX.Element} The skillset banner component.
 */
export default function SkillsetBanner({ category, skills, ...props }) {
  return (
    <motion.div
      variants={staggerVariants}
      className={styles["skillset-banner"]}
      role="skillset-banner"
      {...props}
    >
      <motion.h4 variants={headingVariants} className={styles.heading}>
        {category}
      </motion.h4>
      <motion.div
        variants={staggerVariants}
        className={styles["skills-container"]}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillTileVariants}
            className={styles["skill-tile"]}
          >
            <img
              src={skill.icon.src}
              alt={skill.icon.alt}
              className={styles["skill-icon"]}
            />
            <h6>{skill.name}</h6>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

SkillsetBanner.propTypes = {
  category: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
        .isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
