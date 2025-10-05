import { PageHeader } from "../components/PageHeader";
import { ProfessionalSection } from "../components/ProfessionalSection";
import { Building2 } from "lucide-react";

export function ProfessionalPage() {
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