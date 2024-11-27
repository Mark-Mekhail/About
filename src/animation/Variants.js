class Variants {
  static baseInitialVariant(x = 0, y = 0) {
    return {
      opacity: 0,
      x: x,
      y: y
    };
  }

  static baseAnimationVariant(delayChildren = 0, staggerChildren = 0.5) {
    return {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: delayChildren,
        staggerChildren: staggerChildren,
        duration: 2
      }
    };
  }

  static defaultVariants(x = 0, y = 0, delayChildren = 0, staggerChildren = 0.5) {
    return {
      initial: Variants.baseInitialVariant(x, y),
      animate: Variants.baseAnimationVariant(delayChildren, staggerChildren)
    };
  }

  static cardVariants() {
    return this.defaultVariants(0, "5vh", 0, 0);
  }
}

export default Variants;