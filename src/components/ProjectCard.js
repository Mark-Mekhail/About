import React from "react";

const ProjectCard = (index, link, image, title, description) => {
  return (
    <a key={index} href={link} className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="project-card-overlay">
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
