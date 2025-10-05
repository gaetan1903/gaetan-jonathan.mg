import { PageHeader } from "../components/PageHeader";
import { CommunitySection } from "../components/CommunitySection";
import { Users } from "lucide-react";

export function CommunityPage() {
  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        icon={<Users className="mr-2 h-4 w-4" />}
        badge="Communautaire"
        title="Engagement Communautaire"
        description="Mes contributions à la communauté tech à travers l'open source, le mentorat et le partage de connaissances. Projets collaboratifs, événements organisés et impact sur l'écosystème développeur."
        badgeColor="bg-green-500/20 text-green-300 border-green-500/30"
      />
      <CommunitySection />
    </div>
  );
}