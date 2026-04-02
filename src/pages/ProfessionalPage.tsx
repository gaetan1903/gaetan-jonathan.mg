import { PageHeader } from "../components/PageHeader";
import { ProfessionalSection } from "../components/ProfessionalSection";
import { Building2 } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { useLanguage } from "../i18n/LanguageContext";

export function ProfessionalPage() {
  const { t } = useLanguage();

  useSEO({
    title: t("pro.seo.title"),
    description: t("pro.seo.description"),
    keywords: "expériences professionnelles, carrière, DevOps, Product Manager, Team Lead, compétences techniques, formations, certifications, AccèsBanque, RELIA, ITS SARLU",
    canonical: "https://gaetan-jonathan.mg/professionnel"
  });

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        icon={<Building2 className="mr-2 h-4 w-4" />}
        badge={t("pro.header.badge")}
        title={t("pro.header.title")}
        description={t("pro.header.description")}
        badgeColor="bg-blue-500/20 text-blue-300 border-blue-500/30"
      />
      <ProfessionalSection />
    </div>
  );
}
