import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github, Linkedin, Mail, Download, MapPin, Globe } from "lucide-react";
import { personalInfo } from "../data/profile";

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
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <MapPin className="mr-1 h-3 w-3" />
                {personalInfo.location}
              </Badge>
              <h1 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-4xl lg:text-6xl font-bold">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl lg:text-2xl text-blue-300 mb-4 font-semibold">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Status badges */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                👨‍💼 Head of Development
              </Badge>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                � DevOps & Product Manager
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                � 5x Hackathon Winner
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                🤝 Community Leader
              </Badge>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8 justify-center lg:justify-start">
              <Button variant="outline" size="icon" className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10" asChild>
                <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10" asChild>
                <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10" asChild>
                <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              {personalInfo.links.website && (
                <Button variant="outline" size="icon" className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10" asChild>
                  <a href={personalInfo.links.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
                    <Globe className="h-5 w-5" />
                  </a>
                </Button>
              )}
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