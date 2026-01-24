import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "none";
  spacing?: "default" | "small";
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "white",
  spacing = "default",
  id,
}: SectionProps) {
  const bgStyles = background === "gray" ? "bg-gray-50" : background === "none" ? "" : "bg-white";
  const spacingStyles = spacing === "small" ? "section-spacing-sm" : "section-spacing";

  return (
    <section id={id} className={`${bgStyles} ${spacingStyles} ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  );
}
