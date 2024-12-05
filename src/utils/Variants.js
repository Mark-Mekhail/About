/**
 * Utility class for creating animation variants.
 */
/**
 * Utility class for defining animation variants.
 */
export default class Variants {
  /**
   * Prevent instantiation of this utility class.
   * @throws {Error} - This class should not be instantiated.
   */
  constructor() {
    throw new Error("This class should not be instantiated.");
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
   * @param {number} duration - The duration of the animation.
   * @returns {object} - The animate variant object.
   */
  static defaultAnimateVariant(x = 0, y = 0, duration = 2) {
    return {
      x: [x, 0],
      y: [y, 0],
      opacity: 1,
      transition: {
        duration: duration,
      },
    };
  }

  /**
   * Returns the default variants.
   * @param {number} x - The amount to translate in the x-direction.
   * @param {number} y - The amount to translate in the y-direction.
   * @param {number} duration - The duration of the animation.
   * @returns {object} - The variants object.
   */
  static defaultVariants(x = 0, y = 0, duration = 2) {
    return {
      initial: this.defaultInitialVariant(),
      animate: this.defaultAnimateVariant(x, y, duration),
    };
  }

  /**
   * Returns the stagger variants.
   * @param {number} staggerChildren - The delay between staggered children.
   * @param {number} staggerDirection - The direction of the stagger animation.
   * @returns {object} - The stagger variants object.
   */
  static staggerVariants(staggerChildren = 0.5, staggerDirection = 1) {
    return {
      initial: {},
      animate: {
        transition: {
          staggerDirection: staggerDirection,
          staggerChildren: staggerChildren,
          duration: 0,
        },
      },
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
  static cardVariants = this.defaultVariants(0, "min(10em, 10vh)");

  /**
   * The card stagger variants.
   * @type {object}
   */
  static cardStaggerVariants = this.staggerVariants(1);
}
