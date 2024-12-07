import { useState, useEffect } from "react";
import { debounce } from "lodash";

const rootFontSize = parseFloat(
  getComputedStyle(document.documentElement).fontSize
);

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = debounce(() => setWidth(window.innerWidth), 100);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
}

function remToPx(rem) {
  return rem * rootFontSize;
}

export { useWindowWidth, remToPx };
