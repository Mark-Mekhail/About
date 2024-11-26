import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Variants from "../animation/variants";

// Required images
import markSeattle from "../images/mark-seattle.jpeg";
import markBanff from "../images/mark-banff.jpeg";
import markBeehiveHike from "../images/mark-beehive-hike.jpeg";

const Photos = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const photoVariants = Variants.visibilityVariant();

  useEffect(() => {
    if (inView) { 
      controls.start("visible");    
    }  
  }, [inView]);

  return (
    <motion.section ref={ref} animate={controls} initial="hidden" variants={photoVariants} className="photos">
      <img src={markBanff} className="top-image"/>
      <img src={markBeehiveHike} className="central-image"/>
      <img src={markSeattle} className="bottom-image"/>
    </motion.section>
  );
};

export default Photos;