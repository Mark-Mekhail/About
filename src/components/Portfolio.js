import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Meta Careers Coding Puzzle Solutions",
      description: "Solutions to the coding puzzles available on the Meta Careers website.",
      link: "https://github.com/Mark-Mekhail/Meta-Careers-Coding-Puzzle-Solutions",
    },
    {
      title: "Braille Translator",
      description: "A script for converting English to Braille and vice-versa",
      link: "https://github.com/Mark-Mekhail/Braille-Translator"
    },
    {
      title: "Portfolio Website",
      description: "The website you are currently viewing.",
      link: "https://github.com/Mark-Mekhail/About-Me"
    },
    {
      title: "Course Project Samples",
      description: "A collection of projects completed for a Software Construction course.",
      link: "https://github.com/Mark-Mekhail/CPEN221-Projects"
    }
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
