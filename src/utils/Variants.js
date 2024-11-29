export default class Variants {
  static coniditionalVariant(condition, variant) {
    return condition ? variant : {};
  }

  static defaultInitialVariant(x = 0, y = 0) {
    return {
      opacity: 0,
      x: x,
      y: y,
    };
  }

  static defaultAnimateVariant() {
    return {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    };
  }

  static defaultVariants(x = 0, y = 0) {
    return {
      initial: this.defaultInitialVariant(x, y),
      animate: this.defaultAnimateVariant(),
    };
  }

  static headingVariants = this.defaultVariants("-10vw");
  static cardVariants = this.defaultVariants(0, "5vh");
}
