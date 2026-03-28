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
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b" style={{ background: 'rgba(25, 29, 36, 0.75)', borderColor: 'rgba(136, 192, 208, 0.15)' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #5E81AC, #81A1C1, #88C0D0)', boxShadow: '0 4px 16px rgba(136, 192, 208, 0.3)' }}>
              <span className="text-white font-bold text-sm tracking-tight">GJ</span>
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
              onClick={() => setIsDark(!isDark)}
              className="text-[#D8DEE9] hover:text-[#88C0D0]"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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