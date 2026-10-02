import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="tech-card group flex min-h-[285px] flex-col rounded-lg p-7 transition hover:-translate-y-1 hover:shadow-premium"
    >
      <span className="mb-8 grid h-14 w-14 place-items-center rounded-lg bg-ocean/10 text-ocean transition group-hover:bg-ocean group-hover:text-white">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="text-2xl font-black text-midnight">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-graphite/74">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-ocean">
        Conhecer solucao <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
