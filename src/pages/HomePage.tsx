import { HeroSection } from "../components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router-dom";
import { Briefcase, Code, Users, Gamepad2, BookOpen, ArrowRight } from "lucide-react";

export function HomePage() {
  useSEO({
    title: "Accueil",
    description: "Site professionnel de Gaetan Jonathan BAKARY - Head of Development Hub Center, Expert DevOps et Product Manager. Carrière, services freelance, engagement communautaire et blog technique. 6+ ans d'expérience à Madagascar.",
    keywords: "Gaetan Jonathan BAKARY, Gaetan Jonathan, site professionnel, développeur, DevOps, Head of Development, Product Manager, Python, Linux, services freelance, consulting, Madagascar",
    canonical: "https://gaetan-jonathan.mg/"
  });

  const sections = [
    {
      title: "Carrière Professionnelle",
      description: "Découvrez mon parcours, mes expériences et mes compétences techniques",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      path: "/professionnel",
      stats: "6+ ans d'expérience • 14+ projets"
    },
    {
      title: "Services Freelance",
      description: "Développement, DevOps, consulting et formation pour vos projets",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      path: "/freelance",
      stats: "Full-stack • CI/CD • Audit"
    },
    {
      title: "Engagement Communautaire",
      description: "Leadership tech, mentorat et organisation d'événements",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      path: "/communautaire",
      stats: "600+ personnes impactées"
    },
    {
      title: "Gaming & Hobbies",
      description: "Ma passion pour l'esport et les jeux vidéo compétitifs",
      icon: Gamepad2,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      path: "/gaming",
      stats: "Ancien pro-player • Streamer"
    },
    {
      title: "Blog Technique",
      description: "Articles, tutoriels et partages de connaissances sur le dev",
      icon: BookOpen,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
      path: "/blog",
      stats: "DevOps • Python • Best Practices"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Navigation Section */}
      <section className="py-20 relative bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explorez Mon Univers Professionnel
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Découvrez mes différentes facettes : carrière, services, communauté et passions
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Link key={index} to={section.path}>
                  <Card className={`h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl ${section.borderColor} group cursor-pointer`}>
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl ${section.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-7 w-7 bg-gradient-to-br ${section.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                      </div>
                      <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors">
                        {section.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 text-sm">
                        {section.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{section.stats}</span>
                        <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA - Plus visible sur mobile */}
          <div className="mt-12 text-center md:hidden">
            <p className="text-gray-400 text-sm mb-4">
              👆 Tapez sur une carte pour explorer
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}