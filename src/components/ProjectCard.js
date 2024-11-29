import React from "react";
import PropTypes from "prop-types";

export default function ProjectCard({ link, image, title, description, tags }) {
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
      <div className="overlay">
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
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
};
