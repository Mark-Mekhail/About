// About section images
import leaderIcon from "../images/man-leader.png";
import developerIcon from "../images/software-developer.png";
import studentIcon from "../images/student.png";

// Project section images
import braille_alphabet from "../images/braille.jpg";
import meta_puzzles from "../images/computer-puzzle.jpeg";
import website from "../images/website.png";
import cpen_code from "../images/coding-project.jpeg";
import battleship from "../images/battleship.png";

// Experience section images
import intelLogo from "../images/intel.png";
import selLogo from "../images/sel.png";
import ubcLogo from "../images/ubc.svg";
import safeLogo from "../images/safe.png";
import canadaLogo from "../images/canada.png";

// Skillset section images
import java from "../images/java.svg";
import python from "../images/python.svg";
import javascript from "../images/javascript.svg";
import cpp from "../images/cpp.svg";
import c from "../images/c.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";
import database from "../images/database.png";
import processor from "../images/processor.png";
import git from "../images/git.svg";
import linux from "../images/linux.png";
import docker from "../images/docker.svg";
import jenkins from "../images/jenkins.svg";
import github from "../images/github.svg";
import aws from "../images/aws.svg";
import react from "../images/react.svg";
import node from "../images/node-js.svg";
import mongodb from "../images/mongodb.svg";
import jest from "../images/jest.png";
import junit from "../images/junit.png";
import cypress from "../images/cypress.png";
import dataStructure from "../images/data-structure.png";
import algorithm from "../images/algorithm.png";
import oop from "../images/oop.png";
import split from "../images/split.png";
import restApi from "../images/rest-api.png";
import distributedSystem from "../images/distributed-system.png";
import ml from "../images/ml.png";
import cybersecurity from "../images/cybersecurity.png";
import computerNetwork from "../images/computer-network.png";

// Social links images
import linkedin from "../images/linkedin.png";

const navSections = ["About", "Experience", "Skills", "Projects"];

// About section content
const abouts = [
  {
    title: "Top 4% Student",
    icon: {
      src: studentIcon,
      alt: "Student Icon",
    },
    content:
      "I have consistently demonstrated academic excellence throughout my studies, achieving a GPA that comfortably places me within the top 4% of my cohort. With a perfect straight-A record across all subjects, I have proven my dedication to achieving exceptional results. Notably, I have earned the highest score in my section for several challenging courses, including Basic Algorithms and Data Structures, Intermediate Algorithms and Data Structures, Machine Learning and Data Mining, Computer Communications, Computing Systems, University Writing, Technical Communication, and Principles of Microeconomics.",
  },
  {
    title: "Skilled Engineer",
    icon: {
      src: developerIcon,
      alt: "Developer Icon",
    },
    content:
      "I am a dedicated and skilled engineer with a solid understanding of data structures, algorithms, and various programming languages. Through coursework and internship placements I have gained valuable experience in web application development, devops, software simulation, computer networking, cybersecurity, and machine learning. As someone who is eager to learn and improve, I enjoy working on personal projects to enhance my skills and knowledge. I welcome you to explore my project portfolio and see the variety of projects I have worked on.",
  },
  {
    title: "Proactive Leader",
    icon: {
      src: leaderIcon,
      alt: "Leader Icon",
    },
    content:
      "Throughout my studies and work experiences, I have consistently demonstrated an eagerness to take initiative, actively engage, and excel as a leader. In my senior capstone project, I took charge of coordinating my team by delegating tasks, setting deadlines, and ensuring that project milestones were met on time. As a club executive for the Coptic Orthodox Student Association at UBC for four years, I actively organized events, led meetings, and maintained a strong relationship with the Alma Mater Society. At Intel, I formally led the intern cohort in organizing social events and activities.",
  },
];

// Experience section content
const experiences = [
  {
    role: "Simulation Engineer",
    company: "Intel",
    description:
      "The Virtual Platform teams at Intel Foundry Services (IFS) specialize in the development of software simulations for system-on-chip (SoC) designs. As a member of one of these teams, I contributed to developing these simulations. Additionally, I took the initiative to complete infrastructure-related tasks, such as creating a template repository project that streamlined the setup process for new system repositories.",
    logo: { src: intelLogo, alt: "Intel Logo" },
  },
  {
    role: "Software Engineer",
    company: "SEL",
    description:
      "Schweitzer Engineering Laboratories (SEL) specializes in creating digital products and systems that protect, control, and automate power systems around the world. In my role, I contributed by developing Jenkins pipelines for team projects, configuring Windows and Linux machines for CI/CD pipelines, writing VHDL testbenches for RTL components, and creating Python scripts to automate testing of SEL networking devices.",
    logo: { src: selLogo, alt: "SEL Logo" },
  },
  {
    role: "Teaching Assistant",
    company: "UBC",
    description:
      "As a teaching assistant for CPEN 211 (Introduction to Computing Systems), I actively engaged with students by holding regular office hours, providing assistance and feedback on assignments, and actively participating in an online forum to answer questions. CPEN 211 is a fundamental course that covers topics such as digital logic design, microcomputer organization, assembly language programming, and I/O programming.",
    logo: { src: ubcLogo, alt: "UBC Logo" },
  },
  {
    role: "Backend Developer",
    company: "Safe Software",
    description:
      'As a backend software developer at Safe Software, I played a crucial role in developing the backend of FME Server, a web app that automates data and application integration workflows. Safe Software (aka. "Safe") is a leading company that develops and sells FME, the data integration platform with the best support for spatial data.',
    logo: { src: safeLogo, alt: "Safe Software Logo" },
  },
  {
    role: "Full-Stack Developer",
    company: "Government of Canada",
    description:
      "During my time working for the Canadian federal government, I had the opportunity to develop both frontend and backend microservices. These microservices were critical components of web applications used for national security purposes. I gained valuable experience in frontend and backend microservice application development and contributed to projects that required a strong focus on security and reliability.",
    logo: { src: canadaLogo, alt: "Government of Canada Logo" },
  },
];

