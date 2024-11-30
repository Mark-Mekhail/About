import { useState } from "react";

import Variants from "./Variants";
import {
  headingViewportConfig,
  cardViewportConfig,
} from "../constants/configs";

const headingVariants = Variants.headingVariants;
const cardVariants = Variants.cardVariants;

/**
 * Helper class for creating staggered animations.
 */
export default class StaggerAnimationHelper {
  numItems; // The number of items to animate.
  delay; // The delay between each animation in milliseconds.
  canStart; // An array of booleans indicating whether each item can start animating.
  setCanStart; // An array of functions for setting the canStart state.

  /**
   * Constructs a new StaggerAnimationHelper instance.
   * @param {number} numItems - The number of items to animate.
   * @param {number} [delay=500] - The delay between each animation in milliseconds.
   */
  constructor(numItems, delay = 500) {
    this.numItems = numItems;
    this.delay = delay;

    this.canStart = [];
    this.setCanStart = [];

    for (let i = 0; i < numItems; i++) {
      const [state, setState] = useState(i == 0);
      this.canStart.push(state);
      this.setCanStart.push(setState);
    }
  }

  /**
   * Get the props for animating the heading element.
   * @param {Object} [initial=headingVariants.initial] - The initial animation variant.
   * @param {Object} [animate=headingVariants.animate] - The animate animation variant.
   * @param {Object} [viewport=headingViewportConfig] - The viewport configuration.
   * @returns {Object} The heading props.
   */
  getHeadingProps(
    initial = headingVariants.initial,
    animate = headingVariants.animate,
    viewport = headingViewportConfig
  ) {
    return {
      initial: initial,
      whileInView: animate,
      viewport: viewport,
      onAnimationStart: this.getOnAnimationStart(0),
    };
  }

  /**
   * Get the props for animating a card element.
   * @param {number} index - The index of the card.
   * @param {Object} [initial=cardVariants.initial] - The initial animation variant.
   * @param {Object} [animate=cardVariants.animate] - The animate animation variant.
   * @param {Object} [viewport=cardViewportConfig] - The viewport configuration.
   * @returns {Object} The card props.
   */
  getCardProps(
    index,
    initial = cardVariants.initial,
    animate = cardVariants.animate,
    viewport = cardViewportConfig
  ) {
    // Increment index to account for the heading element.
    index++;

    return {
      initial: initial,
      whileInView: Variants.coniditionalVariant(this.canStart[index], animate),
      viewport: viewport,
      onAnimationStart: this.getOnAnimationStart(index),
    };
  }

  /**
   * Get the onAnimationStart callback for a specific index. This callback will set the canStart state for the next item to true after the delay.
   * @param {number} index - The index of the item.
   * @returns {Function} The onAnimationStart callback.
   */
  getOnAnimationStart(index) {
    return () => {
      if (!this.canStart[index]) {
        console.error(
          "Cannot start animation for an item before the previous item has started."
        );
      }

      if (index < this.numItems - 1) {
        setTimeout(() => {
          this.setCanStart[index + 1](true);
        }, this.delay);
      }
    };
  }
}