import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/professionnel", label: "Professionnel" },
    { path: "/freelance", label: "Freelance" },
    { path: "/communautaire", label: "Communautaire" },
    { path: "/gaming", label: "Gaming" },
    { path: "/blog", label: "Blog" }
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const isActivePath = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white">P</span>
            </div>
            <span className="text-white">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={`
                    text-gray-300 hover:text-white transition-colors
                    ${isActivePath(item.path) ? "text-white bg-white/10" : ""}
                  `}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="text-gray-300 hover:text-white"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  className={`
                    w-full justify-start text-gray-300 hover:text-white
                    ${isActivePath(item.path) ? "text-white bg-white/10" : ""}
                  `}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}