import { PageHeader } from "../components/PageHeader";
import { FreelanceSection } from "../components/FreelanceSection";
import { Briefcase } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export function FreelancePage() {
  useSEO({
    title: "Services Freelance & Consulting",
    description: "Services freelance de Gaetan Jonathan BAKARY : Développement web full-stack (Django, VueJS, React), DevOps & CI/CD, consulting technique, audit de code, formation et mentorat. Disponible pour projets à Madagascar et à distance.",
    keywords: "freelance, services, consulting, développement web, Django, VueJS, React, DevOps, CI/CD, Docker, formation, mentorat, audit technique, Madagascar",
    canonical: "https://gaetan-jonathan.mg/freelance"
  });

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        icon={<Briefcase className="mr-2 h-4 w-4" />}
        badge="Freelance"
        title="Développement Freelance"
        description="Services de développement web et mobile en tant qu'indépendant. Création de solutions sur mesure pour startups, PME et entrepreneurs avec une approche agile et orientée résultats."
        badgeColor="bg-green-500/20 text-green-300 border-green-500/30"
      />
      <FreelanceSection />
    </div>
  );
}