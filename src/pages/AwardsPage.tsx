import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { PageHeader } from "../components/PageHeader";
import { Trophy, Award as AwardIcon, Medal, Calendar, ExternalLink } from "lucide-react";
import { awards, certifications } from "../data/profile";

export function AwardsPage() {
  const getPositionColor = (position?: string) => {
    if (!position) return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    if (position.includes("1ère") || position.includes("🥇")) return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    if (position.includes("2ème") || position.includes("🥈")) return "bg-gray-400/20 text-gray-300 border-gray-400/30";
    if (position.includes("3ème") || position.includes("🥉")) return "bg-orange-500/20 text-orange-300 border-orange-500/30";
    return "bg-purple-500/20 text-purple-300 border-purple-500/30";
  };

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        icon={<Trophy className="mr-2 h-4 w-4" />}
        badge="Prix & Certifications"
        title="Distinctions & Reconnaissances"
        description="Mes réalisations académiques et professionnelles, hackathons remportés et certifications obtenues témoignent de mon engagement envers l'excellence et l'apprentissage continu."
        badgeColor="bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      />

      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-orange-900/10 to-red-900/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center">
              <CardContent className="pt-6">
                <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl text-white mb-1">{awards.length}</div>
                <div className="text-sm text-gray-400">Prix Remportés</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center">
              <CardContent className="pt-6">
                <Medal className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl text-white mb-1">{certifications.length}</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center">
              <CardContent className="pt-6">
                <AwardIcon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl text-white mb-1">5</div>
                <div className="text-sm text-gray-400">Hackathons Gagnés</div>
              </CardContent>
            </Card>
          </div>

          {/* Prix et Distinctions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Trophy className="h-6 w-6 text-yellow-400" />
              Prix et Distinctions
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award) => (
                <Card key={award.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-2">{award.title}</CardTitle>
                        <CardDescription className="text-blue-300">{award.issuer}</CardDescription>
                      </div>
                      {award.position && (
                        <Badge className={getPositionColor(award.position)}>
                          {award.position}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {award.date}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Medal className="h-6 w-6 text-blue-400" />
              Certifications Professionnelles
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <AwardIcon className="h-6 w-6 text-purple-400 flex-shrink-0" />
                      {cert.url && (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <CardTitle className="text-white text-base mb-2">{cert.name}</CardTitle>
                    <CardDescription className="text-blue-300 text-sm">
                      {cert.issuer}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                    {cert.credentialId && (
                      <div className="text-xs text-gray-500">
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <Card className="mt-16 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-400" />
                Points Forts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Medal className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Champion de Hackathons</h3>
                    <p className="text-gray-300 text-sm">
                      5 victoires dans des hackathons majeurs (Piscine Python, POESAM, DevFest, HIU, etc.)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AwardIcon className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Formation Continue</h3>
                    <p className="text-gray-300 text-sm">
                      Certifications en Lean Management, GRH et excellence académique
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Innovation Sociale</h3>
                    <p className="text-gray-300 text-sm">
                      Solutions digitales pour la gouvernance, l'environnement et la société
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Medal className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Excellence Académique</h3>
                    <p className="text-gray-300 text-sm">
                      Master II en Management des SI et multiples distinctions universitaires
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}