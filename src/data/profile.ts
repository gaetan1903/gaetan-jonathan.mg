// Données professionnelles de Gaëtan Jonathan
// Basées sur le profil LinkedIn

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  avatar: string;
  links: {
    linkedin: string;
    github: string;
    website?: string;
    twitter?: string;
  };
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  type: 'CDI' | 'CDD' | 'Stage' | 'Freelance' | 'Indépendant';
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  teamSize?: string;
  projects?: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  location: string;
  description?: string;
  honors?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  position?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools' | 'Soft Skills';
}

export interface CommunityActivity {
  id: string;
  role: string;
  organization: string;
  period: string;
  category: 'Bénévolat' | 'Mentorat' | 'Organisation' | 'Formation' | 'Leadership';
  location?: string;
  description: string;
  impact?: string[];
  participants?: number;
  logo?: string;
}

export interface CommunityEvent {
  id: string;
  name: string;
  role: string;
  date: string;
  organization: string;
  description: string;
  impact: string;
  participants?: number;
  technologies?: string[];
}

// Informations personnelles
export const personalInfo: PersonalInfo = {
  name: "Gaëtan Jonathan",
  title: "Head of Development Hub Center | DevOps & Product Manager",
  email: "contact@gaetan-jonathan.mg",
  location: "Fianarantsoa, Madagascar",
  bio: "Passionné de technologie, du développement à l'automatisation. Expertise polyvalente en optimisation des systèmes, développement et gestion de produits numériques. Maîtrise de Python, Linux et expérience en DevOps. Engagement fort envers la collaboration, le leadership et l'apprentissage continu pour créer des résultats exceptionnels.",
  avatar: "/images/gaetan-profile.jpg",
  links: {
    linkedin: "https://mg.linkedin.com/in/gaetanj",
    github: "https://github.com/gaetan1903",
    website: "https://gaetan-jonathan.mg"
  }
};

// Expériences professionnelles
export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Head of Development Hub Center",
    company: "AccèsBanque Madagascar",
    period: "Nov 2023 - Présent",
    type: "CDI",
    location: "Fianarantsoa, Haute Matsiatra, Madagascar (Sur site)",
    description: "Pilotage et coordination de projets digitaux internes à la banque, de la conception au déploiement, en alignement avec la stratégie globale.",
    achievements: [
      "Supervision de 20 équipes et gestion de 14 projets stratégiques internes (achevés ou en cours)",
      "Encadrement de plus de 20 équipes composées de développeurs, testeurs et business analysts",
      "Promotion des méthodes Agile et pratiques DevOps (CI/CD, conteneurisation, automatisation)",
      "Mentorat technique des équipes et recrutement des alternants développeurs",
      "Contrôle qualité des livrables et évaluation de la faisabilité technique"
    ],
    technologies: ["DevOps", "CI/CD", "Agile", "Python", "Linux"],
    teamSize: "20 équipes",
    projects: ["14 projets stratégiques internes"]
  },
  {
    id: "exp-2",
    title: "Digital Product Manager",
    company: "RELIA",
    period: "Mai 2023 - Oct 2023",
    type: "CDI",
    location: "Hybride",
    description: "Mise en œuvre de la stratégie globale du produit numérique, alignée sur la vision de l'entreprise et les besoins des utilisateurs.",
    achievements: [
      "Pilotage du cycle de vie complet des produits numériques (idéation, analyse de marché, conception)",
      "Direction d'équipe multidisciplinaire (développeurs, concepteurs, parties prenantes)",
      "Mise en œuvre de méthodologies Agile (planification, estimation)",
      "Élaboration de business model et prévisions financières"
    ],
    technologies: ["Product Management", "Agile", "Business Analysis"],
    teamSize: "Équipe multidisciplinaire"
  },
  {
    id: "exp-3",
    title: "DevOps Team Lead",
    company: "RELIA",
    period: "Mars 2023 - Oct 2023",
    type: "CDI",
    location: "Hybride",
    description: "Direction d'équipe dédiée à l'intégration continue, au déploiement continu et à l'automatisation des processus de développement.",
    achievements: [
      "Coordination efficace de la distribution des tâches au sein de l'équipe",
      "Supervision et gestion des serveurs",
      "Gestion des comptes d'administration",
      "Automatisation des processus de développement"
    ],
    technologies: ["CI/CD", "DevOps", "Linux", "Automatisation"],
    teamSize: "Équipe DevOps"
  },
  {
    id: "exp-5",
    title: "Manager & Développeur",
    company: "ITS SARLU",
    period: "Juin 2022 - Déc 2022",
    type: "CDI",
    location: "Madagascar",
    description: "Étude, Développement & Pilotage des équipes avec une approche Agile & DevOps.",
    achievements: [
      "Étude et développement de solutions web",
      "Pilotage des équipes de développement",
      "Application de l'approche Agile & DevOps",
      "Mise en place de pipelines CI/CD avec Github Actions"
    ],
    technologies: ["Django (Python)", "Playwright", "VueJS", "Docker", "Linux", "Github Action"],
    teamSize: "Équipe de développement",
    projects: ["Développement d'applications web"]
  },
  {
    id: "exp-6",
    title: "Développeur Exploitation",
    company: "Comdata Group",
    period: "Mai 2020 - Fév 2023",
    type: "CDI",
    location: "Madagascar",
    description: "Traitement des tickets, développement d'outils et optimisation des processus de production.",
    achievements: [
      "Traitement tickets sur l'évolution ou dysfonctionnement des outils",
      "Étude, recherche et développement de nouveaux outils",
      "Maintien du bon fonctionnement de la production",
      "Optimisation et automatisation des processus",
      "Réalisation de reportings"
    ],
    technologies: ["MySQL", "PHP", "Python", "JavaScript", "Linux"],
    projects: ["Outils de production", "Automatisation"]
  },
  {
    id: "exp-7",
    title: "Consultant Développeur QA",
    company: "Bailti",
    period: "Nov 2020 - Mars 2021",
    type: "CDI",
    location: "Remote",
    description: "Tests end-to-end, automatisation de tâches et web scraping.",
    achievements: [
      "Test End to End",
      "Automatisation de tâches",
      "Web Scraping"
    ],
    technologies: ["Python"],
    projects: ["Tests automatisés", "Scripts d'automatisation"]
  },
  {
    id: "exp-8",
    title: "Stagiaire",
    company: "Passion 4 Humanity",
    period: "Mai 2018 - Juil 2018",
    type: "Stage",
    location: "Antananarivo",
    description: "Stage d'imprégnation pour connaître le monde des Startup.",
    achievements: [
      "Découverte de l'écosystème startup",
      "Participation aux projets de l'organisation"
    ],
    technologies: [],
    projects: []
  }
];

