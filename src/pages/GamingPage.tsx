import { PageHeader } from "../components/PageHeader";
import { GamingSection } from "../components/GamingSection";
import { Gamepad2 } from "lucide-react";

export function GamingPage() {
  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        icon={<Gamepad2 className="mr-2 h-4 w-4" />}
        badge="Gaming"
        title="Parcours Gaming CODM"
        description="Mon évolution dans l'univers esport de Call of Duty Mobile, du joueur occasionnel au compétiteur confirmé. Leadership d'équipe, achievements et les compétences transférables au développement."
        badgeColor="bg-orange-500/20 text-orange-300 border-orange-500/30"
      />
      <GamingSection />
    </div>
  );
}