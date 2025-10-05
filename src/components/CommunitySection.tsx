import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Heart, Star, Calendar, MapPin, Target, Award, TrendingUp } from "lucide-react";
import { communityActivities, communityEvents, communityStats } from "../data/profile";

export function CommunitySection() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Leadership": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Mentorat": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Organisation": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Formation": return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      case "Bénévolat": return "bg-pink-500/20 text-pink-300 border-pink-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-blue-900/10 to-purple-900/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl text-white mb-1">{communityStats.peopleImpacted}</div>
              <div className="text-sm text-gray-400">Personnes Impactées</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center">
            <CardContent className="pt-6">
              <Award className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl text-white mb-1">{communityStats.hackathonsWon}</div>
              <div className="text-sm text-gray-400">Hackathons Gagnés</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center">
            <CardContent className="pt-6">
              <Heart className="h-8 w-8 text-pink-400 mx-auto mb-3" />
              <div className="text-2xl text-white mb-1">{communityStats.mentored}</div>
              <div className="text-sm text-gray-400">Personnes Mentorées</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl text-white mb-1">{communityStats.workshops}</div>
              <div className="text-sm text-gray-400">Ateliers Animés</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Activités Communautaires */}
          <div>
            <h2 className="mb-8 flex items-center gap-2 text-3xl font-bold text-white">
              <Users className="h-6 w-6 text-green-400" />
              Engagement Communautaire
            </h2>
            <div className="space-y-6">
              {communityActivities.map((activity) => (
                <Card key={activity.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-white mb-1">{activity.role}</CardTitle>
                        <CardDescription className="text-green-300 font-semibold">
                          {activity.organization}
                        </CardDescription>
                      </div>
                      <Badge className={getCategoryColor(activity.category)}>
                        {activity.category}
                      </Badge>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {activity.period}
                      </span>
                      {activity.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {activity.location}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{activity.description}</p>
                    
                    {activity.impact && activity.impact.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-white text-sm mb-2 font-semibold">Impact:</h4>
                        <ul className="space-y-2">
                          {activity.impact.map((item, index) => (
                            <li key={index} className="text-gray-400 text-sm flex items-start">
                              <Target className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {activity.participants && (
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-blue-400" />
                        <span className="text-gray-400">
                          {activity.participants}+ participants impactés
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Événements & Hackathons */}
          <div>
            <h2 className="mb-8 flex items-center gap-2 text-3xl font-bold text-white">
              <Award className="h-6 w-6 text-yellow-400" />
              Événements & Hackathons
            </h2>
            <div className="space-y-6">
              {communityEvents.map((event) => (
                <Card key={event.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="mb-2">
                      <CardTitle className="text-white mb-1">{event.name}</CardTitle>
                      <CardDescription className="text-yellow-300 font-semibold">
                        {event.role}
                      </CardDescription>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {event.date}
                      </span>
                      {event.participants && (
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {event.participants} participants
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm mb-2">{event.organization}</p>
                    <p className="text-gray-300 mb-3">{event.description}</p>
                    
                    <div className="mb-3">
                      <div className="flex items-start gap-2 text-sm">
                        <Star className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-green-300">{event.impact}</span>
                      </div>
                    </div>
                    
                    {event.technologies && event.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {event.technologies.map((tech, index) => (
                          <Badge key={index} className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Global */}
        <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-2xl mb-2">Impact Communautaire Global</CardTitle>
            <CardDescription className="text-gray-300">
              Mon engagement envers l'écosystème tech malgache
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">{communityStats.yearsActive}</div>
                <div className="text-gray-300">Années d'engagement actif</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{communityStats.communities}</div>
                <div className="text-gray-300">Communautés tech contributées</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{communityStats.eventsOrganized}</div>
                <div className="text-gray-300">Événements organisés</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                Passionné par le partage de connaissances et la croissance de l'écosystème tech malgache, 
                j'ai eu le privilège de contribuer à plusieurs communautés, de mentorer des dizaines de 
                développeurs et d'organiser des événements qui ont impacté plus de 600 personnes. Mon objectif 
                est de continuer à inspirer et former la prochaine génération de développeurs à Madagascar.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