// Formation
export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Master II - Management des Systèmes d'Information",
    school: "École Supérieure des Technologies de l'Information (ESTI)",
    period: "2022 - 2023",
    location: "Antanimena, Antananarivo, Madagascar",
    description: "Science d'Ingénierie - Spécialisation en Management des Systèmes d'Information",
    honors: "Master II"
  },
  {
    id: "edu-1b",
    degree: "Master I",
    school: "École Supérieure des Technologies de l'Information (ESTI)",
    period: "2022",
    location: "Antanimena, Antananarivo, Madagascar",
    description: "Président du Bureau des étudiants (BDE) en 2022 | Factorial Advisor à GDSC ESTI en 2022",
    honors: "Master I"
  },
  {
    id: "edu-2",
    degree: "Licence Professionnelle - Réseaux et Systèmes d'Informations",
    school: "École Supérieure des Technologies de l'Information (ESTI)",
    period: "2019 - 2021",
    location: "Antanimena, Antananarivo, Madagascar",
    description: "Formation en réseaux, systèmes d'information et développement",
    honors: "Major de promotion FANDRESENA"
  },
  {
    id: "edu-3",
    degree: "Année préparatoire - Programme SESAME",
    school: "Programme SESAME",
    period: "2018",
    location: "Madagascar",
    description: "Orientation professionnelle | Responsabilité et autonomie"
  },
  {
    id: "edu-4",
    degree: "Baccalauréat série C",
    school: "Lycée Stella Maris",
    period: "2017",
    location: "Madagascar",
    honors: "Mention Assez-bien"
  }
];

// Certifications et Formation Continue
export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Lean Management Yellow Belt",
    issuer: "ACPE inc",
    date: "Juillet 2024"
  },
  {
    id: "cert-3",
    name: "Certificat GRH: Recruter et Manager",
    issuer: "KENTIA-FORMATION sarl",
    date: "Janvier 2022",
    credentialId: "4982"
  },
  {
    id: "cert-5",
    name: "Diplôme de Participation - Personne de valeur qui ajoute de la valeur aux autres",
    issuer: "John Maxwell Team",
    date: "Septembre 2021"
  }
];

