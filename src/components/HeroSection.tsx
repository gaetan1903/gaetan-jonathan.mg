import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github, Linkedin, Mail, MapPin, Globe, ChevronDown, ChevronRight } from "lucide-react";
import { personalInfo } from "../data/profile";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background avec effet glassmorphism */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(94,129,172,0.12) 0%, rgba(136,192,208,0.08) 50%, rgba(129,161,193,0.10) 100%)' }}></div>
      <div className="absolute inset-0 backdrop-blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(94,129,172,0.08)' }}></div>
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
            <div className="absolute -inset-4 rounded-full blur-2xl -z-10" style={{ background: 'linear-gradient(135deg, rgba(94,129,172,0.18), rgba(136,192,208,0.14))' }}></div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <MapPin className="mr-1 h-3 w-3" />
                Remote • Madagascar
              </Badge>
              <h1 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-4xl lg:text-6xl font-bold">
                Gaetan Jonathan BAKARY
              </h1>
              <h2 className="text-xl lg:text-2xl text-blue-300 mb-4 font-semibold">
                Tech Lead & Product Builder
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed">
                Je conçois et mets en production des produits digitaux scalables — pensés pour performer, durer et générer un réel impact business.
              </p>
            </div>

            {/* Status badges */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              <Badge className="border" style={{ background: 'rgba(94,129,172,0.12)', color: '#5E81AC', borderColor: 'rgba(94,129,172,0.22)' }}>
                Product Engineering
              </Badge>
              <Badge className="border" style={{ background: 'rgba(180,142,173,0.12)', color: '#B48EAD', borderColor: 'rgba(180,142,173,0.22)' }}>
                Tech Leadership
              </Badge>
              <Badge className="border" style={{ background: 'rgba(136,192,208,0.12)', color: '#88C0D0', borderColor: 'rgba(136,192,208,0.22)' }}>
                Fullstack Developer (Senior)
              </Badge>
              <Badge className="border" style={{ background: 'rgba(163,190,140,0.12)', color: '#A3BE8C', borderColor: 'rgba(163,190,140,0.22)' }}>
                Performance & Automation
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

            <Button className="text-white" style={{ background: 'linear-gradient(90deg, #5E81AC, #88C0D0)' }}>
              <ChevronRight className="mr-2 h-4 w-4" />
              Travaillons ensemble
            </Button>
          </div>
        </div>

        {/* Scroll indicator - Mobile friendly */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm hidden md:block">Découvrez mes sections</span>
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}