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
import ubcLogo from "../images/ubc.svg";
import safeLogo from "../images/safe.png";
import canadaLogo from "../images/canada.png";

// Social links images
import linkedin from "../images/icons8-linkedin.png";
import github from "../images/icons8-github.png";

// About section content
const abouts = [
  {
    title: "Top 4% Student",
    icon: studentIcon,
    content:
      "I have consistently demonstrated academic excellence throughout my studies, achieving a GPA that comfortably places me within the top 4% of my cohort. With a perfect straight-A record across all subjects, I have proven my dedication to achieving exceptional results. Notably, I have earned the highest score in my section for several challenging courses, including Basic Algorithms and Data Structures, Intermediate Algorithms and Data Structures, Machine Learning and Data Mining, Computer Communications, Computing Systems, University Writing, Technical Communication, and Principles of Microeconomics.",
  },
  {
    title: "Skilled Engineer",
    icon: developerIcon,
    content:
      "I am a dedicated and skilled engineer with a solid understanding of data structures, algorithms, and various programming languages. Through coursework and internship placements I have gained valuable experience in web application development, devops, software simulation, computer networking, cybersecurity, and machine learning. As someone who is eager to learn and improve, I enjoy working on personal projects to enhance my skills and knowledge. I welcome you to explore my project portfolio and see the variety of projects I have worked on.",
  },
  {
    title: "Proactive Leader",
    icon: leaderIcon,
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
    logo: intelLogo,
  },
  {
    role: "Software Engineer",
    company: "SEL",
    description:
      "Schweitzer Engineering Laboratories (SEL) specializes in creating digital products and systems that protect, control, and automate power systems around the world. In my role, I contributed by developing Jenkins pipelines for team projects, configuring Windows and Linux machines for CI/CD pipelines, writing VHDL testbenches for RTL components, and creating Python scripts to automate testing of SEL networking devices.",
    logo: selLogo,
  },
  {
    role: "Teaching Assistant",
    company: "UBC",
    description:
      "As a teaching assistant for CPEN 211 (Introduction to Computing Systems), I actively engaged with students by holding regular office hours, providing assistance and feedback on assignments, and actively participating in an online forum to answer questions. CPEN 211 is a fundamental course that covers topics such as digital logic design, microcomputer organization, assembly language programming, and I/O programming.",
    logo: ubcLogo,
  },
  {
    role: "Backend Developer",
    company: "Safe Software",
    description:
      'As a backend software developer at Safe Software, I played a crucial role in developing the backend of FME Server, a web app that automates data and application integration workflows. Safe Software (aka. "Safe") is a leading company that develops and sells FME, the data integration platform with the best support for spatial data.',
    logo: safeLogo,
  },
  {
    role: "Full-Stack Developer",
    company: "Government of Canada",
    description:
      "During my time working for the Canadian federal government, I had the opportunity to develop both frontend and backend microservices. These microservices were critical components of web applications used for national security purposes. I gained valuable experience in frontend and backend microservice application development and contributed to projects that required a strong focus on security and reliability.",
    logo: canadaLogo,
  },
];

// Project section content
const projects = [
  {
    title: "Meta Coding Puzzles",
    description:
      "Solutions to the coding puzzles available on the Meta Careers website",
    link: "https://github.com/Mark-Mekhail/Meta-Careers-Coding-Puzzle-Solutions",
    image: meta_puzzles,
    tags: ["Data Structures", "Algorithms", "C++", "Python"],
  },
  {
    title: "About Mark Website",
    description:
      "A React application developed to create the website you are currently browsing",
    link: "https://github.com/Mark-Mekhail/About-Mark",
    image: website,
    tags: ["GitHub Actions (CI/CD)", "React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Braille Translator",
    description: "A script for converting English to Braille and vice-versa",
    link: "https://github.com/Mark-Mekhail/Braille-Translator",
    image: braille_alphabet,
    tags: ["Python"],
  },
  {
    title: "Battleship",
    description: "A server for multiplayer Battleship games",
    link: "https://github.com/Mark-Mekhail/Battleship",
    image: cpen_code,
    tags: ["Node.js", "Express", "WebSocket", "REST API"],
  },
  {
    title: "Course Project Samples",
    description:
      "A collection of projects completed for a Software Construction course",
    link: "https://github.com/Mark-Mekhail/CPEN221-Projects",
    image: cpen_code,
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
    image: linkedin,
  },
  {
    link: "https://github.com/Mark-Mekhail",
    site: "GitHub",
    image: github,
  },
];

export { abouts, experiences, projects, socials };
