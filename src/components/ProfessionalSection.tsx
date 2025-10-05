import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, Calendar, Code, Award, Users, Target } from "lucide-react";

export function ProfessionalSection() {
  const experiences = [
    {
      title: "Développeur Full Stack Senior",
      company: "TechCorp",
      period: "2023 - Présent",
      type: "CDI",
      description: "Développement d'applications web modernes avec React, Node.js et TypeScript. Leadership technique sur des projets critiques pour des clients internationaux.",
      achievements: ["Amélioration des performances de 40%", "Migration vers l'architecture microservices", "Encadrement de 3 développeurs juniors"],
      teamSize: "12 personnes",
      projects: ["Plateforme SaaS B2B", "API Gateway", "Dashboard Analytics"]
    },
    {
      title: "Développeur Front-End",
      company: "StartupTech",
      period: "2022 - 2023",
      type: "CDI",
      description: "Création d'interfaces utilisateur réactives et accessibles. Collaboration étroite avec l'équipe UX/UI pour des applications mobiles.",
      achievements: ["Refonte complète de l'interface", "Mise en place des tests automatisés", "Optimisation du SEO"],
      teamSize: "6 personnes",
      projects: ["App Mobile React Native", "Site E-commerce", "Dashboard Admin"]
    },
    {
      title: "Développeur Junior",  
      company: "WebSolutions",
      period: "2021 - 2022",
      type: "CDI",
      description: "Développement de sites web et applications. Montée en compétences sur les technologies modernes et méthodologies agiles.",
      achievements: ["Développement de 8 sites web", "Formation React & Node.js", "Certification AWS Cloud Practitioner"],
      teamSize: "4 personnes",
      projects: ["Sites vitrines", "Blog CMS", "API REST"]
    },
    {
      title: "Stage Développement Web",
      company: "AgenceWeb",
      period: "2020 - 2021",
      type: "Stage",
      description: "Premier contact avec le développement professionnel. Apprentissage des bonnes pratiques et méthodologies agiles.",
      achievements: ["Développement de 5 sites vitrines", "Formation aux outils collaboratifs", "Certification Scrum"],
      teamSize: "3 personnes",
      projects: ["WordPress sites", "Landing pages", "Maintenance"]
    }
  ];

  const skills = [
    { name: "React/Next.js", level: 90 },
    { name: "Node.js/Express", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "MongoDB/PostgreSQL", level: 80 },
    { name: "Docker/K8s", level: 75 },
    { name: "AWS/Azure", level: 70 }
  ];

  const companyStats = [
    { label: "Années d'expérience", value: "4+", icon: Calendar },
    { label: "Projets en équipe", value: "15+", icon: Target },
    { label: "Développeurs encadrés", value: "8", icon: Users },
    { label: "Technologies maîtrisées", value: "12+", icon: Code }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-indigo-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {companyStats.map((stat, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Expériences */}
          <div>
            <h2 className="mb-8 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-blue-400" />
              Expériences en Entreprise
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-white">{exp.title}</CardTitle>
                        <CardDescription className="text-blue-300">{exp.company}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="bg-white/5 border-white/20 text-gray-300 mb-1">
                          {exp.period}
                        </Badge>
                        <div className="text-sm text-gray-400">{exp.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        Équipe: {exp.teamSize}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white text-sm mb-2">Projets principaux:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.projects.map((project, i) => (
                          <Badge key={i} className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white text-sm">Réalisations:</h4>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-green-400" />
                          <span className="text-sm text-gray-400">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Compétences */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-400" />
                Compétences Entreprise
              </h2>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Stack Technique</CardTitle>
                  <CardDescription className="text-gray-400">Technologies maîtrisées en environnement professionnel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="mb-6 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-400" />
                Méthodologies & Collaboration
              </h2>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-6">
                <CardContent className="pt-6">
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Méthodologies Agiles (Scrum/Kanban)</span>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Expert</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Git/GitHub Flow</span>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Expert</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Code Review & Pair Programming</span>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Avancé</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">CI/CD (Jenkins, GitHub Actions)</span>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Avancé</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Leadership technique</span>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Avancé</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Environnement de Travail</CardTitle>
              </CardHeader>
              <CardContent>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBkYXJrfGVufDF8fHx8MTc1OTY1NTYwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Environnement de développement en entreprise"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-gray-400 text-sm mt-3">
                  Environnement de développement optimisé pour le travail en équipe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}