import { HeroSection } from "../components/HeroSection";
import { useSEO } from "../hooks/useSEO";

export function HomePage() {
  useSEO({
    title: "Accueil",
    description: "Site professionnel de Gaetan Jonathan BAKARY - Head of Development Hub Center, Expert DevOps et Product Manager. Carrière, services freelance, engagement communautaire et blog technique. 6+ ans d'expérience à Madagascar.",
    keywords: "Gaetan Jonathan BAKARY, Gaetan Jonathan, site professionnel, développeur, DevOps, Head of Development, Product Manager, Python, Linux, services freelance, consulting, Madagascar",
    canonical: "https://gaetan-jonathan.mg/"
  });

  return (
    <div className="min-h-screen">
      <HeroSection />
    </div>
  );
}