import type { Metadata } from "next";
import { DiagnosticForm } from "@/components/DiagnosticForm";
import { PageHero } from "@/components/PageHero";
import { pageImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Diagnostico Digital",
  description:
    "Diagnostico digital da MJ INFO para mapear riscos em contas, celulares, WhatsApp, senhas, backups, criancas online e pequenas empresas."
};

export default function DiagnosticoDigitalPage() {
  return (
    <>
      <PageHero
        eyebrow="Diagnostico Digital"
        title="Um raio-x completo da sua seguranca digital."
        description="Identifique fragilidades em contas, senhas, celulares, backups, criancas online, WhatsApp, GOV.BR e rotinas empresariais com acompanhamento humano."
        image={pageImages.security}
        ctaLabel="Solicitar diagnostico"
      />
      <DiagnosticForm />
    </>
  );
}
