import React from "react";
import { motion } from "motion/react";

import Variants from "../animation/Variants";

// Required components
import ProjectCard from "./ProjectCard";

// Required images
import braille_alphabet from "../images/braille.jpg";
import meta_puzzles from "../images/meta-puzzles.png";
import website from "../images/website.png";
import cpen_code from "../images/cpen-code.png";

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

const Projects = () => {
  const variants = {
    initial: Variants.baseInitialVariant(),
    animate: Variants.baseAnimationVariant()
  };

  return (
    <motion.section variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }} className="projects">
      <h1>Projects</h1>
      <div className="section-body">
        {projects.map((project, index) => {
          return (
            <motion.div variants={variants} key={index}>
              {ProjectCard(index, project.link, project.image, project.title, project.description, project.tags)}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
