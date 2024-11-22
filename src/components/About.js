import React from "react";

const About = () => {
  const sections = [
    {
      title: "Background",
      content: "I'm a senior Computer Engineering student at the University of British Columbia (UBC). I have completed co-op work terms in Software Engineering, Simulation Software Engineering, Full-Stack web development, and Backend development at medium to large organizations in the National Defense, Software Tools, Electronics, and Semiconductor industries. I'm hoping to continue expanding the breadth of my experience in the software space while also honing and refining my current skills."
    },
  ]
  return (
    <section class="about">
      <h2>About Me</h2>
      <div class="about-section">
        {sections.map((section, index) => (
          <div key={index} class="about-section-card">
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
