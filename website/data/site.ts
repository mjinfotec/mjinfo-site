import {
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  CloudCog,
  DatabaseBackup,
  Fingerprint,
  HeartHandshake,
  Home,
  KeyRound,
  Laptop,
  LockKeyhole,
  MessageCircleWarning,
  Radar,
  ShieldCheck,
  Smartphone,
  UserRoundCheck
} from "lucide-react";

export const whatsappUrl =
  "https://wa.me/5542984187790?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20da%20MJ%20INFO.";

export const navItems = [
 { label: "Quem somos", href: "/quem-somos" },
 { label: "Nossos diferenciais", href: "/nossos-diferenciais" },
 { label: "Para sua empresa", href: "/para-sua-empresa" },
 { label: "Para você", href: "/para-voce" },
 { label: "Para sua família", href: "/para-sua-familia" }
];

export const services = [
  {
    title: "Blindagem Digital",
    description:
      "Protecao de contas, WhatsApp, e-mail, senhas, dispositivos e acessos importantes com metodo claro e acompanhamento humano.",
    href: "/blindagem-digital",
    icon: ShieldCheck
  },
  {
    title: "Protecao Familiar",
    description:
      "Orientacao para pais, controle parental, seguranca em jogos, redes sociais, celulares e rotina digital das criancas.",
    href: "/protecao-familiar",
    icon: Home
  },
  {
    title: "TI para Empresas",
    description:
      "Organizacao, backup, seguranca, contas, dispositivos e suporte recorrente para pequenos negocios que precisam de confianca.",
    href: "/protecao-para-empresas",
    icon: Building2
  },
  {
    title: "Educacao Digital",
    description:
      "Treinamentos práticos para familias, idosos, pais e equipes aprenderem a reconhecer riscos e agir com seguranca.",
    href: "/educacao-digital",
    icon: BookOpenCheck
  }
];

export const focusAreas = [
  "WhatsApp seguro",
  "Autenticacao em duas etapas",
  "Organizacao de senhas",
  "Backup pessoal e empresarial",
  "Recuperacao de acesso",
  "Protecao GOV.BR",
  "Seguranca para idosos",
  "Orientacao para pais"
];

export const stats = [
  { value: "12+", suffix: "", label: "anos de experiência prática do responsável" },
  { value: "TI", suffix: "", label: "escolhas alinhadas ao seu negócio" },
  { value: "Remoto", suffix: "", label: "atendimento com escopo definido" },
  { value: "Castro", suffix: "", label: "base regional no Paraná" }
];

export const timeline = [
  {
    title: "Diagnostico",
    description:
      "Mapeamos contas, celulares, senhas, backups, riscos familiares e pontos criticos do dia a dia.",
    icon: Radar
  },
  {
    title: "Plano de Blindagem",
    description:
      "Priorizamos o que precisa ser protegido primeiro e definimos um plano simples, pratico e executavel.",
    icon: Fingerprint
  },
  {
    title: "Implementacao",
    description:
      "Ativamos protecoes, organizamos acessos, configuramos dispositivos e reduzimos exposicoes desnecessarias.",
    icon: CloudCog
  },
  {
    title: "Orientacao Continua",
    description:
      "Voce recebe orientacao para manter a rotina digital segura, com linguagem clara e suporte humano.",
    icon: HeartHandshake
  }
];

export const familyRisks = [
  { title: "Controle parental", icon: LockKeyhole },
  { title: "Tempo de tela", icon: Clock3 },
  { title: "Golpes em jogos", icon: MessageCircleWarning },
  { title: "YouTube, TikTok e Discord", icon: Smartphone },
  { title: "Roblox e exposicao online", icon: Laptop },
  { title: "Cyberbullying", icon: UserRoundCheck },
  { title: "Conteudo adulto", icon: ShieldCheck },
  { title: "Engenharia social", icon: KeyRound }
];

export const testimonials: { quote: string; author: string; role: string }[] = [];

export const faqs = [
  {
    question: "A MJ INFO e uma assistencia tecnica?",
    answer:
      "A MJ INFO vai alem da assistencia. Atuamos como consultoria de protecao digital, combinando suporte tecnico, seguranca, organizacao e educacao para pessoas, familias e empresas."
  },
  {
    question: "O diagnostico digital e indicado para familias?",
    answer:
      "Sim. Ele e ideal para pais que querem entender riscos em celulares, jogos, redes sociais, senhas, contas e exposicao online dos filhos."
  },
  {
    question: "Vocês ajudam com WhatsApp hackeado?",
    answer:
      "Ajudamos na orientacao de recuperacao, revisao de seguranca, ativacao de protecoes e organizacao para reduzir o risco de novos golpes."
  },
  {
    question: "Atendem pequenas empresas?",
    answer:
      "Sim. Organizamos acessos, backups, e-mails, dispositivos, politicas simples de seguranca e suporte de TI para pequenos negocios."
  }
];

