import { AudiencePage } from "@/components/AudiencePage";
import { Laptop, DatabaseBackup, Network, Headset, PanelsTopLeft, Workflow, ChartNoAxesCombined } from "lucide-react";
export const metadata = {title:"Para sua empresa",description:"Equipamentos, licenciamento, backup, sistemas de gestão, automação e análise de dados com IA para empresas em Castro-PR e região."};
export default function Page() { return <AudiencePage brands={["Dell", "Logitech", "Microsoft", "Acer", "Lenovo"]} label="Para sua empresa · MJ INFO" title="Tecnologia alinhada ao seu negócio. Investimento com critério." intro="Para pequenas e médias empresas que precisam de um parceiro confiável, mesmo sem uma equipe interna de TI estruturada. Começamos pelo que sua operação precisa hoje." items={[
 {icon:Laptop,title:"Equipamentos & licenciamento",text:"Revenda com orientação técnica para reduzir compras inadequadas e ajudar a padronizar o ambiente.",points:["Escolha conforme uso e orçamento","Compatibilidade e possibilidades de expansão","Licenças adequadas à necessidade"]},
 {icon:DatabaseBackup,title:"Backup & continuidade",text:"Implantação e manutenção de backup corporativo, com planejamento das cópias e da recuperação.",points:["Avaliação dos dados e das prioridades","Rotinas e retenção definidas no escopo","Verificação e testes conforme contratação"]},
 {icon:Network,title:"Infraestrutura & segurança",text:"Organização do ambiente de TI para reduzir falhas e dar mais previsibilidade à operação.",points:["Redes e equipamentos","Organização de acessos","Planejamento de melhorias"]},
 {icon:Headset,title:"Suporte técnico",text:"Atendimento remoto especializado para investigar problemas e orientar a continuidade do trabalho.",points:["Suporte pontual ou acompanhamento contratado","Condições de atendimento combinadas","Explicação do problema e próximos passos"]}
 ]} additionalSection={{
 title:"Sistemas e IA para a rotina da sua empresa",
 intro:"Além das soluções de TI, a MJ INFO oferece revenda e implantação de sistemas de parceiros e desenvolvimento próprio. Entendemos sua necessidade para definir funcionalidades, integrações, prazos, valores e suporte em proposta.",
 items:[
  {icon:PanelsTopLeft,title:"Sistemas de gestão empresarial",text:"Organize os controles da operação com módulos adequados aos processos da sua empresa.",points:["Registro de ponto e RH","Estoque e financeiro","Implantação ou desenvolvimento conforme a necessidade"]},
  {icon:Workflow,title:"Automação de processos com IA",text:"Identifique tarefas repetitivas e conecte etapas da rotina com automações planejadas para o seu negócio.",points:["Entendimento do processo antes da implementação","Integrações conforme a viabilidade do projeto","Revisão humana nas etapas definidas"]},
  {icon:ChartNoAxesCombined,title:"Análise de dados com IA",text:"Transforme informações da operação em análises e relatórios que apoiem decisões com mais clareza.",points:["Organização das fontes de dados","Relatórios e indicadores conforme o objetivo","Permissões de acesso e validação das informações"]}
 ]
 }} note="Conte se precisa comprar, licenciar, proteger seus dados, organizar a TI ou melhorar processos com sistemas e IA. Vamos definir a prioridade juntos." message="Olá, quero conversar sobre tecnologia para minha empresa."/>; }

