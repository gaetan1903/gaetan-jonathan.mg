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
      <footer className="py-16 border-t border-white/10 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Logo & Title Section */}
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/30">
                <span className="text-white font-bold text-lg tracking-tight">GJ</span>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Gaetan Jonathan BAKARY</h3>
              <p className="text-gray-300 text-sm">
                Head of Development Hub Center • DevOps Lead • Product Manager
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Expert en développement • Mentor Tech • Contributeur Communautaire
              </p>
            </div>
            
            {/* Copyright Section */}
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 - Tous droits réservés.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Développé avec ❤️ en utilisant React, TypeScript et Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}