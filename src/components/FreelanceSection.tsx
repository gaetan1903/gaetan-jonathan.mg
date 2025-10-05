import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Briefcase, Calendar, Code, Award, Users, DollarSign, Star, ExternalLink } from "lucide-react";

export function FreelanceSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      client: "StartupTech",
      period: "Mars 2024 - Mai 2024",
      description: "Développement complet d'une plateforme e-commerce avec React, Node.js et Stripe.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
      budget: "15k€",
      duration: "3 mois",
      satisfaction: 5,
      results: ["Augmentation des ventes de 40%", "Temps de chargement < 2s", "100% responsive design"]
    },
    {
      title: "Dashboard Analytics",
      client: "DataCorp",
      period: "Jan 2024 - Fév 2024",
      description: "Interface d'analyse de données en temps réel avec visualisations interactives.",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      budget: "8k€",
      duration: "2 mois",
      satisfaction: 5,
      results: ["Interface intuitive", "Traitement de 1M+ données", "Exports automatisés"]
    },
    {
      title: "Mobile App Backend",
      client: "MobileTech",
      period: "Oct 2023 - Déc 2023",
      description: "API REST complète pour application mobile avec authentification et notifications push.",
      technologies: ["Node.js", "Express", "JWT", "Firebase", "Redis"],
      budget: "12k€",
      duration: "3 mois",
      satisfaction: 4.5,
      results: ["API scalable", "Authentification sécurisée", "Push notifications"]
    },
    {
      title: "Site Vitrine Premium",
      client: "LuxuryBrand",
      period: "Août 2023 - Sep 2023",
      description: "Site web haut de gamme avec animations personnalisées et CMS intégré.",
      technologies: ["Next.js", "Framer Motion", "Sanity CMS", "Vercel"],
      budget: "6k€",
      duration: "1.5 mois",
      satisfaction: 5,
      results: ["Design primé", "Performance optimale", "SEO parfait"]
    }
  ];

  const services = [
    {
      title: "Développement Web Full-Stack",
      description: "Applications web complètes avec frontend moderne et backend robuste",
      price: "À partir de 5k€",
      duration: "2-6 mois",
      includes: ["Design responsive", "API REST", "Base de données", "Déploiement", "Support 3 mois"]
    },
    {
      title: "Applications Mobiles",
      description: "Apps natives ou hybrides pour iOS et Android",
      price: "À partir de 8k€",
      duration: "3-8 mois",
      includes: ["Design UI/UX", "Backend API", "Push notifications", "App Store", "Support 6 mois"]
    },
    {
      title: "Consulting & Audit",
      description: "Audit technique, optimisation performance, conseil architecture",
      price: "500€/jour",
      duration: "1-4 semaines",
      includes: ["Audit complet", "Recommandations", "Plan d'action", "Formation équipe", "Suivi"]
    }
  ];

  const stats = [
    { label: "Projets réalisés", value: "25+", icon: Briefcase },
    { label: "Clients satisfaits", value: "20+", icon: Users },
    { label: "Taux de satisfaction", value: "98%", icon: Star },
    { label: "Chiffre d'affaires", value: "150k€+", icon: DollarSign }
  ];

  const technologies = [
    { name: "React/Next.js", level: 95 },
    { name: "Node.js/Express", level: 90 },
    { name: "TypeScript", level: 92 },
    { name: "Python/FastAPI", level: 85 },
    { name: "Vue.js/Nuxt", level: 88 },
    { name: "Mobile (React Native)", level: 80 }
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
                      <Button variant="ghost" size="sm" className="text-green-400 hover:text-white">
                        Voir détails
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
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
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Demander un Devis Gratuit
                </Button>
                <Button variant="outline" className="bg-white/5 border-white/20 hover:bg-white/10 text-white">
                  Voir le Portfolio Complet
                </Button>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                💼 Disponible pour nouveaux projets • 🚀 Démarrage rapide • ✅ Garantie satisfaction
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}