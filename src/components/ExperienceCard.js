import React from "react";
import PropTypes from "prop-types";

/**
 * Renders an experience card component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.role - The name of the role for the experience.
 * @param {string} props.company - The company of the experience.
 * @param {string} props.description - A description of the experience.
 * @param {string} props.logo - A logo for the experience.
 * @returns {JSX.Element} The rendered experience card component.
 */
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
