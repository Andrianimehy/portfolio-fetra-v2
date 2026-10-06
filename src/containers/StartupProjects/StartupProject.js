import React, {useContext, useEffect, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth <= 520) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, bigProjects.projects.length - visibleCount);
    setCurrentIndex(index => Math.min(index, maxIndex));
  }, [visibleCount]);

  if (!bigProjects.display) return null;

  // Each carousel "page" is a sliding window. This keeps 3 cards visible
  // while moving only ONE card at a time.
  const maxIndex = Math.max(0, bigProjects.projects.length - visibleCount);
  const pages = Array.from(
    {length: maxIndex + 1},
    (_, startIndex) => bigProjects.projects.slice(startIndex, startIndex + visibleCount)
  );
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const slidePrev = () => setCurrentIndex(index => Math.max(0, index - 1));
  const slideNext = () => setCurrentIndex(index => Math.min(maxIndex, index + 1));

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1
            className={
              isDark ? "dark-mode skills-heading" : "skills-heading"
            }
          >
            {bigProjects.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="expertise-carousel">
            <button
              type="button"
              className={
                isDark
                  ? "dark-mode expertise-carousel-button"
                  : "expertise-carousel-button"
              }
              onClick={slidePrev}
              disabled={!canGoPrev}
              aria-label="Domaine précédent"
            >
              ‹
            </button>

            <div className="expertise-carousel-viewport">
              <div
                className="expertise-cards-track"
                style={{"--current-index": currentIndex}}
              >
                {pages.map((page, pageIndex) => (
                  <div className="expertise-slide-page" key={pageIndex}>
                    {page.map((project, i) => (
                      <div
                        key={i}
                        className={
                          isDark
                            ? "dark-mode expertise-slide project-card project-card-dark"
                            : "expertise-slide project-card project-card-light"
                        }
                      >
                        {project.image ? (
                          <div className="project-image">
                            <img
                              src={project.image}
                              alt={project.projectName}
                              className="card-image"
                            />
                          </div>
                        ) : null}
                        <div className="project-detail">
                          <h5 className="card-title">{project.projectName}</h5>
                          <p className="card-subtitle">{project.projectDesc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={
                isDark
                  ? "dark-mode expertise-carousel-button"
                  : "expertise-carousel-button"
              }
              onClick={slideNext}
              disabled={!canGoNext}
              aria-label="Domaine suivant"
            >
              ›
            </button>
          </div>

          <div className="expertise-carousel-dots" aria-label="Navigation des domaines">
            {Array.from({length: pages.length}).map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === currentIndex ? "active" : ""}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Afficher les domaines à partir du ${index + 1}e domaine`}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
