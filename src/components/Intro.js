import React from "react";
import { motion } from "motion/react";

import Variants from "../animation/Variants";

export default function Intro() {
  const variants = Variants.defaultVariants(0, 0, 0, 0);

  const headingVariants = Variants.defaultVariants("-10vw");

  const bodyVariants = Variants.defaultVariants("10vw");

  return (
    <motion.section variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }} className="intro">
      <motion.h1 variants={headingVariants}>Mark Mekhail</motion.h1>
      <motion.p variants={bodyVariants}>
        Hey there! I&apos;m Mark, a human being who happens to be studying Computer Engineering at the University of British Columbia. 
        <br></br>
        Thank you for visiting my website!
      </motion.p>
    </motion.section>
  );
};