import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  const hoverStyles = hover
    ? "transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
    : "";

  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl shadow-sm p-6 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
