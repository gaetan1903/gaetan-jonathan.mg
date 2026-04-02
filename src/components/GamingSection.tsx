import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Gamepad2, Trophy, Target, Users, Zap } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function GamingSection() {
  const { t } = useLanguage();

  const achievements = [
    {
      title: t("gaming.achievement.champion.title"),
      description: t("gaming.achievement.champion.description"),
      date: "Mars 2026",
      type: "tournament"
    },
    {
      title: t("gaming.achievement.ranked.title"),
      description: t("gaming.achievement.ranked.description"),
      date: "2024-2025",
      type: "ranking"
    },
    {
      title: t("gaming.achievement.leader.title"),
      description: t("gaming.achievement.leader.description"),
      date: "2024-Present",
      type: "leadership"
    },
    {
      title: t("gaming.achievement.content.title"),
      description: t("gaming.achievement.content.description"),
      date: "2024-Present",
      type: "content"
    }
  ];

  const stats = [
    { label: t("gaming.stats.kd"), value: "6.9", icon: Target },
    { label: t("gaming.stats.wins"), value: "4000+", icon: Trophy },
    { label: t("gaming.stats.team"), value: "6", icon: Users }
  ];

  const skills = [
    { name: t("gaming.skill.strategy"), level: 90 },
    { name: t("gaming.skill.leadership"), level: 90 },
    { name: t("gaming.skill.reflexes"), level: 88 },
    { name: t("gaming.skill.communication"), level: 92 },
    { name: t("gaming.skill.analysis"), level: 85 },
    { name: t("gaming.skill.adaptability"), level: 89 }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(208,135,112,0.06) 0%, rgba(191,97,106,0.04) 50%, rgba(94,129,172,0.05) 100%)' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
            <Gamepad2 className="mr-2 h-4 w-4" />
            {t("gaming.badge")}
          </Badge>
          <h2 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t("gaming.title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("gaming.subtitle")}
          </p>
        </div>

        {/* Gaming Setup Hero */}
        <div className="mb-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
            <CardContent className="p-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1617507171089-6cb9aa5add36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMG5lb258ZW58MXx8fHwxNzU5NTg0NDQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Setup gaming professionnel"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white mb-2">{t("gaming.setup.title")}</h3>
                <p className="text-gray-400">
                  {t("gaming.setup.description")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Statistiques */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-400" />
              {t("gaming.stats.title")}
            </h3>
            <div className="grid gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <stat.icon className="h-8 w-8 text-orange-400" />
                      <div>
                        <div className="text-2xl text-white">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-orange-400" />
              {t("gaming.achievements.title")}
            </h3>
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white">{achievement.title}</CardTitle>
                        <CardDescription className="text-gray-400">{achievement.description}</CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className={`
                          ${achievement.type === 'tournament' ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300' : ''}
                          ${achievement.type === 'ranking' ? '[background:rgba(180,142,173,0.1)] [border-color:rgba(180,142,173,0.2)] [color:#B48EAD]' : ''}
                          ${achievement.type === 'leadership' ? 'bg-blue-500/20 border-blue-500/30 text-blue-300' : ''}
                          ${achievement.type === 'content' ? 'bg-green-500/20 border-green-500/30 text-green-300' : ''}
                        `}
                      >
                        {achievement.date}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Gaming Skills */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-8 flex items-center gap-2">
              <Target className="h-5 w-5 text-orange-400" />
              {t("gaming.skills.title")}
            </h3>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="pt-6 space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-orange-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="mb-8 flex items-center gap-2">
              <Users className="h-5 w-5 text-orange-400" />
              {t("gaming.community.title")}
            </h3>
            <div className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">{t("gaming.community.experience.title")}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {t("gaming.community.experience.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left text-gray-300 text-sm">
                    <li dangerouslySetInnerHTML={{ __html: `• ${t("gaming.community.exp.1")}` }} />
                    <li dangerouslySetInnerHTML={{ __html: `• ${t("gaming.community.exp.2")}` }} />
                    <li>• {t("gaming.community.exp.3")}</li>
                    <li dangerouslySetInnerHTML={{ __html: `• ${t("gaming.community.exp.4")}` }} />
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Content Sharing</CardTitle>
                  <CardDescription className="text-gray-400">
                    TikTok : <span className="text-orange-400 font-semibold">takeo_codm</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        {/* Gaming Philosophy */}
        <Card className="mt-12 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border-orange-500/30">
          <CardContent className="pt-6 text-center">
            <Gamepad2 className="h-8 w-8 text-orange-400 mx-auto mb-4" />
            <h4 className="text-white mb-2">{t("gaming.philosophy.title")}</h4>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t("gaming.philosophy.quote")}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
