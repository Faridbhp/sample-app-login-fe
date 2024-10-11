import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skills = ["React", "React Native", "JavaScript", "Flutter", "Dart", ".Net"];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
