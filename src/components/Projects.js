import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { debounce } from "lodash";

import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";
import { projects } from "../constants/content";

// Required components
import ProjectCard from "./ProjectCard";

/**
 * Renders the Projects component.
 *
 * @returns {JSX.Element} The rendered Projects component.
 */
export default function Projects() {
  const staggerAnimationHelper = new StaggerAnimationHelper(
    projects.length + 1
  );

  const itemRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  // Update the maximum height of the overlay content
  const updateMaxHeight = () => {
    setMaxHeight(
      itemRefs.current.reduce((max, el) => Math.max(max, el.offsetHeight), 0)
    );
  };
  const debouncedUpdateMaxHeight = debounce(updateMaxHeight, 200);

  // Update the maximum height when the component mounts or when the maxHeight state changes
  useEffect(() => {
    updateMaxHeight();
  }, [maxHeight]);

  // Update the maximum height when the window is resized
  useEffect(() => {
    window.addEventListener("resize", debouncedUpdateMaxHeight);
    return () => window.removeEventListener("resize", debouncedUpdateMaxHeight);
  }, []);

  return (
    <section className="projects">
      <motion.h1 {...staggerAnimationHelper.getHeadingProps()}>
        Projects
      </motion.h1>
      <div className="section-body">
        {projects.map((project, index) => (
          <motion.div
            key={project.link}
            {...staggerAnimationHelper.getCardProps(index)}
          >
            <ProjectCard
              {...project}
              tags={project.tags}
              overlayHeight={maxHeight || "fit-content"}
              overlayTitleRef={(el) => (itemRefs.current[2 * index] = el)}
              overlayContentRef={(el) => (itemRefs.current[2 * index + 1] = el)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
