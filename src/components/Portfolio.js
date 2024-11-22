import React from "react";
import braille_alphabet from "../images/braille.jpg";
import meta_puzzles from "../images/meta-puzzles.png";
import website from "../images/website.png";
import cpen_code from "../images/cpen-code.png";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      title: "Meta Coding Puzzles",
      description: "Solutions to the coding puzzles available on the Meta Careers website.",
      link: "https://github.com/Mark-Mekhail/Meta-Careers-Coding-Puzzle-Solutions",
      image: meta_puzzles
    },
    {
      title: "Braille Translator",
      description: "A script for converting English to Braille and vice-versa",
      link: "https://github.com/Mark-Mekhail/Braille-Translator",
      image: braille_alphabet
    },
    {
      title: "Personal Website",
      description: "The website you are currently viewing.",
      link: "https://github.com/Mark-Mekhail/About-Me",
      image: website
    },
    {
      title: "Course Project Samples",
      description: "A collection of projects completed for a Software Construction course.",
      link: "https://github.com/Mark-Mekhail/CPEN221-Projects",
      image: cpen_code
    }
  ];

  return (
    <section class="portfolio">
      <h1>Portfolio</h1>
      <div class="projects">
        {projects.map((project, index) => (ProjectCard(index, project.link, project.image, project.title, project.description)))}
      </div>
    </section>
  );
};

export default Portfolio;
