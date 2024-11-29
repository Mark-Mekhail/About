import React from "react";
import PropTypes from "prop-types";

export default function ProjectCard({
  link,
  image,
  title,
  description,
  tags,
  overlayHeight,
  overlayTitleRef,
  overlayContentRef,
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
        <h5 ref={overlayTitleRef} className="title">
          {title}
        </h5>
        <p ref={overlayContentRef} className="description">
          {description}
        </p>
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
  overlayTitleRef: PropTypes.func.isRequired,
  overlayContentRef: PropTypes.func.isRequired,
};