// Prix et distinctions
export const awards: Award[] = [
  {
    id: "award-1",
    title: "Hackathon for legal literacy",
    issuer: "Alliance Voahary Gasy",
    date: "Décembre 2022",
    description: "24 heures pour concevoir une application Android ou un logiciel selon les consignes et thème posés"
  },
  {
    id: "award-2",
    title: "Hackathon Inter-universitaire (HIU 2022)",
    issuer: "TechZara",
    date: "Avril 2022",
    description: "21 équipes, 11 universités, 91 participants",
    position: "🥈 2ème place"
  },
  {
    id: "award-3",
    title: "Meilleure réalisation de projets professionnels",
    issuer: "Bureau d'orientation et d'emploi - Programme SESAME",
    date: "Décembre 2021",
    description: "Reconnaissance pour l'excellence dans la réalisation de projets professionnels"
  },
  {
    id: "award-4",
    title: "DevFest 2021 Hackathon",
    issuer: "Google Developer Groups Antananarivo",
    date: "Octobre 2021",
    description: "Hackathon de 48 heures sur le thème de l'e-gouvernance",
    position: "🥉 3ème place"
  },
  {
    id: "award-5",
    title: "Hackathon Gouvernance Communautaire",
    issuer: "Malagasy Youth Biodiversity Network",
    date: "Septembre 2021",
    description: "Concours de création bibliothèque numérique sur la gouvernance communautaire",
    position: "🥇 1ère place"
  },
  {
    id: "award-6",
    title: "Prix Orange de l'Entrepreneuriat Social (POESAM 2021)",
    issuer: "Orange Madagascar",
    date: "Septembre 2021",
    description: "Prix Orange de l'Entrepreneuriat Social",
    position: "🥈 2ème place"
  },
  {
    id: "award-7",
    title: "Hackoragna",
    issuer: "Orange Madagascar",
    date: "Avril 2020",
    description: "Hackathon pour apporter une solution digitale durant la période Covid-19",
    position: "🥉 3ème place"
  },
  {
    id: "award-8",
    title: "Piscine Python 2018",
    issuer: "ESTI & ITESCIA Paris",
    date: "Mai 2019",
    description: "Projet digital réalisé en 3 jours avec simulation de vente devant jury",
    position: "🥇 1ère place"
  }
];

