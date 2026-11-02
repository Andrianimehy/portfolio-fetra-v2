import React, {useEffect, useState} from "react";
import "./Greeting.scss";
import Button from "../../components/button/Button";
import {heroSlider, greeting} from "../../portfolio";

export default function Greeting() {
  const [activeSlide, setActiveSlide] = useState(0);

  // 1. PRÉCHARGEMENT DE L'IMAGE LCP (Optimisation Performance)
  useEffect(() => {
    if (heroSlider.length > 0 && heroSlider[0].background) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = heroSlider[0].background;
      link.fetchPriority = "high"; 
      
      document.head.appendChild(link);

      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, []);

  // 2. GESTION DU CARROUSEL
  useEffect(() => {
    if (heroSlider.length < 2) return undefined;

    const timer = setInterval(() => {
      setActiveSlide(current => (current + 1) % heroSlider.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  // 3. SÉCURITÉ D'AFFICHAGE
  if (!greeting.displayGreeting) {
    return null;
  }

  const goToSlide = index => {
    setActiveSlide((index + heroSlider.length) % heroSlider.length);
  };

  const current = heroSlider[activeSlide] || heroSlider[0];

  return (
    <section className="hero-slider" id="greeting">
      <div className="hero-slider-track">
        {heroSlider.map((slide, index) => (
          <div
            className={`hero-slide ${index === activeSlide ? "is-active" : ""}`}
            key={slide.id}
            aria-hidden={index !== activeSlide}
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(7, 12, 28, 0.98) 0%, rgba(7, 12, 28, 0.90) 34%, rgba(7, 12, 28, 0.38) 62%, rgba(7, 12, 28, 0.12) 100%), url(${slide.background})`,
              backgroundPosition: slide.backgroundPosition || "right center",
              backgroundSize: slide.backgroundSize || "auto 100%"
            }}
          />
        ))}
      </div>

      <button
        type="button"
        className="hero-slider-arrow hero-slider-arrow-prev"
        onClick={() => goToSlide(activeSlide - 1)}
        aria-label="Slide précédent"
      >
        ‹
      </button>

      <div className="hero-slider-content">
        {/* On garde key={activeSlide} pour que l'animation du texte (via CSS) fonctionne */}
        <div className="hero-slider-copy" key={activeSlide}>
          {current.eyebrow && (
            <div className="hero-slider-eyebrow">{current.eyebrow}</div>
          )}
          <h1>{current.title}</h1>
          <p>{current.description}</p>
          <div className="hero-slider-actions">
            <Button text={current.primaryLabel} href={current.primaryHref} />
            {current.secondaryLabel && (
              <a className="hero-slider-secondary" href={current.secondaryHref}>
                {current.secondaryLabel}
              </a>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero-slider-arrow hero-slider-arrow-next"
        onClick={() => goToSlide(activeSlide + 1)}
        aria-label="Slide suivant"
      >
        ›
      </button>

      <div className="hero-slider-dots" aria-label="Navigation du slider">
        {heroSlider.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            className={`hero-slider-dot ${index === activeSlide ? "is-active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Afficher la slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}