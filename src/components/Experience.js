import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Company A",
      duration: "Jan 2022 - Present",
    },
    {
      role: "Software Engineer Intern",
      company: "Tech Company B",
      duration: "Jun 2021 - Dec 2021",
    },
  ];

  return (
    <section className="experience">
      <h2>Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <h3>{exp.role}</h3>
            <p>{exp.company}</p>
            <p>{exp.duration}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
