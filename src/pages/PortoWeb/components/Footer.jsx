import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const myData = {
    email: "muhammadfaridghazy@gmail.com",
    phone: "08-----",
    github: "https://github.com/Faridbhp",
    linkedin: "https://www.linkedin.com/in/muhammad-farid-ghazy-736412132/",
  };
  console.log(myData.linkedin);

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <h2>Contact Me</h2>
        <p>{myData.email}</p>
        <p>{myData.phone}</p>
        <div className="footer-links">
          <a
            href={myData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href={myData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
