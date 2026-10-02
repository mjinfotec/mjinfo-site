import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { pageImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Educacao Digital",
  description:
    "Educacao digital para pais, familias, idosos e equipes sobre golpes, senhas, WhatsApp, PIX, seguranca infantil e protecao online."
};

const tracks = [
  "Pais e seguranca infantil",
  "Idosos contra golpes digitais",
  "WhatsApp, PIX e engenharia social",
  "Senhas, contas e autenticacao",
  "Celulares mais seguros",
  "Rotina digital para equipes"
];

export default function EducacaoDigitalPage() {
  return (
    <>
      <PageHero
        eyebrow="Educacao Digital"
        title="Seguranca tambem se aprende com linguagem clara e exemplos reais."
        description="A MJ INFO cria orientacoes e treinamentos para que familias, idosos, pais e equipes reconhecam golpes, protejam contas e saibam o que fazer em situacoes de risco."
        image={pageImages.education}
      />
      <section className="mesh-light py-20">
        <div className="container-premium">
          <Reveal>
            <SectionHeading
              eyebrow="Trilhas"
              title="Conteudos práticos para transformar cuidado digital em rotina."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {tracks.map((track) => (
              <Reveal key={track}>
                <div className="tech-card rounded-lg p-7 text-xl font-black text-midnight">{track}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
