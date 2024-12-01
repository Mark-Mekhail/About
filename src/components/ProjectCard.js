import React from "react";
import PropTypes from "prop-types";

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
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="tags">
        {tags.map((tag, index) => (
          <p key={index} className="tag">
            {tag}
          </p>
        ))}
      </span>
      <div className="overlay" style={{ height: overlayHeight }}>
        <div ref={overlayRef} className="overlay-content-container">
          <h5 className="title">
            {title}
          </h5>
          <p className="description">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

ProjectCard.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  overlayHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  overlayRef: PropTypes.func,
};
