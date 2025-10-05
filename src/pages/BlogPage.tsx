import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageHeader } from "../components/PageHeader";
import { BookOpen, Calendar, Eye, MessageCircle, ExternalLink, PenTool } from "lucide-react";
import { articles } from "../data/articles";
import { Link } from "react-router-dom";

export function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const categories = [
    { name: "Tous", count: articles.length },
    { name: "Professionnel", count: articles.filter(a => a.type === "Professionnel").length },
    { name: "Communautaire", count: articles.filter(a => a.type === "Communautaire").length },
    { name: "Personnel", count: articles.filter(a => a.type === "Personnel").length }
  ];

  const filteredArticles = activeFilter === "Tous" 
    ? articles 
    : articles.filter(article => article.type === activeFilter);

  const featuredArticle = articles.find(article => article.featured);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Professionnel": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Communautaire": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Personnel": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        icon={<BookOpen className="mr-2 h-4 w-4" />}
        badge="Blog & Articles"
        title="Partage de Connaissances"
        description="Articles techniques, retours d'expérience et guides pratiques sur le développement web, la communauté tech et l'esport. Mes réflexions et apprentissages partagés avec la communauté."
        badgeColor="bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
      />
      
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeFilter === category.name ? "default" : "outline"}
              onClick={() => setActiveFilter(category.name)}
              className={`
                ${activeFilter === category.name
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
        {featuredArticle && (
          <Card className="mb-12 bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBkYXJrfGVufDF8fHx8MTc1OTY1NTYwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <Badge className="absolute top-4 left-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  <PenTool className="mr-1 h-3 w-3" />
                  Article à la Une
                </Badge>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className={getTypeColor(featuredArticle.type)}>
                    {featuredArticle.type}
                  </Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/20 text-gray-300">
                    {featuredArticle.category}
                  </Badge>
                </div>
                <h3 className="text-white mb-4">{featuredArticle.title}</h3>
                <p className="text-gray-400 mb-6">{featuredArticle.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {featuredArticle.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {featuredArticle.comments}
                    </div>
                  </div>
                  <Link to={`/blog/${featuredArticle.id}`}>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                      Lire l'article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredArticles.filter(article => !article.featured).map((article, index) => (
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
                  <Link to={`/blog/${article.id}`}>
                    <Button variant="ghost" size="sm" className="text-indigo-400 hover:text-white">
                      Lire
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
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
  </div>
);
}