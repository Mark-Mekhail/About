import React from "react";
import { motion } from "motion/react";

import Variants from "../utils/Variants";

const sectionVariants = Variants.defaultVariants();
const headingVariants = Variants.headingVariants;
const bodyVariants = Variants.defaultVariants("10vw");

export default function Intro() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: "all" }}
      className="intro"
    >
      <motion.h1 variants={headingVariants}>Mark Mekhail</motion.h1>
      <motion.p variants={bodyVariants}>
        Hey there! I&apos;m Mark, a human being who happens to be studying
        Computer Engineering at the University of British Columbia.
        <br></br>
        Thank you for visiting my website!
      </motion.p>
    </motion.section>
  );
}
