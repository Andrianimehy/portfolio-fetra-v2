import React, {useContext, useEffect, useState} from "react";
import "./Project.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth <= 520) return 1;
  if (window.innerWidth <= 768) return 2;
  return 3;
}

export default function Projects() {
  const {isDark} = useContext(StyleContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, bigProjects.projects.length - visibleCount);
    setCurrentIndex(index => Math.min(index, maxIndex));
  }, [visibleCount]);

  if (!bigProjects.display) {
    return null;
  }

  const maxIndex = Math.max(0, bigProjects.projects.length - visibleCount);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const slidePrev = () => {
    setCurrentIndex(index => Math.max(0, index - 1));
  };

  const slideNext = () => {
    setCurrentIndex(index => Math.min(maxIndex, index + 1));
  };

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

        <div className="expertise-carousel">
          <button
            type="button"
            className="expertise-carousel-button expertise-carousel-prev"
            onClick={slidePrev}
            disabled={!canGoPrev}
            aria-label="Domaines précédents"
          >
            ‹
          </button>

          <div className="expertise-carousel-viewport">
            <div
              className="projects-container"
              style={{
                "--visible-count": visibleCount,
                transform: `translateX(calc(-${currentIndex} * ((100% + 0.65rem) / var(--visible-count))))`
              }}
            >
              {bigProjects.projects.map((project, i) => (
                <div className="project-card" key={i}>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.projectName || "Domaine d'expertise"}
                      className="project-image"
                    />
                  )}

                  <div className="project-content">
                    <h2>{project.projectName}</h2>
                    <p>{project.projectDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="expertise-carousel-button expertise-carousel-next"
            onClick={slideNext}
            disabled={!canGoNext}
            aria-label="Domaines suivants"
          >
            ›
          </button>
        </div>

        <div className="expertise-carousel-dots" aria-label="Navigation des domaines">
          {Array.from({length: maxIndex + 1}).map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Afficher les domaines ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
