/* Athelstan Agency | Création Web & Solutions Digitales */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Summary And Greeting Section
const greeting = {
  username: "Athelstan Agency",
  title: "Création Web & Solutions Digitales",
  subTitle: emoji(
    "Nous concevons des sites web, boutiques e-commerce et applications digitales sur mesure pour accompagner les entreprises dans leur croissance."
  ),
  resumeLink: "",
  displayGreeting: true
};

// Hero Slider — les textes et les images sont modifiables ici
const heroSlider = [
  {
    id: "hero-1",
    eyebrow: "Création web & solutions digitales",
    title: "Créons une présence digitale qui vous ressemble",
    description:
      "Nous concevons des sites web modernes, rapides et sur mesure pour transformer vos idées en expériences digitales professionnelles.",
    primaryLabel: "Découvrir nos réalisations",
    primaryHref: "#projects",
    secondaryLabel: "Nous contacter",
    secondaryHref: "#contact",
    background: require("./assets/images/hero-web.jpg"),
    backgroundPosition: "center center",
    backgroundSize: "cover"
  },
  {
    id: "hero-2",
    eyebrow: "Applications web",
    title: "Des applications pensées pour évoluer",
    description:
      "De l'interface au backend, nous développons des solutions fiables, performantes et évolutives avec les technologies web modernes.",
    primaryLabel: "Voir nos compétences",
    primaryHref: "#skills",
    secondaryLabel: "Demander un devis",
    secondaryHref: "#contact",
    background: require("./assets/images/hero-ecommerce.jpg"),
    backgroundPosition: "center center",
    backgroundSize: "cover"
  },
  {
    id: "hero-3",
    eyebrow: "E-commerce & expérience digitale",
    title: "Transformons vos visiteurs en clients",
    description:
      "E-commerce, refonte et optimisation : notre expérience du web nous permet de créer des parcours simples, efficaces et orientés conversion.",
    primaryLabel: "Voir nos projets",
    primaryHref: "#projects",
    secondaryLabel: "Parlons de votre projet",
    secondaryHref: "#contact",
    background: require("./assets/images/hero-fullstack.jpg"),
    backgroundPosition: "center center",
    backgroundSize: "cover"
  }
];

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Andrianimehy",
  linkedin: "",
  gmail: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "Nos expertises",
  subTitle: "Des expertises complémentaires pour créer, moderniser et faire évoluer vos projets digitaux.",

  skills: [
    emoji(
      "⚡ Applications web modernes avec React, TypeScript, Node.js et Express, pensées pour durer."
    ),
    emoji(
      "⚡ Interfaces modernes, responsives et performantes, conçues pour offrir une expérience fluide sur tous les écrans."
    ),
    emoji(
      "⚡ APIs REST, authentification et intégrations pour connecter efficacement vos outils et services."
    ),
    emoji(
      "⚡ Bases de données et backend avec Supabase, PostgreSQL et une sécurité adaptée à vos besoins."
    ),
    emoji(
      "⚡ Création, personnalisation et évolution de boutiques Shopify, Magento, PrestaShop et WooCommerce."
    ),
    emoji(
      "⚡ Refonte, optimisation et maintenance de projets web existants, sans repartir de zéro."
    )
  ],

  softwareSkills: [
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "TypeScript", fontAwesomeClassname: "fas fa-code"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "Express", fontAwesomeClassname: "fas fa-server"},
    {skillName: "Supabase / PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "REST API", fontAwesomeClassname: "fas fa-plug"},
    {skillName: "PHP", fontAwesomeClassname: "fab fa-php"},
    {skillName: "Laravel", fontAwesomeClassname: "fab fa-laravel"},
    {skillName: "Shopify", fontAwesomeClassname: "fab fa-shopify"},
    {skillName: "Magento", fontAwesomeClassname: "fas fa-shopping-cart"},
    {skillName: "WordPress", fontAwesomeClassname: "fab fa-wordpress"},
    {skillName: "Git / GitHub", fontAwesomeClassname: "fab fa-github"},
    {skillName: "Vercel", fontAwesomeClassname: "fas fa-cloud"}
  ],

  display: true
};

