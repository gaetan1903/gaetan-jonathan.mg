import { PageHeader } from "../components/PageHeader";
import { ProfessionalSection } from "../components/ProfessionalSection";
import { Building2 } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export function ProfessionalPage() {
  useSEO({
    title: "Carrière Professionnelle",
    description: "Carrière professionnelle de Gaetan Jonathan BAKARY : 6+ ans d'expérience, Head of Development chez AccèsBanque, DevOps Team Lead, Product Manager. Compétences en Python, Linux, CI/CD, Django, VueJS. Formations et certifications.",
    keywords: "expériences professionnelles, carrière, DevOps, Product Manager, Team Lead, compétences techniques, formations, certifications, AccèsBanque, RELIA, ITS SARLU",
    canonical: "https://gaetan-jonathan.mg/professionnel"
  });

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        icon={<Building2 className="mr-2 h-4 w-4" />}
        badge="Professionnel"
        title="Parcours en Entreprise"
        description="De l’exécution technique à la responsabilité complète du delivery produit, j’occupe aujourd’hui un rôle de Responsable du Développement où je conçois des systèmes, structure les pratiques et accompagne les équipes pour livrer des produits fiables, scalables et alignés avec les enjeux business."
        badgeColor="bg-blue-500/20 text-blue-300 border-blue-500/30"
      />
      <ProfessionalSection />
    </div>
  );
}