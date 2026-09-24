/* Change this file to get your personal Portfolio */

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
  title: "Bonjour, je suis Fetra",
  subTitle: emoji(
    "Intégrateur Web Senior et développeur Frontend depuis 2006. Je travaille sur des projets e-commerce et web avec Shopify, Magento, WordPress, JavaScript, React, Node.js et PHP."
  ),
  resumeLink: "",
  displayGreeting: true
};

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
  title: "Ce que je fais",
  subTitle:
    "INTÉGRATION WEB, E-COMMERCE ET DÉVELOPPEMENT FRONTEND",

  skills: [
    emoji(
      "⚡ Intégration de maquettes graphiques et développement d'interfaces web modernes et responsives"
    ),
    emoji(
      "⚡ Création et personnalisation de boutiques e-commerce avec Shopify, Magento et WooCommerce"
    ),
    emoji(
      "⚡ Développement frontend avec JavaScript, React et intégration d'API"
    ),
    emoji(
      "⚡ Développement backend avec Node.js, Express et PHP"
    ),
    emoji(
      "⚡ Optimisation des performances, SEO technique et responsive design"
    ),
    emoji(
      "⚡ Migration, maintenance et amélioration de sites web existants"
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Shopify",
      fontAwesomeClassname: "fab fa-shopify"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],

  display: true
};

// Education Section
const educationInfo = {
  display: true,

  schools: [
    {
      schoolName: "Licence en Informatique de Gestion",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Informatique de Gestion",
      duration: "2019",
      desc: "Formation supérieure en informatique de gestion."
    },
    {
      schoolName: "DTS en Informatique",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Diplôme de Technicien Supérieur",
      duration: "2005",
      desc: "Formation technique en informatique."
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,

  experience: [
    {
      Stack: "Frontend / Intégration",
      progressPercentage: "90%"
    },
    {
      Stack: "E-commerce / CMS",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend / API",
      progressPercentage: "70%"
    }
  ],

  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,

  experience: [
    {
      role: "Chef de Pôle Intégration / Intégrateur Web Senior",
      company: "MADADEV WEB TOOLS",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Depuis 2006",

      desc:
        "Développement et intégration de sites web et e-commerce pour différents projets clients.",

      descBullets: [
        "Intégration de maquettes graphiques et développement responsive",
        "Développement et personnalisation de boutiques Shopify, Magento et WordPress",
        "Maintenance, migration et optimisation de sites web",
        "Développement frontend avec JavaScript et React",
        "Développement backend et API avec PHP, Node.js et Express",
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

// Projects Section
const bigProjects = {
  title: "Mes projets",
  subtitle:
    "Quelques domaines et projets sur lesquels j'interviens.",

  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Shopify",
      projectDesc:
        "Création et personnalisation de boutiques Shopify, développement Liquid, thèmes, produits, métadonnées et intégration e-commerce.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Andrianimehy"
        }
      ]
    },

    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Magento",
      projectDesc:
        "Intégration et maintenance de projets Magento, personnalisation de thèmes, modules, configuration et optimisation.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Andrianimehy"
        }
      ]
    },

    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "WordPress / WooCommerce",
      projectDesc:
        "Création de sites vitrines et boutiques WooCommerce avec personnalisation de thèmes, contenus et fonctionnalités.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Andrianimehy"
        }
      ]
    },

    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "React + Node.js",
      projectDesc:
        "Développement d'applications web avec React, Vite, Node.js, Express, MySQL, API REST et authentification JWT.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Andrianimehy"
        }
      ]
    },

    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Performance Web & SEO",
      projectDesc:
        "Optimisation des performances, responsive design, chargement des ressources, SEO technique et amélioration des Core Web Vitals.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Andrianimehy"
        }
      ]
    }
  ],

  display: true
};

// Achievement Section
// IMPORTANT : AchievementCard.js utilise cardInfo.footer.map()
// donc chaque carte doit obligatoirement avoir footer: []
const achievementSection = {
  title: emoji("Compétences & réalisations 💻"),

  subtitle:
    "Quelques domaines dans lesquels j'interviens en tant qu'intégrateur web senior.",

  achievementsCards: [
    {
      title: "Intégration Web",
      description:
        "Intégration de maquettes graphiques, responsive design, animations et interfaces modernes.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Intégration Web",
      footer: []
    },

    {
      title: "E-commerce",
      description:
        "Création, personnalisation et maintenance de boutiques Shopify, Magento et WooCommerce.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "E-commerce",
      footer: []
    },

    {
      title: "Frontend Development",
      description:
        "Développement d'interfaces avec JavaScript, React et les technologies frontend modernes.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Frontend Development",
      footer: []
    }
  ],

  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",

  subtitle:
    "Articles et contenus techniques autour du développement web.",

  displayMediumBlogs: "false",

  blogs: [],

  display: false
};

// Talks Section
const talkSection = {
  title: "TALKS",

  subtitle: emoji(
    "Partage d'expérience et de connaissances autour du développement web."
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
  title: "Mon CV",

  subtitle:
    "Consultez mon parcours professionnel et mes compétences.",

  display: true
};

// Contact
const contactInfo = {
  title: emoji("Contactez-moi ☎️"),

  subtitle:
    "Vous avez un projet web, e-commerce ou une mission d'intégration ? Contactez-moi.",

  number: "",
  email_address: ""
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