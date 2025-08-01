import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface SectionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  count: string;
  href: string;
  gradient: string;
  className?: string;
}

export default function SectionCard({ 
  title, 
  description, 
  icon, 
  count, 
  href, 
  gradient,
  className = "" 
}: SectionCardProps) {
  return (
    <Link href={href}>
      <div className={`card-hover bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer ${className}`}>
        <div className={`w-16 h-16 ${gradient} rounded-xl flex items-center justify-center mb-4 icon-glow`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium" style={{color: 'var(--primary)'}}>{count}</span>
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </Link>
  );
}
