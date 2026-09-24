import React, {useContext} from "react";
import "./Project.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);

  if (!bigProjects.display) {
    return null;
  }

  return (
    <div className="main" id="projects">
      <div>
        <h1 className={isDark ? "dark-mode project-title" : "project-title"}>
          {bigProjects.title}
        </h1>

        <p
          className={
            isDark ? "dark-mode project-subtitle" : "project-subtitle"
          }
        >
          {bigProjects.subtitle}
        </p>

        <div className="projects-container">
          {bigProjects.projects.map((project, i) => (
            <div className="project-card" key={i}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.projectName || "Projet"}
                  className="project-image"
                />
              )}

              <div className="project-content">
                <h2>{project.projectName}</h2>

                <p>{project.projectDesc}</p>

                {project.footerLink && (
                  <div className="project-links">
                    {project.footerLink.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}