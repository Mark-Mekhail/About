import React from "react";

// Required images
import markSeattle from "../images/mark-seattle.jpeg";
import markBanff from "../images/mark-banff.jpeg";
import markBeehiveHike from "../images/mark-beehive-hike.jpeg";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-images">
        <img src={markSeattle} className="bottom-image"/>
        <img src={markBanff} className="top-image"/>
        <img src={markBeehiveHike} className="central-image"/>
      </div>
      <h1>Mark Mekhail</h1>
      <p>
        Hey there! I&apos;m Mark, a human being who happens to be studying Computer Engineering at the University of British Columbia. 
        <br></br>
        Thank you for visiting my website!
      </p>
    </section>
  );
};

export default Intro;