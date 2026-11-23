import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://mjinfo.tec.br"),
  title: {
    default: "MJ INFO | Tecnologia para Empresas e Proteção Digital",
    template: "%s | MJ INFO"
  },
  description:
    "Equipamentos, licenças, backup, sistemas, automação e dados com IA para empresas em Castro-PR e região. Proteção digital para pessoas e famílias.",
  keywords: [
    "protecao digital em Castro PR",
    "seguranca digital familiar",
    "blindagem digital",
    "protecao contra golpes WhatsApp",
    "protecao digital para idosos",
    "protecao online para criancas",
    "suporte TI em Castro PR",
    "seguranca digital para empresas"
  ],
  openGraph: {
    title: "MJ INFO | Tecnologia para Empresas e Proteção Digital",
    description:
      "Tecnologia para empresas: equipamentos, licenciamento, backup, sistemas, automação e análise de dados com IA. Proteção digital para pessoas e famílias.",
    url: "https://mjinfo.tec.br",
    siteName: "MJ INFO",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}


