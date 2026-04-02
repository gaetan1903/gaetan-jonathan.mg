// English version of profile data for Gaetan Jonathan BAKARY
// Same structure and IDs as profile.ts (French), all content translated

import type {
    PersonalInfo,
    Experience,
    Education,
    Certification,
    Award,
    Skill,
    CommunityActivity,
    CommunityEvent,
} from "./profile";

export const personalInfo: PersonalInfo = {
    name: "Gaetan Jonathan BAKARY",
    title: "Head of Development Hub Center | DevOps & Product Manager",
    email: "gaetan.s118@gmail.com",
    location: "Fianarantsoa, Madagascar",
    bio: "IT professional passionate about digital transformation and operational excellence. I juggle technical project management, innovative solution development and guiding teams toward success. Beyond code, I believe in the power of community and knowledge sharing. My journey? A unique blend of challenges met, teams inspired and projects that make a difference.",
    avatar: "/images/gaetan-profile.jpg",
    links: {
        linkedin: "https://mg.linkedin.com/in/gaetanj",
        github: "https://github.com/gaetan1903",
        website: "https://gaetan-jonathan.mg",
    },
};

export const experiences: Experience[] = [
    {
        id: "exp-1",
        title: "Head of Development Hub Center",
        company: "AccèsBanque Madagascar",
        period: "Nov 2023 - Present",
        type: "CDI",
        location: "Fianarantsoa, Haute Matsiatra, Madagascar (On-site)",
        description:
            "Management and coordination of the bank's internal digital projects, from design to deployment, aligned with the overall strategy.",
        achievements: [
            "Supervision of 20+ team members including developers, testers and business analysts",
            "Promotion of Agile methods and DevOps practices (CI/CD, containerization, automation)",
            "Technical mentoring of teams and recruitment of developer interns",
            "Quality control of deliverables and technical feasibility assessment",
            "Ad-hoc intervention on technical issues (unblocking, development assistance and code review)",
            "Supporting teams on complex issues to accelerate delivery and ensure quality",
            "Active contribution to code and architectural decisions to ensure technical leadership by example",
        ],
        technologies: [
            "CI/CD",
            "Agile/SCRUM",
            "Python",
            "TypeScript",
            "Linux",
            "Leadership by example",
        ],
        teamSize: "20 team members",
        projects: ["14 internal strategic projects"],
    },
    {
        id: "exp-2",
        title: "Digital Product Manager & DevOps Team Lead",
        company: "RELIA",
        period: "Mar 2023 - Oct 2023",
        type: "CDI",
        location: "Hybrid",
        description:
            "Product strategy and DevOps operations management, from ideation to production, aligned with business and technical objectives.",
        achievements: [
            "Product lifecycle management (ideation, analysis, design, delivery)",
            "Coordination of multidisciplinary teams (developers, designers, stakeholders)",
            "Implementation of Agile practices (planning, estimation, tracking)",
            "Business model definition and financial projections",
            "DevOps activities management (CI/CD, automation, deployment)",
            "Infrastructure supervision (servers, access, administration)",
        ],
        technologies: [
            "Product Management",
            "Agile",
            "DevOps",
            "CI/CD",
            "Linux",
            "Automation",
        ],
        teamSize: "Multidisciplinary team",
    },
    {
        id: "exp-5",
        title: "Manager & Developer",
        company: "ITS SARLU",
        period: "Jun 2022 - Dec 2022",
        type: "Indépendant",
        location: "Madagascar",
        description:
            "Study, Development & Team management with an Agile & DevOps approach.",
        achievements: [
            "Study and development of an EduTech application dedicated to learning and pedagogical monitoring",
            "Implementation of Agile & DevOps practices and CI/CD pipelines with GitHub Actions",
        ],
        technologies: [
            "Django (Python)",
            "Playwright",
            "VueJS",
            "Docker",
            "Linux",
            "Github Action",
        ],
        teamSize: "Development team",
        projects: ["Web application development"],
    },
    {
        id: "exp-6",
        title: "Operations Developer",
        company: "Comdata Group",
        period: "May 2020 - Feb 2023",
        type: "CDI",
        location: "Madagascar",
        description:
            "Ticket processing, tool development and production process optimization.",
        achievements: [
            "Processing tickets related to evolutions and tool malfunctions, with analysis and resolution",
            "Study, research and development of new tools adapted to business needs",
            "Maintaining production operational conditions and continuous performance improvement",
            "Process optimization and automation, with reporting implementation",
        ],
        technologies: ["MySQL", "PHP", "Python", "JavaScript", "Linux"],
        projects: ["Production tools", "Automation"],
    },
    {
        id: "exp-7",
        title: "QA Developer Consultant",
        company: "Bailti",
        period: "Nov 2020 - Mar 2021",
        type: "Indépendant",
        location: "Remote",
        description: "End-to-end testing, task automation and web scraping.",
        achievements: [
            "End-to-End Testing",
            "Task Automation",
            "Web Scraping",
        ],
        technologies: ["Python"],
        projects: ["Automated testing", "Automation scripts"],
    },
    {
        id: "exp-8",
        title: "Intern",
        company: "Passion 4 Humanity",
        period: "May 2018 - Jul 2018",
        type: "Stage",
        location: "Antananarivo",
        description: "Immersion internship to discover the startup world.",
        achievements: [
            "Discovery of the startup ecosystem",
            "Participation in the organization's projects",
        ],
        technologies: [],
        projects: [],
    },
];

