import { PageHeader } from "../components/PageHeader";
import { GamingSection } from "../components/GamingSection";
import { Gamepad2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function GamingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        icon={<Gamepad2 className="mr-2 h-4 w-4" />}
        badge={t("gaming.header.badge")}
        title={t("gaming.header.title")}
        description={t("gaming.header.description")}
        badgeColor="bg-orange-500/20 text-orange-300 border-orange-500/30"
      />
      <GamingSection />
    </div>
  );
}
