import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

/**
 * A utility class for standardizing the height of elements.
 */
export default class HeightStandardizer {
  // Private instance variables
  #itemRefs; // An array of references to elements.
  #maxHeight; // The maximum height of the elements.
  #setMaxHeight; // A function to set the maximum height.
  #updateMaxHeight; // A function to update the maximum height.

  /**
   * Constructs a new HeightStandardizer object.
   */
  constructor() {
    this.#itemRefs = useRef([]);
    [this.#maxHeight, this.#setMaxHeight] = useState(0);

    this.#updateMaxHeight = () => {
      this.#setMaxHeight(
        this.#itemRefs.current.reduce(
          (max, el) => Math.max(max, el.offsetHeight),
          0
        )
      );
    };

    // Debounce the updateMaxHeight function
    const debouncedUpdateMaxHeight = debounce(this.#updateMaxHeight, 200);

    useEffect(() => {
      this.#updateMaxHeight();
    }, [this.#maxHeight]);

    useEffect(() => {
      window.addEventListener("resize", debouncedUpdateMaxHeight);
      return () =>
        window.removeEventListener("resize", debouncedUpdateMaxHeight);
    }, []);
  }

  /**
   * Gets the height property value.
   * @returns {number|string} The maximum height or "fit-content".
   */
  get heightProp() {
    return this.#maxHeight || "fit-content";
  }

  /**
   * Assigns a reference to an element at the specified index.
   * @param {number} index - The index of the element.
   * @returns {Function} A function that assigns the reference to the element.
   */
  itemRefAssigner(index) {
    return (el) => (this.#itemRefs.current[index] = el);
  }
}
