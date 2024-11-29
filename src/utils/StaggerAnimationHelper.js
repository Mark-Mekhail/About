import { useState } from "react";

import Variants from "./Variants";
import {
  headingViewportConfig,
  cardViewportConfig,
} from "../constants/configs";

const headingVariants = Variants.headingVariants;
const cardVariants = Variants.cardVariants;

export default class StaggerAnimationHelper {
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

  getCardProps(
    index,
    initial = cardVariants.initial,
    animate = cardVariants.animate,
    viewport = cardViewportConfig
  ) {
    index++;

    return {
      initial: initial,
      whileInView: Variants.coniditionalVariant(this.canStart[index], animate),
      viewport: viewport,
      onAnimationStart: this.getOnAnimationStart(index),
    };
  }

  getOnAnimationStart(index) {
    return () => {
      if (index < this.numItems - 1) {
        setTimeout(() => {
          this.setCanStart[index + 1](true);
        }, this.delay);
      }
    };
  }
}
