import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, _] = useState(true);
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
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b" style={{ background: 'rgba(25, 29, 36, 0.75)', borderColor: 'rgba(136, 192, 208, 0.15)' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg p-0.5" style={{ background: 'none', boxShadow: '0 4px 16px rgba(136, 192, 208, 0.3)' }}>
              <svg viewBox="0 0 100 100" width="38" height="38" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="nord-navbar" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2E3440" />
                    <stop offset="60%" stopColor="#5E81AC" />
                    <stop offset="100%" stopColor="#88C0D0" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" rx="20" fill="url(#nord-navbar)" />
                <g>
                  <circle cx="50" cy="55" r="6" fill="#A3BE8C" />
                </g>
                <text x="50" y="60" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="bold" fill="#ECEFF4" textAnchor="middle" letterSpacing="2">GJ</text>
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={`
                    transition-colors
                    ${isActivePath(item.path)
                      ? "text-[#88C0D0] bg-[rgba(136,192,208,0.12)]"
                      : "text-[#D8DEE9] hover:text-[#88C0D0] hover:bg-[rgba(136,192,208,0.08)]"}
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
              className="text-[#D8DEE9] cursor-default opacity-80"
              tabIndex={-1}
              aria-label="Mode sombre actif"
              disabled
            >
              <Sun className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#D8DEE9] hover:text-[#88C0D0]"
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
                    w-full justify-start transition-colors
                    ${isActivePath(item.path)
                      ? "text-[#88C0D0] bg-[rgba(136,192,208,0.12)]"
                      : "text-[#D8DEE9] hover:text-[#88C0D0] hover:bg-[rgba(136,192,208,0.08)]"}
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