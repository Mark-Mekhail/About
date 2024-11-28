import React from "react";
import { motion } from "motion/react";

import Variants from "../utils/Variants";
import { viewportConfig } from "../constants/configs";

// Required images
import markSeattle from "../images/mark-seattle.jpeg";
import markBanff from "../images/mark-banff.jpeg";
import markBeehiveHike from "../images/mark-beehive-hike.jpeg";

const variants = Variants.defaultVariants(0, 0, 0, 0);
const imageVariants = (order) => {
  // Custom variants so that images stagger in a customizable order
  const orderedVariants = Variants.defaultVariants(0, 0, 0, 0);
  orderedVariants.animate.transition.delay = order * 0.5;
  return orderedVariants;
};

export default function Photos() {
  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
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
