import { HeroSection } from "../components/HeroSection";
import { useSEO } from "../hooks/useSEO";

export function HomePage() {
  useSEO({
    title: "Accueil",
    description: "Portfolio de Gaëtan Jonathan - Head of Development Hub Center, Expert DevOps et Product Manager. 6+ ans d'expérience en développement, automatisation et gestion de produits numériques à Madagascar.",
    keywords: "Gaëtan Jonathan, développeur, DevOps, Head of Development, Product Manager, Python, Linux, Madagascar",
    canonical: "https://gaetan-jonathan.mg/"
  });

  return (
    <div className="min-h-screen">
      <HeroSection />
    </div>
  );
}