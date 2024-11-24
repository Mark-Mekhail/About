import React from "react";

// Required components
import ExperienceCard from "./ExperienceCard";

// Required images
import intelLogo from "../images/intel.png";
import selLogo from "../images/sel.png";
import ubcLogo from "../images/ubc.png";
import safeLogo from "../images/safe.png";
import dndLogo from "../images/canada-dnd.png";

const Experience = () => {
  const experiences = [
    {
      role: "Simulation Software Engineer Intern",
      company: "Intel Corporation",
      description: "The Virtual Platform teams at Intel Foundry Services (IFS) \
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
      description: "SEL specializes in creating digital products and systems \
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
      description: "CPEN 211 (Computing Systems I) is a fundamental course in \
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
      description: "Safe Software (aka. \"Safe\") develops and sells FME, the \
        data integration platform with the best support for spatial data. Safe \
        is dedicated to helping data users around the world discover the power \
        that their data holds. My role involved developing the backend of FME \
        Server, a web app that automates data and application integration workflows.",
      logo: safeLogo,
    },
    {
      role: "Full-Stack Software Developer Co-op",
      company: "Canadian Department of National Defence",
      description: "While most of the work completed at the Department of \
      National Defence (DND) is classified, I can say that I developed frontend \
      and backend microservices that supported web applications used for national \
      security purposes.",
      logo: dndLogo,
    },
  ];

  return (
    <section className="experience">
      <h1>Professional Experience</h1>
      <div className="section-body">
        {experiences.map((exp, index) => (ExperienceCard(index, exp.role, exp.company, exp.description, exp.logo)))}
      </div>
    </section>
  );
};

export default Experience;
