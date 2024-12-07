import React from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/ExperienceCard.module.css";

// Utils
import Variants from "../utils/Variants";

const staggerVariants = Variants.cardStaggerVariants;
const contentVariants = Variants.defaultVariants("100%", 0);
const headingVariants = Variants.defaultVariants("-100%", 0);

/**
 * Renders an experience card component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.role - The name of the role for the experience.
 * @param {string} props.company - The company of the experience.
 * @param {string} props.description - A description of the experience.
 * @param {string} props.logo - A logo for the experience.
 * @returns {JSX.Element} The rendered experience card component.
 */
export default function ExperienceCard({
  role,
  company,
  description,
  logo,
  headingHeight,
  headingRef,
  ...props
}) {
  return (
    <motion.div
      variants={staggerVariants}
      className={styles.ExperienceCard}
      {...props}
    >
      <motion.p variants={contentVariants}>{description}</motion.p>
      <motion.div
        variants={headingVariants}
        className={styles["heading-container"]}
        style={{ height: headingHeight }}
        role="experience-card-heading"
      >
        <div
          ref={headingRef}
          className={styles.heading}
          role="heading-container"
        >
          <div className={styles.info}>
            <h5>{role}</h5>
            <h6 className={styles["company-name"]}>{company}</h6>
          </div>
          <img src={logo.src} alt={logo.alt} className={styles.logo} />
        </div>
      </motion.div>
    </motion.div>
  );
}

ExperienceCard.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
    .isRequired,
  headingRef: PropTypes.func.isRequired,
  headingHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
