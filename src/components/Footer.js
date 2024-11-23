import React from "react";

// Required Images
import linkedin from "../images/icons8-linkedin.png";
import github from "../images/icons8-github.png";

const Footer = () => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/markmekhail",
      site: "LinkedIn",
      image: linkedin
    },
    {
      link: "https://github.com/Mark-Mekhail",
      site: "GitHub",
      image: github
    }
  ];

  return (
    <footer className="footer">
      <div className="social-links">
        {socials.map((social, index) => (
          <a key={index} href="https://www.linkedin.com/in/markmekhail" target="_blank" rel="noopener noreferrer">
            <img src={social.image} />
            {social.site}
          </a>
        ))}
      </div>
      <p>&copy; {new Date().getUTCFullYear()} Mark Mekhail. Icons by <a href="https://icons8.com/">Icons8</a></p>
    </footer>
  );
};

export default Footer;
