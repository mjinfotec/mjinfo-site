import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Motion";
import { whatsappUrl } from "@/data/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaLabel?: string;
};

export function PageHero({ eyebrow, title, description, image, ctaLabel = "Falar com a MJ INFO" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-midnight pt-28 text-white">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-32" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/88 to-midnight/30" />
      </div>
      <div className="container-premium relative grid min-h-[520px] items-center py-20">
        <Reveal className="max-w-3xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-emerald">{eyebrow}</p>
          <h1 className="text-4xl font-black leading-[1.05] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={whatsappUrl} external variant="primary">
              {ctaLabel}
            </ButtonLink>
            <ButtonLink href="/diagnostico-digital" variant="light">
              Diagnostico digital
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
