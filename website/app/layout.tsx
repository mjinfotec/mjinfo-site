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
    "Equipamentos, licenciamento, backup corporativo e suporte remoto em Castro-PR e região. MJ Proteção Digital para pessoas, pais e adolescentes.",
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
      "Blindagem digital, protecao familiar online e consultoria tecnologica humanizada para familias e pequenas empresas.",
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


