import React from "react";

// Required components
import ProjectCard from "./ProjectCard";

// Required images
import braille_alphabet from "../images/braille.jpg";
import meta_puzzles from "../images/meta-puzzles.png";
import website from "../images/website.png";
import cpen_code from "../images/cpen-code.png";

const Projects = () => {
  const projects = [
    {
      title: "Meta Coding Puzzles",
      description: "Solutions to the coding puzzles available on the Meta Careers website.",
      link: "https://github.com/Mark-Mekhail/Meta-Careers-Coding-Puzzle-Solutions",
      image: meta_puzzles,
      tags: ["Data Structures", "Algorithms", "C++", "Python"]
    },
    {
      title: "Personal Website",
      description: "The website you are currently viewing.",
      link: "https://github.com/Mark-Mekhail/About-Me",
      image: website,
      tags: ["React", "JavaScript", "HTML", "CSS", "GitHub Actions (CI/CD)"]
    },
    {
      title: "Braille Translator",
      description: "A script for converting English to Braille and vice-versa",
      link: "https://github.com/Mark-Mekhail/Braille-Translator",
      image: braille_alphabet,
      tags: ["Python"]
    },
    {
      title: "Course Project Samples",
      description: "A collection of projects completed for a Software Construction course.",
      link: "https://github.com/Mark-Mekhail/CPEN221-Projects",
      image: cpen_code,
      tags: ["Concurrent Programming", "Java", "JUnit", "Object-Oriented Programming"]
    }
  ];

  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="section-body">
        {projects.map((project, index) => (ProjectCard(index, project.link, project.image, project.title, project.description, project.tags)))}
      </div>
    </section>
  );
};

export default Projects;
