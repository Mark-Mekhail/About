import React from "react";

const AboutCard = (index, title, icon, content) => {
  return (
    <div key={index} className="about-section-card">
      <div className="about-card-heading">
        <h3>{title}</h3>
        <img src={icon} className="about-icon"/>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default AboutCard;
