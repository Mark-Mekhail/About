import React from "react";
import { motion } from "motion/react";

import Variants from "../animation/Variants";

// Required images
import markSeattle from "../images/mark-seattle.jpeg";
import markBanff from "../images/mark-banff.jpeg";
import markBeehiveHike from "../images/mark-beehive-hike.jpeg";

export default function Photos() {
  const variants = {
    initial: Variants.baseInitialVariant(),
    animate: Variants.baseAnimationVariant(0, 0)
  };

  const imageVariants = (order) => {
    const animateVariant = Variants.baseAnimationVariant(0, 0);
    animateVariant.transition.delay = order * 0.5;

    return {
      initial: Variants.baseInitialVariant(),
      animate: animateVariant
    };
  };

  return (
    <motion.section variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }} className="photos">
      <motion.img variants={imageVariants(1)} src={markBanff} className="top-image"/>
      <motion.img variants={imageVariants(0)} src={markBeehiveHike} className="central-image"/>
      <motion.img variants={imageVariants(2)} src={markSeattle} className="bottom-image"/>
    </motion.section>
  );
};