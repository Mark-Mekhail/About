export default class Variants {
  static coniditionalVariant(condition, variant) {
    return condition ? variant : {};
  }

  static defaultInitialVariant() {
    return {
      opacity: 0,
    };
  }

  static defaultAnimateVariant(x = 0, y = 0) {
    return {
      x: [x, 0],
      y: [y, 0],
      opacity: 1,
      transition: {
        duration: 2,
      },
    };
  }

  static defaultVariants(x = 0, y = 0) {
    return {
      initial: this.defaultInitialVariant(),
      animate: this.defaultAnimateVariant(x, y),
    };
  }

  static headingVariants = this.defaultVariants("-10vw");
  static cardVariants = this.defaultVariants(0, "5vh");
}
