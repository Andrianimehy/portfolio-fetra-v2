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
          <h1 className="heading about-title">Qui sommes-nous ?</h1>
          <p className={isDark ? "dark-mode subTitle about-subtitle" : "subTitle about-subtitle"}>
            Une expertise web au service de vos projets digitaux.
          </p>
        </div>
        <div className="about-content">
          <div className="about-card">
            <h2>Une agence web orientée résultats</h2>
            <p>
              Athelstan Agency accompagne les entreprises, indépendants et organisations
              dans la création, la modernisation et l'évolution de leurs projets web.
              Nous concevons des solutions modernes, performantes et adaptées aux besoins
              réels de chaque projet.
            </p>
            <p>
              Notre expérience couvre aussi bien le développement d'applications web
              Full Stack que la création de sites e-commerce et l'intégration de projets
              existants.
            </p>
          </div>
          <div className="about-card">
            <h2>Notre savoir-faire</h2>
            <ul>
              <li>Développement web Full Stack avec React, TypeScript et Node.js</li>
              <li>Création de sites e-commerce avec Shopify, Magento et WooCommerce</li>
              <li>APIs REST, bases de données et solutions Supabase / PostgreSQL</li>
              <li>Interfaces modernes, responsives et optimisées</li>
              <li>Maintenance, optimisation et évolution de sites existants</li>
            </ul>
          </div>
        </div>
      </section>
    </Fade>
  );
}
