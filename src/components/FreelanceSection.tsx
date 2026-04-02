import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Briefcase, Calendar, Code, Award, Users, Star, ExternalLink } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function FreelanceSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("freelance.project.easysend.title"),
      client: "StartupTech",
      period: t("freelance.project.easysend.period"),
      description: t("freelance.project.easysend.description"),
      technologies: ["Flutter", "React", "NestJS", "PostgreSQL", "Stripe Connect"],
      budget: "",
      duration: t("freelance.project.easysend.duration"),
      satisfaction: 5,
      results: [],
      links: [
        { label: "https://myeasysend.com", url: "https://myeasysend.com/" },
      ]
    },
    {
      title: t("freelance.project.tambatra.title"),
      client: "IECD Madagascar",
      period: t("freelance.project.tambatra.period"),
      description: t("freelance.project.tambatra.description"),
      technologies: ["React", "NestJS", "PostgreSQL", "Map Visualization", "Data Analytics"],
      budget: "",
      duration: "",
      satisfaction: 4.5,
      results: [],
      links: [
        { label: "https://talent-tambatra.com", url: "https://talent-tambatra.com/" }
      ]
    },
    {
      title: t("freelance.project.aloe.title"),
      client: "Alliance Voahary Gasy",
      period: "",
      description: t("freelance.project.aloe.description"),
      technologies: ["Flutter", "Django Rest Framework"],
      budget: "",
      duration: t("freelance.project.aloe.duration"),
      satisfaction: 5,
      results: [],
      links: [{ label: "Manuel ALOE", url: "https://drive.google.com/file/d/1iCvYO0EdvngMakIIdArM_NFsj07ww_7G/view?usp=sharing" }]
    },
    {
      title: t("freelance.project.agora.title"),
      client: "Agora Consulting",
      period: t("freelance.project.agora.period"),
      description: t("freelance.project.agora.description"),
      technologies: ["React", "Vite", "Tailwind"],
      budget: "",
      duration: t("freelance.project.agora.duration"),
      satisfaction: 5,
      results: [],
      links: [
        { label: "https://agora-consulting.mg", url: "https://agora-consulting.mg/" }
      ]
    }
  ];

  const services = [
    {
      title: t("freelance.service.web.title"),
      description: t("freelance.service.web.description"),
      price: t("freelance.service.web.price"),
      duration: t("freelance.service.web.duration"),
      includes: [t("freelance.service.web.inc.1"), t("freelance.service.web.inc.2"), t("freelance.service.web.inc.3"), t("freelance.service.web.inc.4"), t("freelance.service.web.inc.5")]
    },
    {
      title: t("freelance.service.mobile.title"),
      description: t("freelance.service.mobile.description"),
      price: t("freelance.service.mobile.price"),
      duration: t("freelance.service.mobile.duration"),
      includes: [t("freelance.service.mobile.inc.1"), t("freelance.service.mobile.inc.2"), t("freelance.service.mobile.inc.3"), t("freelance.service.mobile.inc.4"), t("freelance.service.mobile.inc.5"), t("freelance.service.mobile.inc.6")]
    },
    {
      title: t("freelance.service.server.title"),
      description: t("freelance.service.server.description"),
      price: t("freelance.service.server.price"),
      duration: t("freelance.service.server.duration"),
      includes: [t("freelance.service.server.inc.1"), t("freelance.service.server.inc.2"), t("freelance.service.server.inc.3"), t("freelance.service.server.inc.4"), t("freelance.service.server.inc.5")]
    },
    {
      title: t("freelance.service.consulting.title"),
      description: t("freelance.service.consulting.description"),
      price: t("freelance.service.consulting.price"),
      duration: t("freelance.service.consulting.duration"),
      includes: [t("freelance.service.consulting.inc.1"), t("freelance.service.consulting.inc.2"), t("freelance.service.consulting.inc.3"), t("freelance.service.consulting.inc.4"), t("freelance.service.consulting.inc.5")]
    }
  ];

  const stats = [
    { label: t("freelance.stats.projects"), value: "20+", icon: Briefcase },
    { label: t("freelance.stats.clients"), value: "15+", icon: Users },
    { label: t("freelance.stats.satisfaction"), value: "98%", icon: Star },
    { label: t("freelance.stats.servers"), value: "5+", icon: Code }
  ];

  const technologies = [
    { name: "TypeScript / Node.js (NestJS)", level: 90 },
    { name: "Python / Django / FastAPI", level: 90 },
    { name: "React", level: 88 },
    { name: "Flutter (Mobile, Desktop)", level: 85 },
    { name: t("freelance.tech.database"), level: 88 },
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
              {t("freelance.projects.title")}
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-white">{project.title}</CardTitle>
                        <CardDescription className="text-green-300">{t("freelance.projects.client")}: {project.client}</CardDescription>
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

                    {project.results.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {project.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-green-400" />
                            <span className="text-sm text-gray-400">{result}</span>
                          </div>
                        ))}
                      </div>
                    )}

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
                {t("freelance.services.title")}
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
                      <div className="text-sm text-gray-500 mb-3">{t("freelance.services.duration")}: {service.duration}</div>
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
                {t("freelance.tech.title")}
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
              <h2 className="text-white mb-4">{t("freelance.cta.title")}</h2>
              <p className="text-gray-300 mb-6 whitespace-pre-line">
                {t("freelance.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:gaetan.bakary@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    {t("freelance.cta.button")}
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
