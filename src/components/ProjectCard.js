import React from "react";

const ProjectCard = (index, link, image, title, description) => {
  return (
    <a key={index} href={link} class="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div class="project-overlay">
        <h5 class="project-title">{title}</h5>
        <p class="project-description">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
