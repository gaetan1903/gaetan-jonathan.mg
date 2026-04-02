import { HeroSection } from "../components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router-dom";
import { Briefcase, Code, Users, Gamepad2, BookOpen, ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function HomePage() {
  const { t } = useLanguage();

  useSEO({
    title: t("home.seo.title"),
    description: t("home.seo.description"),
    keywords: "Gaetan Jonathan BAKARY, Gaetan Jonathan, site professionnel, développeur, DevOps, Head of Development, Product Manager, Python, Linux, services freelance, consulting, Madagascar",
    canonical: "https://gaetan-jonathan.mg/"
  });

  const sections = [
    {
      title: t("home.section.career.title"),
      description: t("home.section.career.description"),
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      path: "/professionnel",
      stats: t("home.section.career.stats")
    },
    {
      title: t("home.section.freelance.title"),
      description: t("home.section.freelance.description"),
      icon: Code,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      path: "/freelance",
      stats: t("home.section.freelance.stats")
    },
    {
      title: t("home.section.community.title"),
      description: t("home.section.community.description"),
      icon: Users,
      color: "from-[#B48EAD] to-[#88C0D0]",
      bgColor: "[background:rgba(180,142,173,0.07)]",
      borderColor: "border-purple-500/30",
      path: "/communautaire",
      stats: t("home.section.community.stats")
    },
    {
      title: t("home.section.gaming.title"),
      description: t("home.section.gaming.description"),
      icon: Gamepad2,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      path: "/gaming",
      stats: t("home.section.gaming.stats")
    },
    {
      title: t("home.section.blog.title"),
      description: t("home.section.blog.description"),
      icon: BookOpen,
      color: "from-[#5E81AC] to-[#81A1C1]",
      bgColor: "[background:rgba(94,129,172,0.07)]",
      borderColor: "border-indigo-500/30",
      path: "/blog",
      stats: t("home.section.blog.stats")
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
              {t("home.explore.title")}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("home.explore.subtitle")}
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
              {t("home.explore.mobileCta")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}