import React from "react";
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
    <footer class="footer">
      <div class="social-links">
        {socials.map((social, index) => (
          <a href="https://www.linkedin.com/in/markmekhail" target="_blank" rel="noopener noreferrer">
            <img src={social.image} />
            {social.site}
          </a>
        ))}
      </div>
      <p>&copy; 2024 Mark Mekhail. Icons by <a href="https://icons8.com/">Icons8</a></p>
    </footer>
  );
};

export default Footer;