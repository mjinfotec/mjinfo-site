import { AudiencePage } from "@/components/AudiencePage";
import { Compass, BadgeCheck, Handshake, ListChecks } from "lucide-react";
export const metadata = {title:"Nossos diferenciais",description:"Orientação para reduzir o risco de decisões erradas em tecnologia: escopo claro, experiência prática e soluções adequadas ao orçamento."};
export default function Page() { return <AudiencePage singleLineTitle label="Nossos diferenciais" title="Entender antes de indicar. Explicar antes de executar." intro="Nosso diferencial é reduzir o risco de você tomar decisões erradas em tecnologia. A recomendação começa pela sua necessidade e termina em um caminho que você consegue compreender." items={[
 {icon:Compass,title:"Escolha com critério",text:"Avaliamos uso, compatibilidade e prioridades antes de indicar equipamentos, licenças ou serviços. Investir melhor começa por entender o que realmente faz falta."},
 {icon:BadgeCheck,title:"Experiência prática",text:"A experiência da MJ INFO reúne orientação de compra, revenda de equipamentos, suporte técnico e backup corporativo, aplicada às necessidades de empresas da região."},
 {icon:ListChecks,title:"Escopo transparente",text:"O que será realizado, as condições e os próximos passos são combinados antes da execução. Sem promessas de proteção absoluta ou recuperação garantida."},
 {icon:Handshake,title:"Compromisso e ética",text:"Respeito à privacidade, autorização para o atendimento e soluções compatíveis com sua realidade. Segurança com propósito e relacionamento de confiança."}
 ]} note="Uma boa decisão começa com uma conversa clara sobre a sua necessidade." message="Olá, quero orientação da MJ INFO para decidir melhor em tecnologia."/>; }

