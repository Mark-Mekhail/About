import React from "react";

export default function ProjectCard(index, link, image, title, description, tags) {
  return (
    <a key={index} href={link} className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <span className="tags">
        {tags.map((tag, index) => (<p key={index} className="tag">{tag}</p>))}
      </span>
      <div className="overlay">
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
      </div>
    </a>
  );
};
