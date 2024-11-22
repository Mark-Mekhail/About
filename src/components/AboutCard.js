import React from "react";

const AboutCard = (index, title, icon, content) => {
  return (
    <div key={index} class="about-section-card">
      <div class="about-card-heading">
        <h3>{title}</h3>
        <img src={icon} class="about-icon"/>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default AboutCard;
