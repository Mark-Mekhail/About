/**
 * Utility class for creating animation variants.
 */
export default class Variants {
  /**
   * Prevent instantiation of this utility class.
   */
  constructor() {
    throw new Error("This class should not be instantiated.");
  }

  /**
   * Returns a conditional variant based on the given condition.
   * @param {boolean} condition - The condition to check.
   * @param {object} variant - The variant to return if the condition is true.
   * @returns {object} - The variant object.
   */
  static coniditionalVariant(condition, variant) {
    return condition ? variant : {};
  }

  /**
   * Returns the default initial variant.
   * @returns {object} - The initial variant object.
   */
  static defaultInitialVariant() {
    return {
      opacity: 0,
    };
  }

  /**
   * Returns the default animate variant.
   * @param {number} x - The amount to translate in the x-direction.
   * @param {number} y - The amount to translate in the y-direction.
   * @returns {object} - The animate variant object.
   */
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

  /**
   * Returns the default variants.
   * @param {number} x - The amount to translate in the x-direction.
   * @param {number} y - The amount to translate in the y-direction.
   * @returns {object} - The variants object.
   */
  static defaultVariants(x = 0, y = 0) {
    return {
      initial: this.defaultInitialVariant(),
      animate: this.defaultAnimateVariant(x, y),
    };
  }

  /**
   * The heading variants.
   * @type {object}
   */
  static headingVariants = this.defaultVariants("-10vw");

  /**
   * The card variants.
   * @type {object}
   */
  static cardVariants = this.defaultVariants(0, "5vh");
}
