import React from "react";
import { motion } from "motion/react";

// Styles
import styles from "../styles/components/Photos.module.css";

// Utils
import Variants from "../utils/Variants";

// Required images
import markSeattle from "../images/mark-seattle.jpeg";
import markBanff from "../images/mark-banff.jpeg";
import markBeehiveHike from "../images/mark-beehive-hike.jpeg";

const sectionVariants = Variants.defaultVariants();
const landscapeVariants = Variants.defaultVariants("-5vw");
const topPortraitVariants = Variants.defaultVariants(0, "-10vh");
const bottomPortraitVariants = Variants.defaultVariants(0, "10vh");
topPortraitVariants.animate.transition.delay = 0.5;
bottomPortraitVariants.animate.transition.delay = 0.5;

/**
 * Renders a section with three images for the Photos component.
 *
 * @returns {JSX.Element} The rendered Photos component.
 */
export default function Photos({ ...props }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.4 }}
      className={styles.photos}
      role="photos"
      {...props}
    >
      <motion.img
        variants={topPortraitVariants}
        src={markBanff}
        alt="Mark in Banff"
        className={styles["top-portrait"]}
      />
      <motion.img
        variants={landscapeVariants}
        src={markBeehiveHike}
        alt="Mark on the Beehive Hike"
        className={styles.landscape}
      />
      <motion.img
        variants={bottomPortraitVariants}
        src={markSeattle}
        alt="Mark in Seattle"
        className={styles["bottom-portrait"]}
      />
    </motion.section>
  );
}