export const education: Education[] = [
    {
        id: "edu-1",
        degree: "Master II - Information Systems Management",
        school: "École Supérieure des Technologies de l'Information (ESTI)",
        period: "2022 - 2023",
        location: "Antanimena, Antananarivo, Madagascar",
        description:
            "Engineering Science - Specialization in Information Systems Management",
        honors: "Master II",
    },
    {
        id: "edu-1b",
        degree: "Master I",
        school: "École Supérieure des Technologies de l'Information (ESTI)",
        period: "2022",
        location: "Antanimena, Antananarivo, Madagascar",
        description:
            "Student Council President (BDE) in 2022 | Factorial Advisor at GDSC ESTI in 2022",
        honors: "Master I",
    },
    {
        id: "edu-2",
        degree: "Professional Bachelor's - Networks and Information Systems",
        school: "École Supérieure des Technologies de l'Information (ESTI)",
        period: "2019 - 2021",
        location: "Antanimena, Antananarivo, Madagascar",
        description: "Training in networks, information systems and development",
        honors: "Valedictorian - FANDRESENA promotion",
    },
    {
        id: "edu-3",
        degree: "Preparatory Year - SESAME Program",
        school: "SESAME Program",
        period: "2018",
        location: "Madagascar",
        description: "Career guidance | Responsibility and autonomy",
    },
    {
        id: "edu-4",
        degree: "High School Diploma (Baccalauréat) - Science Track",
        school: "Lycée Stella Maris",
        period: "2017",
        location: "Madagascar",
        honors: "With Honors",
    },
];

export const certifications: Certification[] = [
    {
        id: "cert-1",
        name: "Lean Management Yellow Belt",
        issuer: "ACPE inc",
        date: "July 2024",
    },
    {
        id: "cert-3",
        name: "HRM Certificate: Recruiting and Managing",
        issuer: "KENTIA-FORMATION sarl",
        date: "January 2022",
        credentialId: "4982",
    },
    {
        id: "cert-5",
        name: "Participation Diploma - Person of Value Who Adds Value to Others",
        issuer: "John Maxwell Team",
        date: "September 2021",
    },
];