// Compétences techniques
export const skills: Skill[] = [
  // Backend & Languages
  { name: "Python", level: 95, category: "Backend" },
  { name: "PHP", level: 80, category: "Backend" },
  { name: "JavaScript", level: 85, category: "Backend" },
  
  // DevOps & Infrastructure
  { name: "Linux", level: 95, category: "DevOps" },
  { name: "CI/CD", level: 90, category: "DevOps" },
  { name: "Docker", level: 85, category: "DevOps" },
  { name: "Kubernetes", level: 75, category: "DevOps" },
  { name: "Server Management", level: 90, category: "DevOps" },
  
  // Database
  { name: "MySQL", level: 85, category: "Database" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  
  // Mobile
  { name: "Android", level: 75, category: "Frontend" },
  
  // Tools & Methods
  { name: "Agile", level: 90, category: "Tools" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Product Management", level: 85, category: "Tools" },
  
  // Soft Skills
  { name: "Leadership", level: 95, category: "Soft Skills" },
  { name: "Travail d'équipe", level: 95, category: "Soft Skills" },
  { name: "Management", level: 90, category: "Soft Skills" },
  { name: "Mentorat", level: 90, category: "Soft Skills" },
  { name: "Communication", level: 90, category: "Soft Skills" },
  { name: "Adaptatif", level: 95, category: "Soft Skills" },
  { name: "Audacieux", level: 90, category: "Soft Skills" },
  { name: "Persévérant", level: 95, category: "Soft Skills" },
  { name: "Autonome", level: 95, category: "Soft Skills" },
  { name: "Capacité d'apprentissage", level: 95, category: "Soft Skills" },
  { name: "Sens du collectif et du partage", level: 95, category: "Soft Skills" }
];

// Bénévolat / Engagement communautaire
export const volunteer = [
  {
    id: "vol-1",
    role: "Factorial Advisor",
    organization: "GDSC ESTI (GDG on Campus ESTI)",
    period: "Sept 2022 - Oct 2023",
    description: "Conseiller principal sur la planification des différentes activités, organisation d'ateliers tech sur les technologies Google et Opensource, partenariat avec les entreprises"
  },
  {
    id: "vol-2",
    role: "Organisateur volontaire",
    organization: "DevFest Antananarivo 2022",
    period: "Oct 2022 - Nov 2022",
    description: "Organisation du DevFest 2022 avec GDG Antananarivo, GDSC ESTI, MLC et autres volontaires"
  },
  {
    id: "vol-3",
    role: "Mentor 2021",
    organization: "Django Girls TNR",
    period: "Déc 2021",
    description: "Coach de 4 jeunes femmes pendant l'atelier pour explorer le monde de la programmation"
  },
  {
    id: "vol-4",
    role: "Formateur",
    organization: "Centre Social Anosizato",
    period: "Jan 2019 - Juil 2019",
    description: "Formation en informatique pour professeurs, éducateurs et élèves du centre social"
  },
  {
    id: "vol-5",
    role: "Responsable organisation",
    organization: "Why Not Linux ?",
    period: "2019-2020",
    description: "Organisation des événements WHY NOT LINUX 1.0 (Antananarivo) et 2.0 (Antananarivo et Fianarantsoa)"
  }
];

// Activités communautaires et bénévolat (version détaillée)
// Triées par ordre chronologique décroissant (plus récent en premier)
export const communityActivities: CommunityActivity[] = [
  {
    id: "comm-6",
    role: "Responsable organisation",
    organization: "Why Not Linux ?",
    period: "2023-2024",
    category: "Organisation",
    location: "Antananarivo & Fianarantsoa",
    description: "Organisation des événements Why Not Linux 1.0 (2023) et 2.0 (2024) dans deux villes différentes avec plusieurs communautés tech.",
    impact: [
      "Promotion de l'Open Source et Linux à Madagascar",
      "2 éditions annuelles dans 2 villes différentes",
      "Collaboration inter-communautés",
      "Introduction au monde Linux pour débutants"
    ],
    participants: 150
  },
  {
    id: "comm-2",
    role: "Factoral Advisor",
    organization: "GDSC ESTI (Google Developer Student Clubs)",
    period: "Sept 2022 - Oct 2023",
    category: "Mentorat",
    location: "Madagascar",
    description: "Conseiller principal sur la planification des activités tech et partenariats entreprises.",
    impact: [
      "Organisation d'ateliers tech sur les technologies Google et Open Source",
      "Partenariat avec les entreprises locales",
      "Mentorat des étudiants développeurs",
      "Promotion des bonnes pratiques de développement"
    ],
    participants: 100
  },
  {
    id: "comm-7",
    role: "Responsable de projet",
    organization: "iTeam-$ Community",
    period: "Nov 2022 - Févr 2023",
    category: "Leadership",
    location: "Madagascar",
    description: "Concrétisation des idées de projets internes de la communauté.",
    impact: [
      "Gestion de 5+ projets internes",
      "Méthodologie Agile appliquée",
      "Formation pratique des membres",
      "Création de solutions numériques concrètes"
    ]
  },
  {
    id: "comm-4",
    role: "Organisateur Volontaire",
    organization: "DevFest Antananarivo 2022",
    period: "Oct 2022 - Nov 2022",
    category: "Organisation",
    location: "Antananarivo, Madagascar",
    description: "Organisation du DevFest 2022 avec GDG Antananarivo, GDSC ESTI, MLC et autres volontaires.",
    impact: [
      "Plus grand événement tech de Madagascar",
      "Coordination logistique et technique",
      "Gestion des sponsors et partenaires",
      "Animation d'ateliers techniques"
    ],
    participants: 300
  },
  {
    id: "comm-3",
    role: "Mentor",
    organization: "Django Girls TNR",
    period: "Déc 2021",
    category: "Mentorat",
    location: "Antananarivo, Madagascar",
    description: "Coach de 4 jeunes femmes pendant l'atelier Django Girls pour explorer le monde de la programmation.",
    impact: [
      "Initiation à Python et Django pour 4 étudiantes",
      "Promotion de la diversité dans la tech",
      "Création de projets web fonctionnels en 1 jour",
      "Inspiration pour continuer dans le développement"
    ],
    participants: 4
  },
  {
    id: "comm-1",
    role: "Head of Community",
    organization: "iTeam-$ Community",
    period: "Nov 2020 - Oct 2022",
    category: "Leadership",
    location: "Antananarivo, Madagascar",
    description: "Leadership d'une communauté IT de jeunes motivés réalisant des projets numériques et prestations.",
    impact: [
      "Formation et accompagnement des membres",
      "Planification des stratégies globales de la communauté",
      "Recherche & Développement",
      "Mise en place & configuration serveur de production",
      "Gestion de projets internes et prestations externes"
    ],
    participants: 50
  },
  {
    id: "comm-5",
    role: "Formateur Bénévole",
    organization: "Centre Social Anosizato",
    period: "Jan 2019 - Juil 2019",
    category: "Formation",
    location: "Anosizato, Antananarivo",
    description: "Formation en informatique pour professeurs éducateurs et élèves du centre social.",
    impact: [
      "Formation de 30+ personnes aux bases de l'informatique",
      "Cours sur Windows, Internet, Office",
      "Sensibilisation à l'utilisation quotidienne de l'informatique",
      "Impact social positif dans la communauté"
    ],
    participants: 30
  }
];

// Événements et Hackathons
export const communityEvents: CommunityEvent[] = [
  {
    id: "event-1",
    name: "DevFest 2021 Hackathon",
    role: "Participant - 3ème place 🥉",
    date: "Oct 2021",
    organization: "Google Developer Groups Antananarivo",
    description: "Hackathon de 48 heures sur le thème e-gouvernance/gouvernance digitale",
    impact: "Solution digitale pour améliorer la gouvernance à Madagascar",
    participants: 50,
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: "event-2",
    name: "Hackathon Inter-universitaire (HIU) 2022",
    role: "Participant - 2ème place 🥈",
    date: "Avr 2022",
    organization: "TechZara",
    description: "21 équipes, 11 universités, 91 participants - Compétition inter-universitaire majeure",
    impact: "Reconnaissance inter-universitaire et networking avec autres universités",
    participants: 91,
    technologies: ["Full Stack Development"]
  },
  {
    id: "event-3",
    name: "Hackathon for Legal Literacy",
    role: "Participant - Lauréat",
    date: "Déc 2022",
    organization: "Alliance Voahary Gasy",
    description: "24 heures pour concevoir une application Android ou logiciel selon thème juridique",
    impact: "Solution pour améliorer l'accès à l'information juridique",
    participants: 30,
    technologies: ["Android", "Java"]
  },
  {
    id: "event-4",
    name: "POESAM 2021",
    role: "Participant - 2ème place 🥈",
    date: "Sept 2021",
    organization: "Orange Madagascar",
    description: "Prix Orange de l'Entrepreneuriat Social à Madagascar",
    impact: "Projet à impact social reconnu par Orange Madagascar",
    participants: 40
  },
  {
    id: "event-5",
    name: "Hackathon Biodiversité",
    role: "Participant - 1ère place 🥇",
    date: "Sept 2021",
    organization: "Malagasy Youth Biodiversity Network",
    description: "Création bibliothèque numérique sur gouvernance communautaire des ressources naturelles",
    impact: "Préservation du patrimoine culturel et environnemental malgache",
    participants: 25,
    technologies: ["Web Development", "Database"]
  },
  {
    id: "event-6",
    name: "Hackoragna 2020",
    role: "Participant - 3ème place 🥉",
    date: "Avr 2020",
    organization: "Orange Madagascar",
    description: "Hackathon pour apporter une solution digitale durant la période Covid-19",
    impact: "Solution d'aide pendant la crise sanitaire",
    participants: 60,
    technologies: ["Web", "API"]
  },
  {
    id: "event-7",
    name: "Piscine Python 2018",
    role: "Participant - 1ère place 🥇",
    date: "Mai 2019",
    organization: "ESTI, ITESCIA Paris",
    description: "3 jours pour présenter et simuler la vente d'un projet digital devant jurys",
    impact: "Premier hackathon gagné - début du parcours compétitif",
    participants: 30,
    technologies: ["Python", "Django"]
  }
];

// Statistiques communautaires
export const communityStats = {
  yearsActive: "6+",
  eventsOrganized: "10+",
  hackathonsParticipated: "8",
  hackathonsWon: "5",
  peopleImpacted: "600+",
  mentored: "50+",
  communities: "5",
  workshops: "15+"
};

// Statistiques professionnelles
export const professionalStats = {
  yearsExperience: "6+",
  projectsCompleted: "40+",
  teamsManaged: "20",
  technologiesMastered: "15+",
  clientsSatisfied: "25+",
  openSourceContributions: "100+",
  hackathonsWon: "5",
  communityMembers: "200+"
};

export default {
  personalInfo,
  experiences,
  education,
  certifications,
  awards,
  skills,
  volunteer,
  communityActivities,
  communityEvents,
  communityStats,
  professionalStats
};