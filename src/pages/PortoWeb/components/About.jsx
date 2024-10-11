import React from "react";
import "../styles/About.css";
import { FaCode, FaMobileAlt, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am an experienced web and mobile developer specializing in
            building dynamic and responsive applications using React, React
            Native, and Flutter. With over two years of professional experience,
            I have honed my skills in creating seamless and intuitive user
            experiences across various platforms. I am passionate about solving
            complex problems and committed to delivering high-quality, scalable
            solutions in fast-paced and challenging environments. My expertise
            in cutting-edge technologies and dedication to continuous learning
            ensure that I am always ready to tackle new challenges and meet
            client needs in innovative and effective ways.
          </p>
        </div>
        <div className="about-icons">
          <div className="icon">
            <FaCode size={50} color="#6c63ff" className="icon-image" />
            <h3>Web Development</h3>
          </div>
          <div className="icon">
            <FaMobileAlt size={50} color="#6c63ff" className="icon-image" />
            <h3>Mobile Development</h3>
          </div>
          <div className="icon">
            <FaUsers size={50} color="#6c63ff" className="icon-image" />
            <h3>User Experience</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
