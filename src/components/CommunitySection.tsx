import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Heart, Star, ExternalLink, GitBranch } from "lucide-react";

export function CommunitySection() {
  const projects = [
    {
      title: "React UI Library",
      description: "Bibliothèque de composants React open-source avec plus de 500 stars GitHub.",
      tech: ["React", "TypeScript", "Storybook"],
      stars: 523,
      contributions: 45,
      link: "#"
    },
    {
      title: "Dev Community Discord Bot",
      description: "Bot Discord pour automatiser la modération et améliorer l'engagement communautaire.",
      tech: ["Node.js", "Discord.js", "MongoDB"],
      stars: 89,
      contributions: 12,
      link: "#"
    },
    {
      title: "Code Mentorship Platform",
      description: "Plateforme de mentorat pour connecter les développeurs juniors avec des seniors.",
      tech: ["Next.js", "Supabase", "Tailwind"],
      stars: 234,
      contributions: 8,
      link: "#"
    }
  ];

  const contributions = [
    {
      platform: "GitHub",
      activity: "Contributions Open Source",
      count: "1,200+",
      description: "Commits sur des projets open source"
    },
    {
      platform: "Stack Overflow",
      activity: "Réponses techniques",
      count: "89",
      description: "Réponses acceptées avec 95% de satisfaction"
    },
    {
      platform: "Dev.to",
      activity: "Articles de blog",
      count: "24",
      description: "Articles techniques avec 15k+ vues"
    },
    {
      platform: "Discord Communities",
      activity: "Mentorat",
      count: "150+",
      description: "Développeurs juniors accompagnés"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-teal-900/10 to-blue-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
            <Users className="mr-2 h-4 w-4" />
            Communautaire
          </Badge>
          <h2 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Engagement Communautaire
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contributions open source, mentorat et partage de connaissances au sein de la communauté développeur.
          </p>
        </div>

        {/* Hero Community Image */}
        <div className="mb-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
            <CardContent className="p-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTk2NDg2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Collaboration en équipe"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white mb-2">Passion pour la Collaboration</h3>
                <p className="text-gray-400">
                  Croyant fermement au pouvoir de la communauté open source et du partage de connaissances.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Projets Open Source */}
          <div>
            <h3 className="mb-8 flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-green-400" />
              Projets Open Source
            </h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white">{project.title}</CardTitle>
                        <CardDescription className="text-gray-400">{project.description}</CardDescription>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="outline" className="bg-white/5 border-white/20 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitBranch className="h-4 w-4 text-green-400" />
                        {project.contributions} contributions
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contributions Communautaires */}
          <div>
            <h3 className="mb-8 flex items-center gap-2">
              <Heart className="h-5 w-5 text-green-400" />
              Impact Communautaire
            </h3>
            <div className="grid gap-6">
              {contributions.map((contrib, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white">{contrib.platform}</h4>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                        {contrib.count}
                      </Badge>
                    </div>
                    <p className="text-gray-300 mb-1">{contrib.activity}</p>
                    <p className="text-sm text-gray-400">{contrib.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="mt-8 bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm border-green-500/30">
              <CardContent className="pt-6 text-center">
                <Heart className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h4 className="text-white mb-2">Rejoignez la Communauté</h4>
                <p className="text-gray-300 mb-4">
                  Collaborons ensemble sur des projets open source !
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Contactez-moi
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}