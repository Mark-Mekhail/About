import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a card component for displaying information about a person.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the card.
 * @param {string} props.icon - The URL of the icon to be displayed.
 * @param {string} props.content - The content to be displayed in the card.
 * @returns {JSX.Element} The rendered AboutCard component.
 */
export default function AboutCard({ title, icon, content }) {
  return (
    <div className="about-card">
      <div className="about-card-heading">
        <h3>{title}</h3>
        <img src={icon.src} alt={icon.alt} className="icon" />
      </div>
      <p>{content}</p>
    </div>
  );
}

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
    .isRequired,
  content: PropTypes.string.isRequired,
};
