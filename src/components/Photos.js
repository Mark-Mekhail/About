import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Required images
import markSeattle from "../images/mark-seattle.jpeg";
import markBanff from "../images/mark-banff.jpeg";
import markBeehiveHike from "../images/mark-beehive-hike.jpeg";

// Define static constants
const photoVariants = {  visible: { opacity: 1, scale: 1, x: [200, 0],  transition: { duration: 1 } },  hidden: { opacity: 0, scale: 1 }};

const Photos = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) { 
      controls.start("visible");    
    }  
  }, [controls, inView]);

  return (
    <section className="photos">
      <motion.div ref={ref} animate={controls} initial="hidden" variants={photoVariants} className="photos-div">
        <img src={markBanff} className="top-image"/>
        <img src={markBeehiveHike} className="central-image"/>
        <img src={markSeattle} className="bottom-image"/>
      </motion.div>
    </section>
  );
};

export default Photos;