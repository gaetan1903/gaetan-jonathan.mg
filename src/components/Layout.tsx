import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { useLanguage } from "../i18n/LanguageContext";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen text-white" style={{ background: 'linear-gradient(135deg, #161a21 0%, #191D24 40%, #1a2230 70%, #191D24 100%)' }}>
      <Navigation />
      <main>{children}</main>

      {/* Footer */}
      <footer className="py-16 border-t backdrop-blur-md" style={{ borderColor: 'rgba(136, 192, 208, 0.12)', background: 'rgba(30, 33, 41, 0.6)' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Logo & Title Section */}
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #5E81AC, #81A1C1, #88C0D0)', boxShadow: '0 8px 24px rgba(136, 192, 208, 0.25)' }}>
                <span className="text-white font-bold text-lg tracking-tight">GJ</span>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Gaetan Jonathan BAKARY</h3>
              <p className="text-gray-300 text-sm">
                {t("footer.role")}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {t("footer.description")}
              </p>
            </div>

            {/* Copyright Section */}
            <div className="pt-8 text-center" style={{ borderTop: '1px solid rgba(136, 192, 208, 0.12)' }}>
              <p className="text-gray-400 text-sm">
                {t("footer.copyright")}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                {t("footer.madeWith")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}