export const awards: Award[] = [
    {
        id: "award-1",
        title: "Hackathon for Legal Literacy",
        issuer: "Alliance Voahary Gasy",
        date: "December 2022",
        description:
            "24 hours to design an Android application or software according to the given instructions and theme",
    },
    {
        id: "award-2",
        title: "Inter-University Hackathon (HIU 2022)",
        issuer: "TechZara",
        date: "April 2022",
        description: "21 teams, 11 universities, 91 participants",
        position: "🥈 2nd place",
    },
    {
        id: "award-3",
        title: "Best Professional Project Achievement",
        issuer: "Career & Employment Office - SESAME Program",
        date: "December 2021",
        description:
            "Recognition for excellence in professional project achievement",
    },
    {
        id: "award-4",
        title: "DevFest 2021 Hackathon",
        issuer: "Google Developer Groups Antananarivo",
        date: "October 2021",
        description: "48-hour hackathon on the theme of e-governance",
        position: "🥉 3rd place",
    },
    {
        id: "award-5",
        title: "Community Governance Hackathon",
        issuer: "Malagasy Youth Biodiversity Network",
        date: "September 2021",
        description:
            "Digital library creation competition on community governance",
        position: "🥇 1st place",
    },
    {
        id: "award-6",
        title: "Orange Social Entrepreneurship Award (POESAM 2021)",
        issuer: "Orange Madagascar",
        date: "September 2021",
        description: "Orange Social Entrepreneurship Award",
        position: "🥈 2nd place",
    },
    {
        id: "award-7",
        title: "Hackoragna",
        issuer: "Orange Madagascar",
        date: "April 2020",
        description:
            "Hackathon to provide a digital solution during the Covid-19 period",
        position: "🥉 3rd place",
    },
    {
        id: "award-8",
        title: "Python Piscine 2018",
        issuer: "ESTI & ITESCIA Paris",
        date: "May 2019",
        description:
            "Digital project completed in 3 days with sales simulation before a jury",
        position: "🥇 1st place",
    },
];

