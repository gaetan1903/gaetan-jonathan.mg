import { useParams, Link, Navigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, Eye, MessageCircle, ArrowLeft, Share2, BookmarkPlus, User } from "lucide-react";
import { articles } from "../data/articles";

export function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Professionnel": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Communautaire": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Personnel": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const relatedArticles = articles
    .filter(a => a.id !== article.id && (a.type === article.type || a.category === article.category))
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Button>
        </Link>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className={getTypeColor(article.type)}>
                {article.type}
              </Badge>
              <Badge variant="outline" className="bg-white/5 border-white/20 text-gray-300">
                {article.category}
              </Badge>
            </div>

            <h1 className="mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {article.title}
            </h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{article.views}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{article.comments} commentaires</span>
                </div>
                <span>{article.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="bg-white/5 border-white/20 hover:bg-white/10">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="bg-white/5 border-white/20 hover:bg-white/10">
                  <BookmarkPlus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <Card className="mb-8 overflow-hidden bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBkYXJrfGVufDF8fHx8MTc1OTY1NTYwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={article.title}
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Article Content */}
          <Card className="mb-12 bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <div 
                  className="text-gray-300 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ 
                    __html: article.content.replace(/\n/g, '<br>').replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-green-400">$1</code>') 
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-white/5 border-white/20 text-gray-300">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div>
              <h3 className="text-white mb-6">Articles similaires</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={getTypeColor(relatedArticle.type)}>
                          {relatedArticle.type}
                        </Badge>
                      </div>
                      <h4 className="text-white mb-2">{relatedArticle.title}</h4>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{relatedArticle.date}</span>
                        <Link to={`/blog/${relatedArticle.id}`}>
                          <Button variant="ghost" size="sm" className="text-blue-400 hover:text-white p-0 h-auto">
                            Lire →
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}