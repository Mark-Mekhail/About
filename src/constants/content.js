// About section images
import leaderIcon from "../images/icons8-man-leader.png";
import developerIcon from "../images/icons8-software-developer.png";
import studentIcon from "../images/icons8-student.png";

// Project section images
import braille_alphabet from "../images/braille.jpg";
import meta_puzzles from "../images/meta-puzzles.png";
import website from "../images/website.png";
import cpen_code from "../images/cpen-code.png";

// Experience section images
import intelLogo from "../images/intel.png";
import selLogo from "../images/sel.png";
import ubcLogo from "../images/ubc.png";
import safeLogo from "../images/safe.png";
import dndLogo from "../images/canada-dnd.png";

// Social links images
import linkedin from "../images/icons8-linkedin.png";
import github from "../images/icons8-github.png";

const abouts = [
  {
    title: "Top 4% Student",
    icon: studentIcon,
    content:
      "I have achieved a GPA comfortably within the top 4% of my cohort. I \
      have also maintained a perfect straight-A record so far in my studies across \
      all subject matter, with only two courses remaining. Throughout my studies I \
      have demonstrated excellence by earning the top score in my section of a number \
      of courses, including: Basic Algorithms and Data Structures, Intermediate \
      Algorithms and Data Structures, Machine Learning and Data Mining, Computer \
      Communications, Computing Systems I, University Writing, Technical Communication, \
      and Principles of Microeconomics.",
  },
  {
    title: "Skilled Engineer",
    icon: developerIcon,
    content:
      "I take my profession seriously and am always looking to learn and improve. \
      Beyond learning about data structures and algorithms, various programming \
      languages, and other fundamentals of software development, I have leveraged my \
      education and internship opportunities to develop a range of skills in software \
      engineering such as web application development, devops, software simulation, \
      computer networking/communications, cybersecurity, and machine learning. I also \
      work on personal projects to further develop my skills and knowledge.",
  },
  {
    title: "Proactive Leader",
    icon: leaderIcon,
    content:
      "Throughout my studies and work experiences I have consistently taken \
      on leadership roles. For my senior capstone project, I coordinated the members of \
      my team which by delegating tasks, setting deadlines, and ensuring that project \
      milestones were being met on time. With the Coptic Orthodox Student Association at \
      UBC I was a club executive for four years, during which I was responsible for \
      organizing events, leading meetings, and maintining good standing with the Alma \
      Mater Society. At Intel I took on the initiative of formally leading the intern \
      cohort in organizing social events and activities.",
  },
];

const experiences = [
  {
    role: "Simulation Software Engineer Intern",
    company: "Intel Corporation",
    description:
      "The Virtual Platform teams at Intel Foundry Services (IFS) \
      develop software simulations of system-on-chip (SoC) designs that \
      customers contract IFS to help develop and manufacture. I worked on \
      developing these simulations and also completed infrastructure-related \
      tasks such as creating a template repository project to accelerate the \
      process of setting up new system repositories.",
    logo: intelLogo,
  },
  {
    role: "Software Engineer Intern",
    company: "Schweitzer Engineering Laboratories (SEL)",
    description:
      "SEL specializes in creating digital products and systems \
      that protect, control, and automate power systems around the world. My \
      role was broad in scope and involved developing Jenkins pipelines for \
      team projects, configuring Windows and Linux machines to act as runners \
      for our CI/CD pipelines, writing VHDL testbenches for RTL components, \
      and creating Python scripts to automate testing of SEL networking devices.",
    logo: selLogo,
  },
  {
    role: "Teaching Assistant: CPEN 211",
    company: "UBC Department of Electrical and Computer Engineering",
    description:
      "CPEN 211 (Computing Systems I) is a fundamental course in \
      digital logic design that covers the following topics: digital circuits, \
      organization and operation of microcomputers, memory addressing modes, \
      representation of information, instruction sets, machine and assembly \
      language programming, and I/O programming. As a teaching assistant, I \
      held office hours, graded assignments, and answered questions on an online \
      forum.",
    logo: ubcLogo,
  },
  {
    role: "Backend Software Developer Co-op",
    company: "Safe Software",
    description:
      'Safe Software (aka. "Safe") develops and sells FME, the \
      data integration platform with the best support for spatial data. Safe \
      is dedicated to helping data users around the world discover the power \
      that their data holds. My role involved developing the backend of FME \
      Server, a web app that automates data and application integration workflows.',
    logo: safeLogo,
  },
  {
    role: "Full-Stack Software Developer Co-op",
    company: "Canadian Department of National Defence",
    description:
      "While most of the work completed at the Department of \
    National Defence (DND) is classified, I can say that I developed frontend \
    and backend microservices that supported web applications used for national \
    security purposes.",
    logo: dndLogo,
  },
];

const projects = [
  {
    title: "Meta Coding Puzzles",
    description:
      "Solutions to the coding puzzles available on the Meta Careers website.",
    link: "https://github.com/Mark-Mekhail/Meta-Careers-Coding-Puzzle-Solutions",
    image: meta_puzzles,
    tags: ["Data Structures", "Algorithms", "C++", "Python"],
  },
  {
    title: "Personal Website",
    description: "The website you are currently viewing.",
    link: "https://github.com/Mark-Mekhail/About-Me",
    image: website,
    tags: ["React", "JavaScript", "HTML", "CSS", "GitHub Actions (CI/CD)"],
  },
  {
    title: "Braille Translator",
    description: "A script for converting English to Braille and vice-versa",
    link: "https://github.com/Mark-Mekhail/Braille-Translator",
    image: braille_alphabet,
    tags: ["Python"],
  },
  {
    title: "Course Project Samples",
    description:
      "A collection of projects completed for a Software Construction course.",
    link: "https://github.com/Mark-Mekhail/CPEN221-Projects",
    image: cpen_code,
    tags: [
      "Concurrent Programming",
      "Java",
      "JUnit",
      "Object-Oriented Programming",
    ],
  },
];

const socials = [
  {
    link: "https://www.linkedin.com/in/markmekhail",
    site: "LinkedIn",
    image: linkedin,
  },
  {
    link: "https://github.com/Mark-Mekhail",
    site: "GitHub",
    image: github,
  },
];

export { abouts, experiences, projects, socials };
