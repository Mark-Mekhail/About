import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";
import { projects } from "../constants/content";

// Required components
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const staggerAnimationHelper = new StaggerAnimationHelper(
    projects.length + 1
  );

  const itemRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const updateMaxHeight = () => {
      setMaxHeight(
        itemRefs.current.reduce(
          (max, el) => (max > el.offsetHeight ? max : el.offsetHeight),
          0
        )
      );
    };

    window.addEventListener("resize", updateMaxHeight);
    updateMaxHeight();

    return () => window.removeEventListener("resize", updateMaxHeight);
  }, [maxHeight]);

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
