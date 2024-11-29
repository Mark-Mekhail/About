import React from "react";
import PropTypes from "prop-types";

export default function ExperienceCard({ role, company, description, logo }) {
  return (
    <div className="experience-card">
      <div>
        <h4>{role}</h4>
        <h6 className="company-name">{company}</h6>
        <p>{description}</p>
      </div>
      <img src={logo} className="logo" />
    </div>
  );
}

ExperienceCard.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
