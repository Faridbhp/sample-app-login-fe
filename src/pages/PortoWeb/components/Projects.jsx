import React from "react";
import "../styles/Project.css";

const Projects = () => {
  const personalProjects = [
    {
      title: "Tuwak (Tulisan Awak App)",
      description:
        "A feature-rich note-taking app built with Flutter, allowing users to create, edit, and organize notes effortlessly. This cross-platform app is optimized for web, Windows, and mobile, ensuring a seamless experience on any device.",
      technologies: "Flutter",
      link: "#",
    },
  ];

  const workProjects = [
    {
      title: "Building Information System Mobile",
      description:
        "This project is designed to facilitate the inspection of assets and the monitoring of energy conditions through a mobile application. Inspectors can easily input inspection data directly in the field, enabling quick and accurate information collection.",
      technologies: "React Native, .Net",
      link: "",
    },
    {
      title: "Building Information System Web",
      description:
        "The web version of the Building Information System acts as a management platform that streamlines the inspection process. Administrators can easily assign inspectors, specify asset inspections, and schedule tasks through an intuitive interface. The platform displays inspection results, monitors asset conditions, and supports data-driven decisions, ensuring smooth campus operations. By utilizing inspection data, the system helps prevent damage and enables faster, more accurate repairs.",
      technologies: "React.js, .Net",
      link: "",
    },
    {
      title: "MyIdScore",
      description:
        "MyIdScore Mobile Apps is a customer portal where registered users can access credit information and credit scores directly through the mobile application. To add value, the MyIdScore mobile app offers additional features such as credit insights, alerts (early warning system), credit score simulations, credit limit calculators, and offers for credit facilities available to members.",
      technologies: "React Native, .Net",
      link: "",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <h3>Personal Projects</h3>
      <div className={`project-list ${personalProjects.length > 1 ? "multiple-projects" : ""}`}>
        {personalProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            {project.link && (
              <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
            <p className="technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>
          </div>
        ))}
      </div>

      <h3>Work Projects</h3>
      <div className={`project-list ${workProjects.length > 1 ? "multiple-projects" : ""}`}>
        {workProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            {project.link && (
              <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
            <p className="technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
