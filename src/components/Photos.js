import React from "react";
import { motion } from "motion/react";

import Variants from "../animation/Variants";

// Required images
import markSeattle from "../images/mark-seattle.jpeg";
import markBanff from "../images/mark-banff.jpeg";
import markBeehiveHike from "../images/mark-beehive-hike.jpeg";

const Photos = () => {
  const variants = {
    initial: Variants.baseInitialVariant(),
    animate: Variants.baseAnimationVariant(0)
  };

  return (
    <motion.section variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }} className="photos">
      <motion.img variants={variants} src={markBanff} className="top-image"/>
      <motion.img variants={variants} src={markBeehiveHike} className="central-image"/>
      <motion.img variants={variants} src={markSeattle} className="bottom-image"/>
    </motion.section>
  );
};

export default Photos;