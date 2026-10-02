import { ButtonLink } from "@/components/ButtonLink";
import { whatsappUrl } from "@/data/site";

export function CtaBand() {
  return (
    <section className="dark-band py-20 text-white">
      <div className="container-premium grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-emerald">
            Proxima etapa
          </p>
          <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl">
            Sua vida digital merece a mesma protecao que voce daria a sua casa, familia e empresa.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={whatsappUrl} external variant="primary">
            Agendar conversa
          </ButtonLink>
          <ButtonLink href="/diagnostico-digital" variant="light">
            Fazer diagnostico
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
