import { PageHeader } from "../components/PageHeader";
import { ProfessionalSection } from "../components/ProfessionalSection";
import { Building2 } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export function ProfessionalPage() {
  useSEO({
    title: "Parcours Professionnel",
    description: "Découvrez mon parcours professionnel : Head of Development Hub Center chez AccèsBanque Madagascar, DevOps Team Lead, Digital Product Manager. 6+ années d'expérience en développement et gestion d'équipes.",
    keywords: "expérience professionnelle, AccèsBanque Madagascar, DevOps, Product Manager, développement web, gestion d'équipe",
    canonical: "https://gaetan-jonathan.mg/professionnel"
  });

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        icon={<Building2 className="mr-2 h-4 w-4" />}
        badge="Professionnel"
        title="Parcours en Entreprise"
        description="Mon évolution professionnelle au sein d'entreprises, de mes premiers pas en tant que stagiaire à mon rôle actuel de développeur senior. Expériences, compétences acquises et projets marquants."
        badgeColor="bg-blue-500/20 text-blue-300 border-blue-500/30"
      />
      <ProfessionalSection />
    </div>
  );
}