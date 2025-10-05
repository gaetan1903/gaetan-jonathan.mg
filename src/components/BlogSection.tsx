import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen, Calendar, Eye, MessageCircle, ExternalLink, PenTool } from "lucide-react";

export function BlogSection() {
  const articles = [
    {
      title: "Les Patterns React Avancés en 2024",
      excerpt: "Découvrez les patterns React les plus utiles pour créer des applications robustes et maintenables.",
      category: "React",
      type: "Professionnel",
      date: "15 Oct 2024",
      readTime: "8 min",
      views: "2.3k",
      comments: 24,
      featured: true
    },
    {
      title: "Optimisation des Performances Web",
      excerpt: "Guide complet pour améliorer les performances de vos applications web modernes.",
      category: "Performance",
      type: "Professionnel",
      date: "8 Oct 2024",
      readTime: "12 min",
      views: "1.8k",
      comments: 18
    },
    {
      title: "Construire une Communauté Tech",
      excerpt: "Mon expérience dans la création et l'animation de communautés de développeurs.",
      category: "Communauté",
      type: "Communautaire",
      date: "1 Oct 2024",
      readTime: "6 min",
      views: "1.2k",
      comments: 31
    },
    {
      title: "Du Gaming au Développement",
      excerpt: "Comment les compétences acquises en esport m'aident dans ma carrière de développeur.",
      category: "Career",
      type: "Personnel",
      date: "25 Sep 2024",
      readTime: "10 min",
      views: "3.1k",
      comments: 42
    },
    {
      title: "Architecture Microservices avec Node.js",
      excerpt: "Implémentation pratique d'une architecture microservices scalable.",
      category: "Backend",
      type: "Professionnel",
      date: "18 Sep 2024",
      readTime: "15 min",
      views: "2.7k",
      comments: 28
    },
    {
      title: "Stratégies CODM pour Débutants",
      excerpt: "Guide complet pour bien commencer sa carrière compétitive sur Call of Duty Mobile.",
      category: "Gaming",
      type: "Communautaire",
      date: "12 Sep 2024",
      readTime: "7 min",
      views: "4.2k",
      comments: 67
    }
  ];

  const categories = [
    { name: "Tous", count: articles.length, active: true },
    { name: "Professionnel", count: articles.filter(a => a.type === "Professionnel").length },
    { name: "Communautaire", count: articles.filter(a => a.type === "Communautaire").length },
    { name: "Personnel", count: articles.filter(a => a.type === "Personnel").length }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Professionnel": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Communautaire": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Personnel": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
            <BookOpen className="mr-2 h-4 w-4" />
            Blog & Articles
          </Badge>
          <h2 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Partage de Connaissances
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Articles techniques, retours d'expérience et guides pratiques sur le développement web, 
            la communauté tech et l'esport.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`
                ${category.active 
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                  : "bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 text-gray-300"
                }
              `}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        {articles.filter(article => article.featured).map((article, index) => (
          <Card key={index} className="mb-12 bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBkYXJrfGVufDF8fHx8MTc1OTY1NTYwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={article.title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <Badge className="absolute top-4 left-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  <PenTool className="mr-1 h-3 w-3" />
                  Article à la Une
                </Badge>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className={getTypeColor(article.type)}>
                    {article.type}
                  </Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/20 text-gray-300">
                    {article.category}
                  </Badge>
                </div>
                <h3 className="text-white mb-4">{article.title}</h3>
                <p className="text-gray-400 mb-6">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {article.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {article.comments}
                    </div>
                  </div>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Lire l'article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {articles.filter(article => !article.featured).map((article, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={getTypeColor(article.type)}>
                    {article.type}
                  </Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/20 text-gray-300">
                    {article.category}
                  </Badge>
                </div>
                <CardTitle className="text-white">{article.title}</CardTitle>
                <CardDescription className="text-gray-400">{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {article.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {article.comments}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-indigo-400 hover:text-white">
                    Lire
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card className="mt-16 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border-indigo-500/30">
          <CardContent className="pt-6 text-center">
            <BookOpen className="h-8 w-8 text-indigo-400 mx-auto mb-4" />
            <h4 className="text-white mb-2">Restez Informé</h4>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Abonnez-vous pour recevoir mes derniers articles sur le développement web, 
              les bonnes pratiques et mes réflexions sur l'industrie tech.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              S'abonner à la Newsletter
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}