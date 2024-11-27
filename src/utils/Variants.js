class Variants {
  static defaultInitialVariant(x = 0, y = 0) {
    return {
      opacity: 0,
      x: x,
      y: y,
    };
  }

  static defaultAnimateVariant(delayChildren = 0, staggerChildren = 0.5) {
    return {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: delayChildren,
        staggerChildren: staggerChildren,
        duration: 2,
      },
    };
  }

  static defaultVariants(
    x = 0,
    y = 0,
    delayChildren = 0,
    staggerChildren = 0.5
  ) {
    return {
      initial: Variants.defaultInitialVariant(x, y),
      animate: Variants.defaultAnimateVariant(delayChildren, staggerChildren),
    };
  }

  static headingVariants = this.defaultVariants("-10vw");
  static cardVariants = this.defaultVariants(0, "5vh");
}

export default Variants;
