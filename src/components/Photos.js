import React from "react";

// Required images
import markSeattle from "../images/mark-seattle.jpeg";
import markBanff from "../images/mark-banff.jpeg";
import markBeehiveHike from "../images/mark-beehive-hike.jpeg";

const Photos = () => {
  return (
    <section className="photos">
      <img src={markBanff} className="top-image"/>
      <img src={markBeehiveHike} className="central-image"/>
      <img src={markSeattle} className="bottom-image"/>
    </section>
  );
};

export default Photos;