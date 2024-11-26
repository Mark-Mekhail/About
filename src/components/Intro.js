import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Variants from "../animation/variants";

const Intro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const introVariants = Variants.visibilityVariant();

  useEffect(() => {
    if (inView) { 
      controls.start("visible");    
    }  
  }, [inView]);

  return (
    <motion.section ref={ref} animate={controls} initial="hidden" variants={introVariants} className="intro">
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