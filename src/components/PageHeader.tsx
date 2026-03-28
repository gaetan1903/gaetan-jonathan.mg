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
    <div className="relative py-20">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(94,129,172,0.06) 0%, rgba(136,192,208,0.04) 50%, rgba(129,161,193,0.06) 100%)' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <Badge className={`mb-6 ${badgeColor}`}>
            {icon}
            {badge}
          </Badge>
          <h1 className="mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}