// Education Section
const educationInfo = {
  display: true,

  schools: [
    {
      schoolName: "Licence – Informatique de Gestion",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Informatique de Gestion",
      duration: "2019",
      desc: "Formation supérieure en informatique de gestion."
    },
    {
      schoolName: "DTS – Informatique",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Diplôme de Technicien Supérieur",
      duration: "2005 – 2007",
      desc: "Formation technique en informatique."
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,

  experience: [
    {
      Stack: "Frontend / React / TypeScript",
      progressPercentage: "90%"
    },
    {
      Stack: "E-commerce / Magento / Shopify",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend / Node.js / Express / API",
      progressPercentage: "75%"
    },
    {
      Stack: "Supabase / PostgreSQL",
      progressPercentage: "75%"
    }
  ],

  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,

  experience: [
    {
      role: "Développeur Web Full Stack / Intégrateur Web Senior",
      company: "MADADEV WEB TOOLS",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Depuis 2006",

      desc:
        "Plus de 20 ans d'expérience dans le développement web, l'intégration et l'e-commerce, avec une évolution progressive vers le développement Full Stack JavaScript.",

      descBullets: [
        "Conception et intégration de sites web modernes, responsives et orientés expérience utilisateur",
        "Développement frontend avec JavaScript, React et TypeScript",
        "Développement backend avec Node.js, Express et PHP",
        "Création et intégration d'APIs REST et connexion à des services externes",
        "Développement avec Supabase et PostgreSQL, authentification et Row Level Security (RLS)",
        "Création, personnalisation et maintenance de boutiques Magento 1/2, Shopify, PrestaShop et WooCommerce",
        "Développement et personnalisation de thèmes Shopify avec Liquid",
        "Maintenance, migration, correction de bugs et optimisation de projets existants",
        "Déploiement et mise en production avec Git, GitHub et Vercel",
        "Organisation et suivi du travail d'une équipe d'intégrateurs"
      ]
    }
  ]
};

// GitHub Section
const openSource = {
  showGithubProfile: "false",
  display: false
};

// Domains of expertise
const bigProjects = {
  title: "Domaines d'expertise",
  subtitle:
    "Des compétences complémentaires pour concevoir, développer et déployer des projets web complets.",

  projects: [
    {
      image: require("./assets/images/expertise-fullstack.png"),
      projectName: "Développement Full Stack",
      projectDesc:
        "Applications web modernes avec React, TypeScript, Node.js et APIs REST."
    },
    {
      image: require("./assets/images/expertise-ecommerce.png"),
      projectName: "E-commerce",
      projectDesc:
        "Création, personnalisation et maintenance de boutiques Shopify, Magento, PrestaShop et WooCommerce."
    },
    {
      image: require("./assets/images/expertise-api.png"),
      projectName: "Backend & API",
      projectDesc:
        "APIs REST, authentification et intégration de services externes fiables et évolutives."
    },
    {
      image: require("./assets/images/expertise-database.png"),
      projectName: "Supabase & PostgreSQL",
      projectDesc:
        "Backend, base de données, authentification et sécurité avec Supabase et PostgreSQL."
    },
    {
      image: require("./assets/images/expertise-frontend.png"),
      projectName: "Frontend moderne",
      projectDesc:
        "Interfaces responsives et performantes avec React, JavaScript, HTML5 et CSS3."
    }
  ],

  display: true
};

// My projects / achievements
const achievementSection = {
  title: "Nos réalisations",
  subtitle:
    "Des projets concrets pensés pour répondre à des besoins business, améliorer l'expérience utilisateur et faire avancer votre activité.",

  achievementsCards: [
    {
      title: "KOTI Collection",
      description:
        "Boutique e-commerce Magento conçue pour valoriser les produits, optimiser l’expérience d’achat et offrir une navigation fluide sur tous les écrans.",
      image: require("./assets/images/project-koti.png"),
      imageAlt: "KOTI Collection",
      tech: "Magento",
      footer: [
        {name: "Voir le site", url: "https://m10642.app-on-demand.net/"}
      ]
    },
    {
      title: "Le Grand Barbershop",
      description:
        "Application web moderne avec catalogue et gestion des produits, pensée pour une expérience rapide et claire.",
       image: require("./assets/images/project-barbershop.png"),
      imageAlt: "Le Grand Barbershop — React / Node.js",
      tech: "React · Node.js",
      footer: [
        {name: "Voir le site", url: "https://legrand-barbershop.vercel.app/"}
      ]
    },
    {
      title: "Feelingz Beauty",
      description:
        "Boutique Shopify conçue pour valoriser les produits, simplifier l'achat et renforcer l'image de marque.",
      image: require("./assets/images/project-feelingz.png"),
      imageAlt: "Feelingz Beauty — Shopify",
      tech: "Shopify",
      footer: [
        {name: "Voir le site", url: "https://feelingz-beauty.myshopify.com/"}
      ]
    },
    
    {
      title: "FAAME",
      description:
        "Site corporate WordPress avec espace membres, formulaire de contact et collecte de dons en ligne.",
       image: require("./assets/images/project-faame.png"),
      imageAlt: "FAAME — WooCommerce",
      tech: "WordPress",
      footer: [{name: "Voir le site", url: "https://urban-shop.infy.click/?i=1"}]
    },
    {
      title: "Maison Délice",
      description:
        "Plateforme e-commerce complète avec catalogue, panier, commandes et administration sous React, TypeScript et Supabase.",
       image: require("./assets/images/project-delice.png"),
      imageAlt: "Maison Délice — React / Node.js / Supabase",
      tech: "React · TypeScript · Supabase",
      footer: [
        {name: "Voir le site", url: "https://maison-delice-one.vercel.app/"}
      ]
    },
    {
      title: "Hartmann Tresore",
      description:
        "Site e-commerce spécialisé dans les coffres-forts et solutions de sécurité pour particuliers et professionnels.",
       image: require("./assets/images/project-hartmann.png"),
      imageAlt: "Hartmann — Magento",
      tech: "Magento",
      footer: [
        {name: "Voir le site", url: "https://www.hartmann-tresore.fr/"}
      ]
    }
  ],

  display: true
};

// Blogs Section
const blogSection = {
  title: "Blog",

  subtitle:
    "Articles et contenus autour du développement web, du Full Stack JavaScript et de l'e-commerce.",

  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Partage d'expérience et de connaissances autour du développement web et de l'e-commerce."
  ),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Contenus autour du développement web et de la technologie.",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Notre expérience",
  subtitle:
    "Plus de 20 ans d'expérience dans le web, l'intégration et l'e-commerce au service de projets concrets.",
  display: true
};

// Contact
const contactInfo = {
  title: emoji("Parlons de votre projet 🤝"),
  subtitle:
    "Vous avez un projet web, une boutique e-commerce, une application ou un site à faire évoluer ? Décrivez-nous votre besoin et construisons la bonne solution ensemble.",
  number: "+261 34 14 587 73",
  email_address: "fetranirina@gmail.com"
};

// Twitter
const twitterDetails = {
  userName: "twitter",
  display: false
};

// Hiring
const isHireable = true;

export {
  illustration,
  greeting,
  heroSlider,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
