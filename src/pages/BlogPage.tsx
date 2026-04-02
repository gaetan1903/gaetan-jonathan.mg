import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageHeader } from "../components/PageHeader";
import { BookOpen, Calendar, Eye, MessageCircle, ExternalLink, PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { useLanguage } from "../i18n/LanguageContext";
import { useArticlesData } from "../hooks/useProfileData";

export function BlogPage() {
  const { t } = useLanguage();
  const articles = useArticlesData();

  useSEO({
    title: t("blog.seo.title"),
    description: t("blog.seo.description"),
    keywords: "blog, articles techniques, tutoriels, développement, DevOps, Python, Linux, CI/CD, automatisation, bonnes pratiques, partage de connaissances",
    canonical: "https://gaetan-jonathan.mg/blog"
  });
  const [activeFilter, setActiveFilter] = useState(t("blog.filter.all"));

  const categories = [
    { name: t("blog.filter.all"), count: articles.length, filterKey: "Tous" },
    { name: t("blog.filter.professional"), count: articles.filter(a => a.type === "Professionnel").length, filterKey: "Professionnel" },
    { name: t("blog.filter.community"), count: articles.filter(a => a.type === "Communautaire").length, filterKey: "Communautaire" },
    { name: t("blog.filter.personal"), count: articles.filter(a => a.type === "Personnel").length, filterKey: "Personnel" }
  ];

  const filteredArticles = activeFilter === t("blog.filter.all")
    ? articles
    : articles.filter(article => {
      const cat = categories.find(c => c.name === activeFilter);
      return cat ? article.type === cat.filterKey : true;
    });

  const featuredArticle = articles.find(article => article.featured);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Professionnel": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Communautaire": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Personnel": return "border [background:rgba(180,142,173,0.1)] [color:#B48EAD] [border-color:rgba(180,142,173,0.2)]";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        icon={<BookOpen className="mr-2 h-4 w-4" />}
        badge={t("blog.header.badge")}
        title={t("blog.header.title")}
        description={t("blog.header.description")}
        badgeColor="border [background:rgba(136,192,208,0.1)] [color:#88C0D0] [border-color:rgba(136,192,208,0.2)]"
      />

      <section className="py-12 relative">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(94,129,172,0.06) 0%, rgba(136,192,208,0.04) 50%, rgba(143,188,187,0.05) 100%)' }}></div>

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
                    ? "text-white [background:#5E81AC] hover:[background:#4C6FA5]"
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
                    {t("blog.featured")}
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
                  <div className="flex items-center justify-end">
                    <Link to={`/blog/${featuredArticle.id}`}>
                      <Button className="text-white" style={{ background: '#5E81AC' }}>
                        {t("blog.readArticle")}
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
                        {t("blog.read")}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <Card className="mt-16 backdrop-blur-sm border" style={{ background: 'linear-gradient(90deg, rgba(94,129,172,0.12), rgba(136,192,208,0.08))', borderColor: 'rgba(136,192,208,0.18)' }}>
            <CardContent className="pt-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-4" style={{ color: '#88C0D0' }} />
              <h4 className="text-white mb-2">{t("blog.newsletter.title")}</h4>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                {t("blog.newsletter.description")}
              </p>
              <Button className="text-white" style={{ background: '#5E81AC' }}>
                {t("blog.newsletter.button")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
