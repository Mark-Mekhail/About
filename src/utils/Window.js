import { useState, useEffect } from "react";
import { debounce } from "lodash";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = debounce(() => setWidth(window.innerWidth), 100);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
}

export { useWindowWidth };
