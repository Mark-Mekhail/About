import React from "react";
import { motion } from "motion/react";

import Variants from "../utils/Variants";

// Required images
import markSeattle from "../images/mark-seattle.jpeg";
import markBanff from "../images/mark-banff.jpeg";
import markBeehiveHike from "../images/mark-beehive-hike.jpeg";

const variants = Variants.defaultVariants();

// Helper function to create animation variants for each image based on the order they should appear in
const imageVariants = (order) => {
  const orderedVariants = Variants.defaultVariants();
  orderedVariants.animate.transition.delay = order * 0.75;
  return orderedVariants;
};

/**
 * Renders a section with three images for the Photos component.
 *
 * @returns {JSX.Element} The rendered Photos component.
 */
export default function Photos() {
  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      className="photos"
    >
      <motion.img
        variants={imageVariants(1)}
        src={markBanff}
        className="top-image"
      />
      <motion.img
        variants={imageVariants(0)}
        src={markBeehiveHike}
        className="central-image"
      />
      <motion.img
        variants={imageVariants(2)}
        src={markSeattle}
        className="bottom-image"
      />
    </motion.section>
  );
}
