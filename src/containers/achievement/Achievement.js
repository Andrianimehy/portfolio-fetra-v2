import React, {useContext, useEffect, useState} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 520) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, achievementSection.achievementsCards.length - visibleCount);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, currentIndex]);

  if (!achievementSection.display) {
    return null;
  }

  const cards = achievementSection.achievementsCards;
  const maxIndex = Math.max(0, cards.length - visibleCount);
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const goPrevious = () => {
    setCurrentIndex(index => Math.max(0, index - 1));
  };

  const goNext = () => {
    setCurrentIndex(index => Math.min(maxIndex, index + 1));
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>

          <div className="achievement-carousel">
            <button
              type="button"
              className={
                isDark
                  ? "dark-mode achievement-carousel-button"
                  : "achievement-carousel-button"
              }
              onClick={goPrevious}
              disabled={!canGoPrevious}
              aria-label="Projet précédent"
            >
              ‹
            </button>

            <div className="achievement-carousel-viewport">
              <div
                className="achievement-cards-track"
                style={{
                  "--cards-count": cards.length,
                  "--visible-count": visibleCount,
                  "--current-index": currentIndex
                }}
              >
                {cards.map(card => (
                  <div className="achievement-slide" key={card.title}>
                    <AchievementCard
                      isDark={isDark}
                      cardInfo={{
                        title: card.title,
                        description: card.description,
                        image: card.image,
                        fallbackImage: card.fallbackImage,
                        imageAlt: card.imageAlt,
                        tech: card.tech,
                        footer: card.footer
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={
                isDark
                  ? "dark-mode achievement-carousel-button"
                  : "achievement-carousel-button"
              }
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Projet suivant"
            >
              ›
            </button>
          </div>

          <div className="achievement-carousel-dots" aria-label="Navigation des réalisations">
            {cards.map((card, index) => {
              const isActive = index === currentIndex;
              const targetIndex = Math.min(index, maxIndex);
              return (
                <button
                  type="button"
                  key={card.title}
                  className={isActive ? "achievement-carousel-dot active" : "achievement-carousel-dot"}
                  onClick={() => setCurrentIndex(targetIndex)}
                  aria-label={`Afficher ${card.title}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
