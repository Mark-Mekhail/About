import React from "react";
import PropTypes from "prop-types";

export default function AboutCard({ title, icon, content }) {
  return (
    <div className="about-card">
      <div className="about-card-heading">
        <h3>{title}</h3>
        <img src={icon} className="icon" />
      </div>
      <p>{content}</p>
    </div>
  );
}

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
