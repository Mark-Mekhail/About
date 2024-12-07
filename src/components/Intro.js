import React from "react";
import { motion } from "motion/react";

// Styles
import styles from "../styles/components/Intro.module.css";

// Utils
import Variants from "../utils/Variants";

const staggerVariants = Variants.staggerVariants(1);
const headingVariants = Variants.defaultVariants("10em");
const bodyVariants = Variants.cardVariants;

/**
 * Renders the introductory section of the website.
 * @returns {JSX.Element} The JSX element representing the introductory section.
 */
export default function Intro({ ...props }) {
  return (
    <motion.section
      variants={staggerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.75 }}
      className={styles.intro}
      role="intro"
      {...props}
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
