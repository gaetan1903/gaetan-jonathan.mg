import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background avec effet glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
      <div className="absolute inset-0 backdrop-blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758876204286-ff72a71ef434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1OTY1NjY0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                Développeur Full Stack
              </Badge>
              <h1 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Votre Nom
              </h1>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                Passionné par le développement web et mobile, avec une expertise en React, Node.js et un parcours gaming compétitif sur Call of Duty Mobile.
              </p>
            </div>

            {/* Status badges */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                🎯 Étudiant → Professionnel
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                💻 Full Stack Developer
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                🎮 Gaming Enthusiast
              </Badge>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8 justify-center lg:justify-start">
              <Button variant="outline" size="icon" className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Télécharger CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}