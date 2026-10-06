import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./About.scss";

export default function About() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="main about-section" id="about">
        <div className="about-header">
          <span className="about-eyebrow">ATHELSTAN AGENCY</span>
          <h1 className="heading about-title">Qui sommes-nous ?</h1>
          <p className={isDark ? "dark-mode subTitle about-subtitle" : "subTitle about-subtitle"}>
            Une expertise web au service de vos objectifs.
          </p>
        </div>

        <div className="about-intro">
          <div>
            <h2>Une agence web orientée résultats</h2>
            <p>
              Athelstan Agency accompagne les entreprises, indépendants et organisations dans la création, la refonte et l'évolution de leurs projets digitaux. Nous combinons expérience métier, design et développement pour construire des solutions utiles, rapides et durables.
            </p>
          </div>
          <div className="about-experience">
            <strong>20+</strong>
            <span>ans d'expérience dans le web</span>
          </div>
        </div>

        <div className="about-process">
          <article className="about-process-card">
            <span>01</span>
            <h3>Comprendre</h3>
            <p>Nous clarifions vos objectifs, vos utilisateurs et les priorités du projet.</p>
          </article>
          <article className="about-process-card">
            <span>02</span>
            <h3>Créer</h3>
            <p>Nous concevons une expérience moderne, responsive et adaptée à votre identité.</p>
          </article>
          <article className="about-process-card">
            <span>03</span>
            <h3>Faire évoluer</h3>
            <p>Nous optimisons, maintenons et faisons grandir votre solution dans le temps.</p>
          </article>
        </div>
      </section>
    </Fade>
  );
}