export const skills: Skill[] = [
    // Backend & Languages
    { name: "Python", level: 90, category: "Backend" },
    { name: "PHP", level: 65, category: "Backend" },
    { name: "JavaScript", level: 85, category: "Backend" },
    { name: "TypeScript", level: 90, category: "Backend" },

    // DevOps & Infrastructure
    { name: "Linux", level: 95, category: "DevOps" },
    { name: "CI/CD", level: 90, category: "DevOps" },
    { name: "Docker", level: 90, category: "DevOps" },
    { name: "Server Management", level: 90, category: "DevOps" },

    // Database
    { name: "MySQL", level: 85, category: "Database" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "SQL Server", level: 75, category: "Database" },
    { name: "MongoDB", level: 70, category: "Database" },
    { name: "Redis", level: 70, category: "Database" },

    // Mobile
    { name: "Flutter", level: 80, category: "Frontend" },

    // Tools & Methods
    { name: "Agile", level: 90, category: "Tools" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Product Management", level: 85, category: "Tools" },

    // Soft Skills
    { name: "Leader", level: 95, category: "Soft Skills" },
    { name: "Collaborative", level: 95, category: "Soft Skills" },
    { name: "Communicative", level: 90, category: "Soft Skills" },
    { name: "Adaptive", level: 95, category: "Soft Skills" },
    { name: "Bold", level: 90, category: "Soft Skills" },
    { name: "Perseverant", level: 95, category: "Soft Skills" },
    { name: "Self-driven", level: 95, category: "Soft Skills" },
    { name: "Lifelong Learner", level: 95, category: "Soft Skills" },
];

export const volunteer = [
    {
        id: "vol-1",
        role: "Factorial Advisor",
        organization: "GDSC ESTI (GDG on Campus ESTI)",
        period: "Sep 2022 - Oct 2023",
        description:
            "Lead advisor on activity planning, organizing tech workshops on Google and Open Source technologies, partnerships with companies",
    },
    {
        id: "vol-2",
        role: "Volunteer Organizer",
        organization: "DevFest Antananarivo 2022",
        period: "Oct 2022 - Nov 2022",
        description:
            "Organization of DevFest 2022 with GDG Antananarivo, GDSC ESTI, MLC and other volunteers",
    },
    {
        id: "vol-3",
        role: "Mentor 2021",
        organization: "Django Girls TNR",
        period: "Dec 2021",
        description:
            "Coached 4 young women during the workshop to explore the world of programming",
    },
    {
        id: "vol-4",
        role: "Trainer",
        organization: "Centre Social Anosizato",
        period: "Jan 2019 - Jul 2019",
        description:
            "IT training for teachers, educators and students at the social center",
    },
    {
        id: "vol-5",
        role: "Organization Lead",
        organization: "Why Not Linux ?",
        period: "2019-2020",
        description:
            "Organization of WHY NOT LINUX 1.0 (Antananarivo) and 2.0 (Antananarivo and Fianarantsoa) events",
    },
];

export const communityActivities: CommunityActivity[] = [
    {
        id: "comm-6",
        role: "Lead Organizer",
        organization: "Why Not Linux ?",
        period: "2023-2024",
        category: "Organisation",
        location: "Antananarivo & Fianarantsoa",
        description:
            "Organization of Why Not Linux 1.0 (2023) and 2.0 (2024) events in two different cities with multiple tech communities.",
        impact: [
            "Promotion of Open Source and Linux in Madagascar",
            "2 annual editions in 2 different cities",
            "Inter-community collaboration",
            "Introduction to Linux for beginners",
        ],
        participants: 350,
    },
    {
        id: "comm-2",
        role: "Factorial Advisor",
        organization: "GDSC ESTI (Google Developer Student Clubs)",
        period: "Sep 2022 - Oct 2023",
        category: "Mentorat",
        location: "Madagascar",
        description:
            "Lead advisor on tech activity planning and corporate partnerships.",
        impact: [
            "Organizing tech workshops on Google and Open Source technologies",
            "Partnerships with local companies",
            "Mentoring student developers",
            "Promoting development best practices",
        ],
        participants: 100,
    },
    {
        id: "comm-7",
        role: "Project Manager",
        organization: "iTeam-$ Community",
        period: "Nov 2022 - Feb 2023",
        category: "Leadership",
        location: "Madagascar",
        description:
            "Bringing community internal project ideas to fruition.",
        impact: [
            "Managing 5+ internal projects",
            "Applied Agile methodology",
            "Hands-on member training",
            "Creating concrete digital solutions",
        ],
    },
    {
        id: "comm-4",
        role: "Volunteer Organizer",
        organization: "DevFest Antananarivo 2022",
        period: "Oct 2022 - Nov 2022",
        category: "Organisation",
        location: "Antananarivo, Madagascar",
        description:
            "Organization of DevFest 2022 with GDG Antananarivo, GDSC ESTI, MLC and other volunteers.",
        impact: [
            "Madagascar's largest tech event",
            "Logistics and technical coordination",
            "Sponsor and partner management",
            "Technical workshop facilitation",
        ],
        participants: 200,
    },
    {
        id: "comm-3",
        role: "Mentor",
        organization: "Django Girls TNR",
        period: "Dec 2021",
        category: "Mentorat",
        location: "Antananarivo, Madagascar",
        description:
            "Coached 4 young women during the Django Girls workshop to explore the world of programming.",
        impact: [
            "Python and Django introduction for 4 students",
            "Promoting diversity in tech",
            "Creating functional web projects in 1 day",
            "Inspiring continued pursuit of development",
        ],
        participants: 4,
    },
    {
        id: "comm-1",
        role: "Head of Community",
        organization: "iTeam-$ Community",
        period: "Nov 2020 - Oct 2022",
        category: "Leadership",
        location: "Antananarivo, Madagascar",
        description:
            "Leading an IT community of motivated young people delivering digital projects and services.",
        impact: [
            "Training and supporting members",
            "Planning global community strategies",
            "Research & Development",
            "Production server setup & configuration",
            "Managing internal projects and external services",
        ],
        participants: 50,
    },
    {
        id: "comm-5",
        role: "Volunteer Trainer",
        organization: "Centre Social Anosizato",
        period: "Jan 2019 - Jul 2019",
        category: "Formation",
        location: "Anosizato, Antananarivo",
        description:
            "IT training for teachers, educators and students at the social center.",
        impact: [
            "Training 30+ people in basic computer skills",
            "Courses on Windows, Internet, Office",
            "Raising awareness of everyday computer use",
            "Positive social impact in the community",
        ],
        participants: 30,
    },
];

export const communityEvents: CommunityEvent[] = [
    {
        id: "event-8",
        name: "Live Coding Challenge – Orange Digital Center",
        role: "1st place 🥇 (Gold Category)",
        date: "2023",
        organization: "Orange Digital Center",
        description:
            "Live coding competition consisting of designing and developing a functional product in a few hours, live in front of an audience.",
        impact:
            "Demonstrated speed of execution, technical mastery and ability to deliver under pressure",
        participants: 18,
        technologies: ["Fullstack", "Problem Solving", "Rapid Prototyping"],
    },
    {
        id: "event-1",
        name: "DevFest 2021 Hackathon",
        role: "Participant - 3rd place 🥉",
        date: "Oct 2021",
        organization: "Google Developer Groups Antananarivo",
        description:
            "48-hour hackathon on the theme of e-governance/digital governance",
        impact:
            "Digital solution to improve governance in Madagascar",
        participants: 50,
        technologies: ["React", "Node.js", "MongoDB", "Flutter"],
    },
    {
        id: "event-2",
        name: "Inter-University Hackathon (HIU) 2022",
        role: "Participant - 2nd place 🥈",
        date: "Apr 2022",
        organization: "TechZara",
        description:
            "21 teams, 11 universities, 91 participants - Major inter-university competition",
        impact:
            "Inter-university recognition and networking with other universities",
        participants: 91,
        technologies: ["Full Stack Development"],
    },
    {
        id: "event-3",
        name: "Hackathon for Legal Literacy",
        role: "Participant - 1st place 🥇",
        date: "Dec 2022",
        organization: "Alliance Voahary Gasy",
        description:
            "24 hours to design an Android application or software on a legal theme",
        impact:
            "Solution to improve access to legal information",
        participants: 30,
        technologies: ["Android", "Flutter", "FastApi"],
    },
    {
        id: "event-4",
        name: "POESAM 2021",
        role: "Participant - 2nd place 🥈",
        date: "Sep 2021",
        organization: "Orange Madagascar",
        description: "Orange Social Entrepreneurship Award in Madagascar",
        impact:
            "Social impact project recognized by Orange Madagascar",
        participants: 40,
    },
    {
        id: "event-5",
        name: "Biodiversity Hackathon",
        role: "Participant - 1st place 🥇",
        date: "Sep 2021",
        organization: "Malagasy Youth Biodiversity Network",
        description:
            "Digital library creation on community governance of natural resources",
        impact:
            "Preservation of Malagasy cultural and environmental heritage",
        participants: 25,
        technologies: ["Web Development", "Database"],
    },
    {
        id: "event-6",
        name: "Hackoragna 2020",
        role: "Participant - 3rd place 🥉",
        date: "Apr 2020",
        organization: "Orange Madagascar",
        description:
            "Hackathon to provide a digital solution during the Covid-19 period",
        impact: "Aid solution during the health crisis",
        participants: 60,
        technologies: ["Web", "API"],
    },
    {
        id: "event-7",
        name: "Python Piscine 2018",
        role: "Participant - 1st place 🥇",
        date: "May 2019",
        organization: "ESTI, ITESCIA Paris",
        description:
            "3 days to present and simulate the sale of a digital project before judges",
        impact:
            "First hackathon won - start of the competitive journey",
        participants: 30,
        technologies: ["Python", "Arduino", "Raspberry Pi"],
    },
];

export const communityStats = {
    yearsActive: "6+",
    eventsOrganized: "10+",
    hackathonsParticipated: "8",
    hackathonsWon: "8",
    peopleImpacted: "600+",
    mentored: "50+",
    communities: "5",
    workshops: "15+",
};

export const professionalStats = {
    yearsExperience: "6+",
    projectsCompleted: "20+",
    teamsManaged: "20",
    technologiesMastered: "15+",
    clientsSatisfied: "25+",
    openSourceContributions: "100+",
    hackathonsWon: "5",
    communityMembers: "200+",
};
