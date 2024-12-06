import React from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

import Variants from "../utils/Variants";

const tagsVariants = Variants.staggerVariants(0.25);
const tagVariants = Variants.defaultVariants("10em");
const overlayVariants = Variants.defaultVariants(0, "100%");

/**
 * Renders a project card component.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.link - A link to the project.
 * @param {string} props.image - The URL of an image for the project.
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - A description of the project.
 * @param {string[]} props.tags - The tags associated with the project.
 * @param {string} props.overlayHeight - The height of the overlay.
 * @param {React.Ref} props.overlayTitleRef - The ref for the overlay title element.
 * @param {React.Ref} props.overlayContentRef - The ref for the overlay description element.
 * @returns {JSX.Element} The rendered project card component.
 */
export default function ProjectCard({
  link,
  image,
  title,
  description,
  tags,
  overlayHeight,
  overlayRef,
  ...props
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      {...props}
    >
      <img src={image.src} alt={image.alt} className="card-image" />
      <motion.span variants={tagsVariants} className="tags">
        {tags.map((tag, index) => (
          <motion.p variants={tagVariants} key={index} className="tag">
            {tag}
          </motion.p>
        ))}
      </motion.span>
      <motion.div
        variants={overlayVariants}
        className="overlay"
        style={{ height: overlayHeight }}
        role="project-card-overlay"
      >
        <div ref={overlayRef} className="overlay-content-container">
          <h5 className="title">{title}</h5>
          <p className="description">{description}</p>
        </div>
      </motion.div>
      <div className="hover-overlay">
        <p className="overlay-text">View Code Repository</p>
      </div>
    </a>
  );
}

ProjectCard.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
    .isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  overlayHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  overlayRef: PropTypes.func,
};
