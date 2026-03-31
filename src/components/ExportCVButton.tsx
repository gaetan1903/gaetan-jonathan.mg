import { Button } from "../components/ui/button";
import { exportLeadDevCV } from "../utils/exportLeadDevCV";

export function ExportCVButton() {
    return (
        <Button onClick={exportLeadDevCV} className="bg-blue-600 hover:bg-blue-700 text-white">
            Générer mon CV Lead Dev (PDF)
        </Button>
    );
}
