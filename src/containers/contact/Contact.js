import React, {useContext, useState} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const whatsappNumber = "261341458773";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    project: "Création de site web",
    budget: "",
    message: ""
  });
  const [sent, setSent] = useState(false);

  const handleChange = event => {
    setForm({...form, [event.target.name]: event.target.value});
    setSent(false);
  };

  const buildMessage = () => `Bonjour Athelstan Agency,\n\nJe souhaite vous contacter au sujet d'un projet.\n\nNom : ${form.name}\nEmail : ${form.email}\nEntreprise : ${form.company || "Non précisée"}\nType de projet : ${form.project}\nBudget : ${form.budget || "Non précisé"}\n\nMessage :\n${form.message}`;

  const handleSubmit = event => {
    event.preventDefault();
    const subject = encodeURIComponent(`Nouvelle demande de projet - ${form.project}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${contactInfo.email_address}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="main contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-intro">
            <span className="contact-eyebrow">CONTACT</span>
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className={isDark ? "dark-mode contact-subtitle" : "contact-subtitle"}>
              {contactInfo.subtitle}
            </p>

            <div className="contact-info-list">
              <a className="contact-info-item" href={`mailto:${contactInfo.email_address}`}>
                <span className="contact-info-icon">✉</span>
                <span>
                  <small>Email</small>
                  <strong>{contactInfo.email_address}</strong>
                </span>
              </a>
              <a className="contact-info-item" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                <span className="contact-info-icon">◉</span>
                <span>
                  <small>WhatsApp</small>
                  <strong>+261 34 14 587 73</strong>
                </span>
              </a>
            </div>

            <div className="contact-social">
              <span>Retrouvez-nous également</span>
              <SocialMedia />
            </div>
          </div>

          <div className={isDark ? "contact-form-card dark-mode" : "contact-form-card"}>
            <div className="contact-form-heading">
              <h2>Décrivez-nous votre projet</h2>
              <p>Quelques informations suffisent pour commencer la discussion. Nous vous répondrons rapidement.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-grid">
                <label>
                  <span>Nom <em>*</em></span>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Votre nom" />
                </label>
                <label>
                  <span>Email <em>*</em></span>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="votre@email.com" />
                </label>
                <label>
                  <span>Entreprise</span>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Nom de votre entreprise" />
                </label>
                <label>
                  <span>Type de projet <em>*</em></span>
                  <select name="project" value={form.project} onChange={handleChange} required>
                    <option>Création de site web</option>
                    <option>E-commerce / Shopify</option>
                    <option>Magento</option>
                    <option>Application web</option>
                    <option>Refonte de site</option>
                    <option>Maintenance</option>
                    <option>Autre</option>
                  </select>
                </label>
                <label>
                  <span>Budget estimatif</span>
                  <select name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Sélectionner</option>
                    <option>Moins de 500 €</option>
                    <option>500 – 1 000 €</option>
                    <option>1 000 – 2 500 €</option>
                    <option>Plus de 2 500 €</option>
                  </select>
                </label>
                <label className="contact-message-field">
                  <span>Votre message <em>*</em></span>
                  <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Décrivez votre projet, vos besoins ou votre idée..." rows="6" />
                </label>
              </div>

              <div className="contact-actions">
                <button className="contact-submit" type="submit">
                  <span>✉</span> Envoyer ma demande
                </button>
                <button className="contact-whatsapp" type="button" onClick={openWhatsApp}>
                  <span>◉</span> Continuer sur WhatsApp
                </button>
              </div>
              {sent && <p className="contact-success">Votre messagerie va s’ouvrir avec votre demande préremplie.</p>}
            </form>
          </div>
        </div>
      </section>
    </Fade>
  );
}
