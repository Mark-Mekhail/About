import { tr } from "framer-motion/client";

class Variants {
  static conditionalVariant(condition, variant) {
    return (condition) => condition ? variant : {};
  }

  static baseInitialVariant() {
    return {
      opacity: 0
    };
  }

  static baseAnimationVariant(delayChildren = 0.5, staggerChildren = 0.5, duration = 2) {
    return {
      opacity: 1,
      transition: {
        delayChildren: delayChildren,
        staggerChildren: staggerChildren,
        duration: duration
      }
    };
  }
}

export default Variants;