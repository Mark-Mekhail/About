import React from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/AboutCard.module.css";

// Utils
import Variants from "../utils/Variants";

const staggerVariants = Variants.cardStaggerVariants;
const headingVariants = Variants.defaultVariants("50%", 0);
const contentVariants = Variants.defaultVariants("-50%", 0);

/**
 * Renders a card component for displaying information about a person.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the card.
 * @param {string} props.icon - The URL of the icon to be displayed.
 * @param {string} props.content - The content to be displayed in the card.
 * @returns {JSX.Element} The rendered AboutCard component.
 */
export default function AboutCard({ title, icon, content, ...props }) {
  return (
    <motion.div variants={staggerVariants} className={styles.AboutCard} {...props}>
      <motion.div variants={headingVariants} className={styles.heading}>
        <h3>{title}</h3>
        <img src={icon.src} alt={icon.alt} className={styles.icon} />
      </motion.div>
      <motion.p variants={contentVariants}>{content}</motion.p>
    </motion.div>
  );
}

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
    .isRequired,
  content: PropTypes.string.isRequired,
};
