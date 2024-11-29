import React from "react";

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