export const blogPosts = [
  {
    slug: "como-proteger-seu-whatsapp",
    title: "Como proteger seu WhatsApp contra golpes",
    category: "Blindagem Digital",
    readTime: "6 min",
    excerpt:
      "Veja as configuracoes essenciais para reduzir riscos de clonagem, engenharia social e perda de acesso."
  },
  {
    slug: "autenticacao-em-duas-etapas",
    title: "Como ativar autenticacao em duas etapas",
    category: "Contas Online",
    readTime: "5 min",
    excerpt:
      "Um guia simples para proteger e-mails, redes sociais, bancos digitais e contas importantes da familia."
  },
  {
    slug: "proteger-criancas-online",
    title: "Como proteger criancas online",
    category: "Protecao Familiar",
    readTime: "8 min",
    excerpt:
      "Controle parental, conversas familiares, jogos, redes sociais e limites saudaveis para a vida digital."
  },
  {
    slug: "evitar-golpes-via-pix",
    title: "Como evitar golpes via PIX",
    category: "Golpes Digitais",
    readTime: "6 min",
    excerpt:
      "Sinais de alerta, cuidados com links, comprovantes falsos e pedidos urgentes enviados por mensagem."
  },
  {
    slug: "proteger-idosos-contra-golpes",
    title: "Como proteger idosos contra golpes digitais",
    category: "Familia",
    readTime: "7 min",
    excerpt:
      "Medidas praticas para deixar celular, WhatsApp, bancos e contatos de emergencia mais seguros."
  },
  {
    slug: "conta-hackeada-o-que-fazer",
    title: "O que fazer quando uma conta e hackeada",
    category: "Recuperacao",
    readTime: "5 min",
    excerpt:
      "Passos imediatos para conter danos, recuperar acesso e evitar que o invasor alcance outras contas."
  },
  {
    slug: "organizar-senhas-da-familia",
    title: "Como organizar senhas da familia",
    category: "Organizacao Digital",
    readTime: "6 min",
    excerpt:
      "Boas praticas para guardar acessos, compartilhar com seguranca e evitar perda de contas importantes."
  },
  {
    slug: "seguranca-digital-empresarios",
    title: "Seguranca digital para empresarios",
    category: "Empresas",
    readTime: "7 min",
    excerpt:
      "Como proteger e-mail, financeiro, documentos, dispositivos e acessos administrativos do negocio."
  },
  {
    slug: "proteger-gov-br",
    title: "Como proteger o GOV.BR",
    category: "Identidade Digital",
    readTime: "5 min",
    excerpt:
      "Cuidados para proteger uma das contas mais importantes da vida digital de qualquer brasileiro."
  },
  {
    slug: "seguranca-android-iphone",
    title: "Seguranca no celular Android e iPhone",
    category: "Dispositivos",
    readTime: "8 min",
    excerpt:
      "Ajustes recomendados para manter seu smartphone mais protegido contra perda, invasoes e golpes."
  }
];

export const enterpriseItems = [
  "Equipamentos e orientação de compra",
  "Licenciamento de software",
  "Backup local e em nuvem",
  "E-mails e acessos administrativos",
  "Protecao de WhatsApp comercial",
  "Organizacao de senhas da equipe",
  "Dispositivos de trabalho",
  "Rotina de suporte e prevencao"
];

export const digitalChecklist = [
  { label: "Tenho autenticacao em duas etapas em todas as contas importantes.", icon: CheckCircle2 },
  { label: "Minha familia sabe identificar links falsos e pedidos urgentes.", icon: CheckCircle2 },
  { label: "Meus backups sao testados e acessiveis quando preciso.", icon: CheckCircle2 },
  { label: "Meus filhos usam redes, jogos e videos com orientacao clara.", icon: CheckCircle2 },
  { label: "Minha empresa sabe quem acessa e-mails, arquivos e sistemas.", icon: CheckCircle2 },
  { label: "Tenho um plano para recuperar acessos se algo acontecer.", icon: CheckCircle2 }
];

export const pageImages = {
  family:
    "/images/guia-tecnologico.png",
  business:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=82",
  security:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=82",
  consulting:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=82",
  education:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=82"
};

export const contactChannels = [
  { label: "WhatsApp consultivo", value: "(42) 98418-7790", icon: Smartphone },
  { label: "Dominio oficial", value: "mjinfo.tec.br", icon: BriefcaseBusiness },
  { label: "Atendimento", value: "Castro PR e remoto", icon: UserRoundCheck },
  { label: "Foco", value: "Empresas e famílias", icon: DatabaseBackup }
];