const skillsets = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: { src: java, alt: "Java Icon" } },
      { name: "Python", icon: { src: python, alt: "Python Icon" } },
      { name: "C++", icon: { src: cpp, alt: "C++ Icon" } },
      { name: "C", icon: { src: c, alt: "C Icon" } },
      { name: "JavaScript", icon: { src: javascript, alt: "JavaScript Icon" } },
      { name: "HTML", icon: { src: html, alt: "HTML Icon" } },
      { name: "CSS", icon: { src: css, alt: "CSS Icon" } },
      { name: "SQL", icon: { src: database, alt: "SQL Icon" } },
      {
        name: "SystemVerilog",
        icon: { src: processor, alt: "SystemVerilog Icon" },
      },
    ],
  },
  {
    category: "Technologies and Tools",
    skills: [
      { name: "Git", icon: { src: git, alt: "Git Icon" } },
      { name: "Linux", icon: { src: linux, alt: "Linux Icon" } },
      { name: "Docker", icon: { src: docker, alt: "Docker Icon" } },
      { name: "Jenkins", icon: { src: jenkins, alt: "Jenkins Icon" } },
      {
        name: "GitHub Actions",
        icon: { src: github, alt: "GitHub Actions Icon" },
      },
      { name: "AWS", icon: { src: aws, alt: "AWS Icon" } },
      { name: "Node.js", icon: { src: node, alt: "Node.js Icon" } },
      { name: "React", icon: { src: react, alt: "React Icon" } },
      { name: "MongoDB", icon: { src: mongodb, alt: "MongoDB Icon" } },
      { name: "Jest", icon: { src: jest, alt: "Jest Icon" } },
      { name: "Cypress", icon: { src: cypress, alt: "Cypress Icon" } },
      { name: "JUnit", icon: { src: junit, alt: "JUnit Icon" } },
    ],
  },
  {
    category: "Software Concepts",
    skills: [
      {
        name: "Data Structures",
        icon: { src: dataStructure, alt: "Data Structures Icon" },
      },
      {
        name: "Algorithms",
        icon: { src: algorithm, alt: "Algorithms Icon" },
      },
      {
        name: "Object-Oriented Programming",
        icon: { src: oop, alt: "OOP Icon" },
      },
      {
        name: "Multithreaded Programming",
        icon: { src: split, alt: "Multithreaded Programming Icon" },
      },
      {
        name: "Computer Networking",
        icon: { src: computerNetwork, alt: "Computer Networking Icon" },
      },
      {
        name: "Distributed Systems",
        icon: { src: distributedSystem, alt: "Distributed Systems Icon" },
      },
      { name: "REST APIs", icon: { src: restApi, alt: "REST APIs Icon" } },
      {
        name: "Machine Learning",
        icon: { src: ml, alt: "Machine Learning Icon" },
      },
      {
        name: "Cybersecurity",
        icon: { src: cybersecurity, alt: "Cybersecurity Icon" },
      },
    ],
  },
];

// Project section content
const projects = [
  {
    title: "Meta Coding Puzzles",
    description:
      "Solutions to the coding puzzles available on the Meta Careers website",
    link: "https://github.com/Mark-Mekhail/Meta-Careers-Coding-Puzzle-Solutions",
    image: { src: meta_puzzles, alt: "Meta Puzzles Image" },
    tags: ["Data Structures", "Algorithms", "C++", "Python"],
  },
  {
    title: "About Mark Website",
    description:
      "A React application developed to create the website you are currently browsing",
    link: "https://github.com/Mark-Mekhail/About-Mark",
    image: { src: website, alt: "Website Image" },
    tags: ["GitHub Actions (CI/CD)", "React", "HTML", "CSS", "Jest", "Cypress"],
  },
  {
    title: "Braille Translator",
    description: "A script for converting English to Braille and vice-versa",
    link: "https://github.com/Mark-Mekhail/Braille-Translator",
    image: { src: braille_alphabet, alt: "Braille Alphabet Image" },
    tags: ["Python", "Git/GitHub"],
  },
  {
    title: "Battleship",
    description: "A server for multiplayer Battleship games",
    link: "https://github.com/Mark-Mekhail/Battleship",
    image: { src: battleship, alt: "Battleship Image" },
    tags: ["JavaScript", "Node.js", "Express", "WebSocket", "REST API"],
  },
  {
    title: "Course Project Samples",
    description:
      "A collection of projects completed for a Software Construction course",
    link: "https://github.com/Mark-Mekhail/CPEN221-Projects",
    image: { src: cpen_code, alt: "CPEN Code Image" },
    tags: [
      "Object-Oriented Programming",
      "Java",
      "JUnit",
      "Concurrent Programming",
    ],
  },
];

// Social links content
const socials = [
  {
    link: "https://www.linkedin.com/in/markmekhail",
    site: "LinkedIn",
    icon: {
      src: linkedin,
      alt: "LinkedIn Icon",
    },
  },
  {
    link: "https://github.com/Mark-Mekhail",
    site: "GitHub",
    icon: {
      src: github,
      alt: "GitHub Icon",
    },
  },
];

export { navSections, abouts, experiences, projects, skillsets, socials };
