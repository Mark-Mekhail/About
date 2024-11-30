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
export default function ExperienceCard({
  role,
  company,
  description,
  logo,
  headingHeight,
  headingRef,
}) {
  return (
    <div className="experience-card">
      <p>{description}</p>
      <div
        ref={headingRef}
        className="heading"
        style={{ height: headingHeight }}
      >
        <div className="info">
          <h5>{role}</h5>
          <h6 className="company-name">{company}</h6>
        </div>
        <img src={logo} className="logo" />
      </div>
    </div>
  );
}

ExperienceCard.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  headingRef: PropTypes.func.isRequired,
  headingHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
