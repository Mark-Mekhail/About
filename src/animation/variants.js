import { tr } from "framer-motion/client";

class Variants {
  static visibilityVariant() {
    return {
      hidden: { 
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 3
        } 
      }
    }
  } 
}

export default Variants;