import { ReactNode } from "react";
import { Navigation } from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation />
      <main>{children}</main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">P</span>
            </div>
            <h3 className="text-white mb-2">Portfolio Professionnel</h3>
            <p className="text-gray-400">
              Développeur Full Stack • Contributeur Open Source • Gaming Enthusiast
            </p>
          </div>
          
          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-500">
              © 2024 Portfolio. Développé avec React, TypeScript et Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}