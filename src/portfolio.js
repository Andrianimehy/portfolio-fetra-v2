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
  username: "Fetra Razafindrakoto",
  title: "Développeur Full Stack JavaScript",
  subTitle: emoji(
    "Je conçois et développe des applications web modernes, des sites e-commerce performants et des solutions digitales sur mesure. React, TypeScript, Node.js, Express, Supabase, REST API, Magento et Shopify."
  ),
  resumeLink: "",
  displayGreeting: true
};

// Hero Slider — les textes et les images sont modifiables ici
const heroSlider = [
  {
    id: "hero-1",
    eyebrow: "Développement web",
    title: "Des solutions web sur mesure",
    description:
      "On conçois et développe des applications web modernes, des sites e-commerce performants et des solutions digitales adaptées à vos besoins.",
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
    eyebrow: "Full Stack JavaScript",
    title: "Du frontend au backend",
    description:
      "React, TypeScript, Node.js, Express, Supabase et REST API pour construire des applications fiables, rapides et évolutives.",
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
    eyebrow: "E-commerce & projets web",
    title: "Des expériences digitales qui convertissent",
    description:
      "Plus de 20 ans d'expérience dans le web et l'e-commerce, de l'intégration à la création de solutions modernes et sur mesure.",
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
  title: "Mes compétences",
  subTitle: "FULL STACK JAVASCRIPT · E-COMMERCE · WEB DEVELOPMENT",

  skills: [
    emoji(
      "⚡ Développement d'applications web Full Stack avec React, TypeScript, Node.js et Express"
    ),
    emoji(
      "⚡ Création d'interfaces modernes, responsives et performantes avec React, JavaScript, HTML5, CSS3 et Tailwind CSS"
    ),
    emoji(
      "⚡ Développement d'APIs REST, authentification, gestion des utilisateurs et intégration de services backend"
    ),
    emoji(
      "⚡ Développement avec Supabase et PostgreSQL, incluant authentification, données et Row Level Security (RLS)"
    ),
    emoji(
      "⚡ Création, personnalisation et maintenance de solutions e-commerce avec Magento 1/2, Shopify, PrestaShop et WooCommerce"
    ),
    emoji(
      "⚡ Intégration de thèmes et de maquettes, optimisation, maintenance et évolution de projets web existants"
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
        "Applications modernes avec React, TypeScript, Node.js, Express et REST API."
    },
    {
      image: require("./assets/images/expertise-ecommerce.png"),
      projectName: "E-commerce",
      projectDesc:
        "Shopify, Magento 1/2, PrestaShop et WooCommerce : création, personnalisation et maintenance."
    },
    {
      image: require("./assets/images/expertise-api.png"),
      projectName: "Backend & API",
      projectDesc:
        "Services backend, APIs REST, authentification et intégration de services externes."
    },
    {
      image: require("./assets/images/expertise-database.png"),
      projectName: "Supabase & PostgreSQL",
      projectDesc:
        "Bases de données, authentification, stockage et sécurité avec Supabase et PostgreSQL."
    },
    {
      image: require("./assets/images/expertise-frontend.png"),
      projectName: "Frontend moderne",
      projectDesc:
        "Interfaces responsives et performantes avec React, JavaScript, HTML5, CSS3 et Tailwind CSS."
    }
  ],

  display: true
};

// My projects / achievements
const achievementSection = {
  title: "Nos réalisations",
  subtitle:
    "Une sélection de sites e-commerce, applications web et projets institutionnels réalisés avec différentes technologies.",

  achievementsCards: [
    {
      title: "Feelingz Beauty",
      description:
        "Boutique e-commerce développée avec Shopify, orientée beauté et expérience d'achat.",
      image: require("./assets/images/project-feelingz.png"),
      imageAlt: "Feelingz Beauty — Shopify",
      tech: "Shopify",
      footer: [
        {name: "Voir le site", url: "https://feelingz-beauty.myshopify.com/"}
      ]
    },
    {
      title: "Le Grand Barbershop",
      description:
        "Application web moderne développée avec React et Node.js, avec catalogue, gestion des produits.",
       image: require("./assets/images/project-barbershop.png"),
      imageAlt: "Le Grand Barbershop — React / Node.js",
      tech: "React · Node.js",
      footer: [
        {name: "Voir le site", url: "https://legrand-barbershop.vercel.app/"},
        {name: "GitHub", url: "https://github.com/Andrianimehy/legrand-barbershop"}
      ]
    },
    {
      title: "FAAME",
      description:
        "Site corporate WordPress avec gestion des membres, formulaire de contact et collecte de dons en ligne.",
       image: require("./assets/images/project-faame.png"),
      imageAlt: "FAAME — WooCommerce",
      tech: "WordPress · WooCommerce",
      footer: [
        {name: "Voir le site", url: "https://urban-shop.infy.click/"}
      ]
    },
    {
      title: "Maison Délice",
      description:
        "Application e-commerce React, TypeScript et Supabase : catalogue, panier, commandes et administration.",
       image: require("./assets/images/project-delice.png"),
      imageAlt: "Maison Délice — React / Node.js / Supabase",
      tech: "React · TypeScript · Supabase",
      footer: [
        {name: "Voir le site", url: "https://maison-delice-one.vercel.app/"}
      ]
    },
    {
      title: "Fanamby",
      description:
        "Site institutionnel WordPress dédié à la biodiversité et au développement durable à Madagascar.",
       image: require("./assets/images/project-fanamby.png"),
      imageAlt: "Fanamby — WordPress",
      tech: "WordPress",
      footer: [
        {name: "Voir le site", url: "https://fanamby.org/"}
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
  title: "Mon parcours",
  subtitle:
    "Plus de 20 ans d'expérience dans le développement web, l'intégration et l'e-commerce.",
  display: true
};

// Contact
const contactInfo = {
  title: emoji("Travaillons ensemble 🤝"),
  subtitle:
    "Vous avez un projet web, une application Full Stack, une boutique e-commerce ou besoin de faire évoluer un projet existant ? Parlons-en.",
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
