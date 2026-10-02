import { AudiencePage } from "@/components/AudiencePage";
import { Compass, Handshake, MapPin, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Quem somos",
  description: "A MJ INFO une orientação de compra, soluções de TI e proteção digital com compromisso, clareza e atendimento próximo em Castro-PR e região."
};

export default function Page() {
  return <AudiencePage
    singleLineTitle label="Quem somos · MJ INFO"
    title="Confiança é com o tempo, não são palavras."
    intro="A MJ INFO acredita que confiança se constrói em cada orientação, em cada entrega e na responsabilidade com o que é proposto. Por isso, nosso trabalho começa entendendo a necessidade de quem nos procura e continua com soluções que fazem sentido para sua realidade."
    items={[
      { icon: Compass, title: "Tecnologia com propósito", text: "Unimos orientação de compra, equipamentos, licenciamento, backup e serviços de TI para ajudar empresas a investir com critério e cuidar da continuidade de sua operação." },
      { icon: Handshake, title: "Compromisso em cada relação", text: "Atendimento próximo, comunicação clara e escopo definido. Explicamos as opções, respeitamos o orçamento e assumimos compromissos compatíveis com o que podemos entregar." },
      { icon: ShieldCheck, title: "Segurança com responsabilidade", text: "A proteção dos dados e o respeito à privacidade fazem parte do nosso trabalho. Atuamos para reduzir riscos e orientar boas decisões, com ética e transparência." },
      { icon: MapPin, title: "Conexão com a nossa região", text: "Com base em Castro-PR, atendemos remotamente empresas e pessoas de Castro, Ponta Grossa, Piraí do Sul e região. Valorizamos relações duradouras e o conhecimento da realidade de cada cliente." }
    ]}
    extra={{ title: "Uma empresa. Cuidado em diferentes momentos.", text: "Na MJ INFO, orientamos a tecnologia do seu negócio. Com a linha MJ Proteção Digital, também apoiamos pessoas e famílias no cuidado com contas, dispositivos e hábitos online. Cada atendimento considera as necessidades e prioridades de quem está do outro lado." }}
    note="Conte sua necessidade. Vamos entender o cenário e construir um caminho claro para os próximos passos."
    message="Olá, quero conhecer melhor o atendimento da MJ INFO."
  />;
}

