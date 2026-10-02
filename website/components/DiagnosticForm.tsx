import { ButtonLink } from "@/components/ButtonLink";
import { digitalChecklist, whatsappUrl } from "@/data/site";

export function DiagnosticForm() {
  return (
    <section className="mesh-light py-20">
      <div className="container-premium grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-ocean">
            Diagnostico Digital
          </p>
          <h2 className="text-3xl font-black leading-tight text-midnight md:text-5xl">
            Descubra os pontos vulneraveis da sua vida digital.
          </h2>
          <p className="mt-5 text-base leading-8 text-graphite/76">
            O diagnostico da MJ INFO analisa contas, dispositivos, senhas, backups, exposicao
            familiar e rotinas empresariais para transformar risco invisivel em plano de acao.
          </p>
          <div className="mt-8">
            <ButtonLink href={whatsappUrl} external>
              Quero meu diagnostico
            </ButtonLink>
          </div>
        </div>
        <div className="tech-card rounded-lg p-6 md:p-8">
          <div className="grid gap-4">
            {digitalChecklist.map((item) => (
              <div key={item.label} className="flex gap-4 rounded-lg bg-white p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald/12 text-emerald">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold leading-6 text-graphite">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
