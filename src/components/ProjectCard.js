import React from "react";

const ProjectCard = (index, link, image, title, description) => {
  return (
    <a key={index} href={link} className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="project-overlay">
        <h5 className="project-title">{title}</h5>
        <p className="project-description">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
