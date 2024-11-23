import React from "react";

const ExperienceCard = (index, role, company, description, logo) => {
  return (
    <div key={index} className="experience-card">
      <h4>{role}</h4>
      <h5 className="company-name">{company}</h5>
      <p>
        {description}
      </p>
      <img src={logo} className="logo" />
    </div>
  );
};

export default ExperienceCard;
