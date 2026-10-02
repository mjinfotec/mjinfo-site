import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className = ""
}: ButtonLinkProps) {
  const classes = {
    primary:
      "bg-emerald text-midnight shadow-glow hover:bg-white hover:text-midnight",
    secondary:
      "border border-midnight/15 bg-white text-midnight hover:border-emerald hover:text-ocean",
    light:
      "border border-white/25 bg-white/10 text-white hover:bg-white hover:text-midnight"
  };

  const content = (
    <span
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition ${classes[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
