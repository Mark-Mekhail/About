import React from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

import Variants from "../utils/Variants";

const divAnimateVariant = {
  opacity: 1,

  transition: {
    duration: 0.5,
    staggerChildren: 0.25,
  },
};
const headingVariants = Variants.headingVariants;
const skillTileVariants = Variants.cardVariants;

/**
 * Renders a skillset banner component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.category - The category of the skillset.
 * @param {Array} props.skills - The array of skills to display.
 * @returns {JSX.Element} The skillset banner component.
 */
export default function SkillsetBanner({ category, skills }) {
  return (
    <motion.div
      variants={{ initial: { opacity: 0 }, animate: divAnimateVariant }}
      className="skillset-banner"
      role="skillset-banner"
    >
      <motion.h4 variants={headingVariants} className="heading">
        {category}
      </motion.h4>
      <motion.div
        variants={{ initial: {}, animate: divAnimateVariant }}
        className="skills-container"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillTileVariants}
            className="skill-tile"
          >
            <img
              src={skill.icon.src}
              alt={skill.icon.alt}
              className="skill-tile-image"
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
