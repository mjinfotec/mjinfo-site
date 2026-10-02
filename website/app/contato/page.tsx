import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { contactChannels, pageImages, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a MJ INFO para diagnostico digital, protecao familiar, blindagem de contas e seguranca para empresas em Castro PR."
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos entender sua necessidade de tecnologia."
        description="Orientação para empresas e proteção digital pessoal e familiar. Atendimento remoto a partir de Castro-PR."
        image={pageImages.consulting}
      />
      <section className="mesh-light py-20">
        <div className="container-premium grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="tech-card rounded-lg p-8">
              <h2 className="text-3xl font-black text-midnight">Atendimento consultivo</h2>
              <p className="mt-4 leading-8 text-graphite/74">
                Envie uma mensagem contando se a necessidade e pessoal, familiar ou empresarial.
                A MJ INFO orienta os primeiros passos e agenda o diagnostico quando necessario.
              </p>
              <div className="mt-8">
                <ButtonLink href={whatsappUrl} external>
                  Chamar no WhatsApp
                </ButtonLink>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactChannels.map((channel) => (
              <Reveal key={channel.label}>
                <div className="tech-card rounded-lg p-6">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-ocean/10 text-ocean">
                    <channel.icon className="h-6 w-6" />
                  </span>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald">
                    {channel.label}
                  </p>
                  <p className="mt-2 text-xl font-black text-midnight">{channel.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

