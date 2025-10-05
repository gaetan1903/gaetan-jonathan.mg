import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, Calendar, Code, Award, Users, Target, Trophy, GraduationCap, BookOpen, Heart } from "lucide-react";
import { experiences, professionalStats, education, certifications, skills } from "../data/profile";

export function ProfessionalSection() {
  // Filtrer les soft skills
  const softSkills = skills.filter(skill => skill.category === "Soft Skills");
  
  // Compétences organisées par domaine d'expertise
  const competencesByDomain = [
    {
      title: "Étude et développement",
      skills: [
        { label: "Mobile et Desktop", techs: "Flutter" },
        { label: "Frontend", techs: "React, VueJS" },
        { label: "Backend", techs: "Django (DRF), Flask, FastAPI, NestJS" },
        { label: "Bot Messenger", techs: "Ampalibe" },
        { label: "Scripting", techs: "Bash, Python, Go" }
      ]
    },
    {
      title: "Tests et Automatisation",
      skills: [
        { label: "Web scraping et Test end to end", techs: "Selenium, Playwright (Python)" }
      ]
    },
    {
      title: "DevOps et Infrastructure",
      skills: [
        { label: "Pipeline CI/CD", techs: "Git, Docker, Github Action, GitLab CI" },
        { label: "Configuration et supervision serveur Linux", techs: "Debian/Red Hat/Arch based" }
      ]
    },
    {
      title: "Base de données",
      skills: [
        { label: "Conception, optimisation et exploitation", techs: "MySQL, SQLite, PostgreSQL, MSSQL" }
      ]
    },
    {
      title: "Management et Méthodologie",
      skills: [
        { label: "Gestion de projet", techs: "Agile/SCRUM et management d'équipe" }
      ]
    },
    {
      title: "Connaissances complémentaires",
      skills: [
        { label: "Autres technologies", techs: "PHP, TypeScript, AWS" }
      ]
    }
  ];

  const companyStats = [
    { label: "Années d'expérience", value: professionalStats.yearsExperience, icon: Calendar },
    { label: "Projets réalisés", value: professionalStats.projectsCompleted, icon: Target },
    { label: "Équipes managées", value: professionalStats.teamsManaged, icon: Users },
    { label: "Technologies maîtrisées", value: professionalStats.technologiesMastered, icon: Code },
    { label: "Hackathons gagnés", value: professionalStats.hackathonsWon, icon: Trophy }
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
              Carrière Professionnelle
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
                    
                    {exp.projects && exp.projects.length > 0 && (
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
                    )}

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
                Compétence Professionnelle
              </h2>
              <div className="space-y-6">
                {competencesByDomain.map((domain, idx) => (
                  <Card key={idx} className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white text-base">{domain.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {domain.skills.map((skill, index) => (
                        <div key={index} className="space-y-1">
                          <div className="text-sm font-medium text-gray-300">{skill.label}</div>
                          <div className="text-xs text-gray-400 pl-4 border-l-2 border-blue-500/30">
                            {skill.techs}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Soft Skills / Compétences Interpersonnelles */}
            <div>
              <h2 className="mb-6 flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-400" />
                Compétences Interpersonnelles
              </h2>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    {softSkills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white mb-1">{skill.name}</div>
                          <div className="w-full bg-white/10 rounded-full h-1.5">
                            <div 
                              className="bg-gradient-to-r from-pink-500 to-purple-500 h-1.5 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                        <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formation Continue & Certifications */}
            <div>
              <h2 className="mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-400" />
                Formation Continue & Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <Card key={cert.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <CardTitle className="text-white text-sm">{cert.name}</CardTitle>
                          <CardDescription className="text-green-300 text-xs">{cert.issuer}</CardDescription>
                        </div>
                        <Badge variant="outline" className="bg-white/5 border-white/20 text-gray-300 ml-2 text-xs">
                          {cert.date}
                        </Badge>
                      </div>
                    </CardHeader>
                    {cert.credentialId && (
                      <CardContent className="pt-0">
                        <p className="text-gray-400 text-xs">ID: {cert.credentialId}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
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

        {/* Formation Académique */}
        <div className="mt-16">
          <h2 className="mb-8 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-purple-400" />
            <span className="text-2xl">Formation Académique</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {education.map((edu) => (
              <Card key={edu.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-white text-base">{edu.degree}</CardTitle>
                      <CardDescription className="text-purple-300">{edu.school}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-white/5 border-white/20 text-gray-300 ml-2">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {edu.description && (
                    <p className="text-gray-400 text-sm mb-2">{edu.description}</p>
                  )}
                  {edu.honors && (
                    <div className="flex items-center gap-2 mt-2">
                      <Trophy className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-yellow-300">{edu.honors}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}