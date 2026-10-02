import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { navItems, whatsappUrl } from "@/data/site";
export function Footer() { return <footer className="mj-footer"><div className="container-premium mj-footer-top"><Link href="/" className="mj-brand"><img src="/images/logo-mj-info.png" alt=""/><span><strong>MJ INFO</strong><small>Confiança e segurança com propósito.</small></span></Link><div className="mj-footer-contact"><a href={whatsappUrl} target="_blank" rel="noreferrer">Converse agora <ArrowUpRight size={16}/></a><a href="mailto:comercial@mjinfo.tec.br"><Mail size={16}/> comercial@mjinfo.tec.br</a><a href="tel:+5542984187790"><Phone size={16}/> (42) 98418-7790</a></div></div><div className="container-premium mj-footer-bottom"><p>© 2026 MJ INFO · Castro-PR · Atendimento remoto</p><nav aria-label="Links do rodapé">{navItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div></footer>; }

