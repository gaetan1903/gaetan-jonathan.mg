import { PageHeader } from "../components/PageHeader";
import { FreelanceSection } from "../components/FreelanceSection";
import { Briefcase } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { useLanguage } from "../i18n/LanguageContext";

export function FreelancePage() {
  const { t } = useLanguage();

  useSEO({
    title: t("freelance.seo.title"),
    description: t("freelance.seo.description"),
    keywords: "freelance, services, consulting, développement web, Django, VueJS, React, DevOps, CI/CD, Docker, formation, mentorat, audit technique, Madagascar",
    canonical: "https://gaetan-jonathan.mg/freelance"
  });

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        icon={<Briefcase className="mr-2 h-4 w-4" />}
        badge={t("freelance.header.badge")}
        title={t("freelance.header.title")}
        description={t("freelance.header.description")}
        badgeColor="bg-green-500/20 text-green-300 border-green-500/30"
      />
      <FreelanceSection />
    </div>
  );
}
