import { Badge } from "./ui/badge";
import { ReactNode } from "react";

interface PageHeaderProps {
  icon: ReactNode;
  badge: string;
  title: string;
  description: string;
  badgeColor?: string;
}

export function PageHeader({ icon, badge, title, description, badgeColor = "bg-blue-500/20 text-blue-300 border-blue-500/30" }: PageHeaderProps) {
  return (
    <div className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(94,129,172,0.06) 0%, rgba(136,192,208,0.04) 50%, rgba(129,161,193,0.06) 100%)' }}></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto px-2 sm:px-4">
          <Badge className={`mb-6 ${badgeColor}`}>
            {icon}
            {badge}
          </Badge>
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-bold">
            {title}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed sm:px-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}