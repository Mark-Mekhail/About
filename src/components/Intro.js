import React from "react";
import { motion } from "motion/react";

import Variants from "../animation/Variants";

const Intro = () => {
  const variants = {
    initial: Variants.baseInitialVariant(),
    animate: Variants.baseAnimationVariant()
  };

  return (
    <motion.section variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }} className="intro">
      <h1>Mark Mekhail</h1>
      <p>
        Hey there! I&apos;m Mark, a human being who happens to be studying Computer Engineering at the University of British Columbia. 
        <br></br>
        Thank you for visiting my website!
      </p>
    </motion.section>
  );
};

export default Intro;