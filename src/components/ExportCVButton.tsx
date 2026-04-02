import { Button } from "../components/ui/button";
import { exportLeadDevCV } from "../utils/exportLeadDevCV";
import { useLanguage } from "../i18n/LanguageContext";

export function ExportCVButton() {
    const { language } = useLanguage();
    return (
        <Button onClick={() => exportLeadDevCV(language)} className="bg-blue-600 hover:bg-blue-700 text-white">
            Générer mon CV Lead Dev (PDF)
        </Button>
    );
}
