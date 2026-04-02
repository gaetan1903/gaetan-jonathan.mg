import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, Calendar, Code, Award, Users, Target, Trophy, GraduationCap, BookOpen, Heart } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useProfileData } from "../hooks/useProfileData";

export function ProfessionalSection() {
  const { t } = useLanguage();
  const { experiences, professionalStats, education, certifications, skills } = useProfileData();

  // Filtrer les soft skills
  const softSkills = skills.filter(skill => skill.category === "Soft Skills");

  // Compétences organisées par domaine d'expertise
  const competencesByDomain = [
    {
      title: t("pro.domain.devArch"),
      skills: [
        { label: t("pro.domain.devArch.mobile"), techs: "Flutter" },
        { label: t("pro.domain.devArch.frontend"), techs: "React, NextJS" },
        { label: t("pro.domain.devArch.backend"), techs: "Django (DRF), FastAPI, NestJS, GO" },
        { label: t("pro.domain.devArch.baas"), techs: "Supabase, PocketBase" },
        { label: t("pro.domain.devArch.arch"), techs: "Clean Architecture, Clean Architecture Simplifiée" },
        { label: t("pro.domain.devArch.bot"), techs: "Ampalibe" },
        { label: t("pro.domain.devArch.scripting"), techs: "Bash, Python, Go" }
      ]
    },
    {
      title: t("pro.domain.tests"),
      skills: [
        { label: t("pro.domain.tests.scraping"), techs: "Selenium, Playwright" },
        { label: t("pro.domain.tests.load"), techs: "Locust" }
      ]
    },
    {
      title: t("pro.domain.devops"),
      skills: [
        { label: t("pro.domain.devops.cicd"), techs: "Git, Docker, Github Action, GitLab CI" },
        { label: t("pro.domain.devops.linux"), techs: "Debian/Red Hat/Arch based" }
      ]
    },
    {
      title: t("pro.domain.db"),
      skills: [
        { label: t("pro.domain.db.design"), techs: "PostgreSQL, MSSQL, MySQL, SQLite" }
      ]
    },
    {
      title: t("pro.domain.management"),
      skills: [
        { label: t("pro.domain.management.pm"), techs: t("pro.domain.management.pm.techs") }
      ]
    },
    {
      title: t("pro.domain.extra"),
      skills: [
        { label: t("pro.domain.extra.other"), techs: "PHP, TypeScript, AWS, Nomad, Consul, Vault, Traefik, Nginx" }
      ]
    }
  ];

  const companyStats = [
    { label: t("pro.stats.years"), value: professionalStats.yearsExperience, icon: Calendar },
    { label: t("pro.stats.projects"), value: professionalStats.projectsCompleted, icon: Target },
    { label: t("pro.stats.teams"), value: professionalStats.teamsManaged, icon: Users },
    { label: t("pro.stats.technologies"), value: professionalStats.technologiesMastered, icon: Code }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(94,129,172,0.06) 0%, rgba(136,192,208,0.04) 50%, rgba(129,161,193,0.06) 100%)' }}></div>

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
            <h2 className="mb-3 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-blue-400" />
              {t("pro.experience.title")}
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed whitespace-pre-line">
              {t("pro.experience.subtitle")}
            </p>
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
                        {t("pro.experience.team")}: {exp.teamSize}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {exp.projects && exp.projects.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-white text-sm mb-2">{t("pro.experience.projects")}</h4>
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
                      <h4 className="text-white text-sm">{t("pro.experience.achievements")}</h4>
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
                {t("pro.skills.title")}
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
                {t("pro.skills.soft.title")}
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
                              className="h-1.5 rounded-full transition-all duration-500"
                              style={{ background: 'linear-gradient(90deg, #5E81AC, #88C0D0)', width: `${skill.level}%` }}
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
                {t("pro.skills.certTitle")}
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
                {t("pro.skills.methods.title")}
              </h2>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-6">
                <CardContent className="pt-6">
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{t("pro.skills.methods.agile")}</span>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">{t("pro.skills.methods.agile.level")}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{t("pro.skills.methods.review")}</span>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">{t("pro.skills.methods.review.level")}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{t("pro.skills.methods.gitflow")}</span>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">{t("pro.skills.methods.gitflow.level")}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{t("pro.skills.methods.leadership")}</span>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">{t("pro.skills.methods.leadership.level")}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">{t("pro.workspace.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBkYXJrfGVufDF8fHx8MTc1OTY1NTYwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={t("pro.workspace.alt")}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-gray-400 text-sm mt-3">
                  {t("pro.workspace.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Formation Académique */}
        <div className="mt-16">
          <h2 className="mb-8 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-purple-400" />
            <span className="text-2xl">{t("pro.education.title")}</span>
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
