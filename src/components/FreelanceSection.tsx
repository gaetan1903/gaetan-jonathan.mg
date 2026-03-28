import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Briefcase, Calendar, Code, Award, Users, DollarSign, Star, ExternalLink } from "lucide-react";

export function FreelanceSection() {
  const projects = [
    {
      title: "EasySend Plateform",
      client: "StartupTech",
      period: "Mars 2026",
      description: "Plateforme de mise en relation avec des transporteurs certifiés, permettant d’expédier des colis au niveau national et international avec suivi en temps réel et paiements sécurisés.",
      technologies: ["Flutter", "React", "NestJS", "PostgreSQL", "Stripe Connect"],
      budget: "",
      duration: "4 mois",
      satisfaction: 5,
      results: [
        "Réseau de transporteurs certifiés",
        "Suivi des expéditions en temps réel",
        "Paiements sécurisés intégrés",
        "Web & mobile unifiés"
      ],
      links: [
        { label: "https://myeasysend.com", url: "https://myeasysend.com/" },
      ]
    },
    {
      title: "Plateforme Tambatra",
      client: "IECD Madagascar",
      period: "Novembre 2025",
      description: "Plateforme de mise en relation entre candidats, établissements et recruteurs, intégrant un dashboard avancé pour le pilotage des données et des opportunités à l’échelle nationale.",
      technologies: ["React", "NestJS", "PostgreSQL", "Map Visualization", "Data Analytics"],
      budget: "",
      duration: "",
      satisfaction: 4.5,
      results: [
        "Gestion multi-rôles (admin, etablissements, recruteurs, candidats)",
        "Mise en relation candidats–entreprises",
        "Centralisation des opportunités",
        "Dashboard avancé pour le pilotage des données",
        "Plateforme scalable"
      ],
      links: [
        { label: "https://talent-tambatra.com", url: "https://talent-tambatra.com/" }
      ]
    },
    {
      title: "ALOE – Accès aux Lois Environnementales",
      client: "Alliance Voahary Gasy",
      period: "",
      description: "Application permettant d’accéder facilement aux lois environnementales et aux textes liés à la lutte contre la corruption, conçue pour les acteurs de terrain avec un accès en ligne et hors ligne.",
      technologies: ["Flutter", "Django Rest Framework"],
      budget: "",
      duration: "3 mois",
      satisfaction: 5,
      results: [
        "Accès centralisé aux textes juridiques",
        "Fonctionnement online & offline",
        "Utilisable sur le terrain",
        "Support des acteurs juridiques"
      ],
      links: [{ label: "Manuel ALOE", url: "https://drive.google.com/file/d/1iCvYO0EdvngMakIIdArM_NFsj07ww_7G/view?usp=sharing" }]
    },
    {
      title: "Site Vitrine Agora Consulting",
      client: "Agora Consulting",
      period: "2025",
      description: "Site vitrine corporate conçu pour valoriser l’expertise d’un cabinet de conseil en RH, en mettant en avant ses services, ses références et sa crédibilité auprès d’acteurs institutionnels et privés.",
      technologies: ["React", "Vite", "Tailwind"],
      budget: "",
      duration: "2 jours",
      satisfaction: 5,
      results: ["Image de marque renforcée",
        "Présentation claire des services",
        "Site rapide et responsive"],
      links: [
        { label: "https://agora-consulting.mg", url: "https://agora-consulting.mg/" }
      ]
    }
  ];

  const services = [
    {
      title: "Développement Web Full-Stack",
      description: "Applications web complètes avec frontend moderne et backend robuste",
      price: "Tarif basé sur TJM",
      duration: "2-6 mois",
      includes: ["Design responsive", "API REST", "Base de données", "Déploiement", "Support 3 mois"]
    },
    {
      title: "Applications Mobiles",
      description: "Apps natives ou hybrides pour iOS et Android",
      price: "Tarif basé sur TJM",
      duration: "3-8 mois",
      includes: ["Design UI/UX", "Backend API", "Push notifications", "App Store", "Logiciel de gestion", "Support 6 mois"]
    },
    {
      title: "Responsable serveurs de production",
      description: "Gestion, supervision et sécurisation de vos serveurs de production (Linux, Docker, cloud, monitoring, sauvegardes)",
      price: "Tarif basé sur TJM",
      duration: "Mission récurrente ou ponctuelle",
      includes: ["Mise en place CI/CD", "Surveillance 24/7", "Automatisation sauvegardes", "Sécurité & mises à jour", "Support prioritaire"]
    },
    {
      title: "Consulting & Audit",
      description: "Audit technique, optimisation performance, conseil architecture",
      price: "Tarif basé sur TJM",
      duration: "1-4 semaines",
      includes: ["Audit complet", "Recommandations", "Plan d'action", "Formation équipe", "Suivi"]
    }
  ];

  const stats = [
    { label: "Projets réalisés", value: "20+", icon: Briefcase },
    { label: "Clients satisfaits", value: "15+", icon: Users },
    { label: "Taux de satisfaction", value: "98%", icon: Star },
    { label: "Serveurs de production gérés", value: "5+", icon: Code }
  ];

  const technologies = [
    { name: "TypeScript / Node.js (NestJS)", level: 90 },
    { name: "Python / Django / FastAPI", level: 90 },
    { name: "React", level: 88 },
    { name: "Flutter (Mobile, Desktop)", level: 85 },
    { name: "Base de données (PostgreSQL, MySQL, MSSQL)", level: 88 },
    { name: "Testing (Playwright, Locust)", level: 87 },
    { name: "Architecture & Scalability", level: 92 },
    { name: "DevOps & Automation", level: 90 }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-teal-900/10 to-blue-900/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Projets Récents */}
          <div>
            <h2 className="mb-8 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-400" />
              Projets Récents
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-white">{project.title}</CardTitle>
                        <CardDescription className="text-green-300">Client: {project.client}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="bg-white/5 border-white/20 text-gray-300 mb-1">
                          {project.budget}
                        </Badge>
                        <div className="text-sm text-gray-400">{project.duration}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-white/5 border-white/20 text-gray-300 w-fit">
                      {project.period}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} className="bg-green-500/20 text-green-300 border-green-500/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4">
                      {project.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-green-400" />
                          <span className="text-sm text-gray-400">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < project.satisfaction ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                          />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">({project.satisfaction}/5)</span>
                      </div>
                      {project.links && project.links.length > 0 && (
                        <div className="flex flex-col gap-1 text-right">
                          {project.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-green-400 hover:text-white text-sm"
                            >
                              {link.label}
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Services & Technologies */}
          <div className="space-y-8">
            {/* Services */}
            <div>
              <h2 className="mb-6 flex items-center gap-2">
                <Code className="h-5 w-5 text-green-400" />
                Services Proposés
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-white">{service.title}</h3>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          {service.price}
                        </Badge>
                      </div>
                      <p className="text-gray-400 mb-3">{service.description}</p>
                      <div className="text-sm text-gray-500 mb-3">Durée: {service.duration}</div>
                      <div className="space-y-1">
                        {service.includes.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-gray-400">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="mb-6 flex items-center gap-2">
                <Code className="h-5 w-5 text-green-400" />
                Stack Technique Freelance
              </h2>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="pt-6 space-y-4">
                  {technologies.map((tech, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{tech.name}</span>
                        <span className="text-green-400">{tech.level}%</span>
                      </div>
                      <Progress value={tech.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm border-green-500/30">
          <CardContent className="pt-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-white mb-4">Prêt à Démarrer Votre Projet ?</h2>
              <p className="text-gray-300 mb-6">
                Discutons de vos besoins et créons ensemble une solution sur mesure
                qui dépasse vos attentes. Devis gratuit sous 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:gaetan.bakary@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    Demander un Devis Gratuit
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}