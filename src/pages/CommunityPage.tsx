import { PageHeader } from "../components/PageHeader";
import { CommunitySection } from "../components/CommunitySection";
import { Users } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { useLanguage } from "../i18n/LanguageContext";

export function CommunityPage() {
  const { t } = useLanguage();

  useSEO({
    title: t("community.seo.title"),
    description: t("community.seo.description"),
    keywords: "engagement communautaire, leadership, mentorat, iTeam-$, GDSC, Why Not Linux, Django Girls, DevFest, événements tech, formation, communauté, Madagascar",
    canonical: "https://gaetan-jonathan.mg/communautaire"
  });

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        icon={<Users className="mr-2 h-4 w-4" />}
        badge={t("community.header.badge")}
        title={t("community.header.title")}
        description={t("community.header.description")}
        badgeColor="bg-green-500/20 text-green-300 border-green-500/30"
      />
      <CommunitySection />
    </div>
  );
}
