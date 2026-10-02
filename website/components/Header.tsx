"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { navItems, whatsappUrl } from "@/data/site";
export function Header() {
  const [open,setOpen] = useState(false);
  const path = usePathname();
  return <header className="mj-header"><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><div className="mj-header-inner container-premium">
    <Link href="/" className="mj-brand" aria-label="MJ INFO — início"><img src="/images/logo-mj-info.png" alt=""/><span><strong>MJ INFO</strong><small>Tecnologia com propósito</small></span></Link>
    <nav className="mj-desktop-nav" aria-label="Navegação principal">{navItems.map(item => <Link key={item.href} href={item.href} aria-current={path === item.href ? "page" : undefined} className={path === item.href ? "active" : ""}>{item.label}</Link>)}</nav>
    <a href={whatsappUrl} className="mj-header-cta" target="_blank" rel="noreferrer">Vamos conversar <ArrowUpRight size={16}/></a>
    <button className="mj-menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mj-mobile-nav" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </div>{open && <nav id="mj-mobile-nav" className="mj-mobile-nav" aria-label="Navegação móvel">{navItems.map(item => <Link key={item.href} href={item.href} aria-current={path === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}<a href={whatsappUrl} target="_blank" rel="noreferrer">Conversar no WhatsApp</a></nav>}<nav className="mj-compact-tabs" aria-label="Áreas do site">{navItems.map(item => <Link key={item.href} href={item.href} className={path === item.href ? "active" : ""} aria-current={path === item.href ? "page" : undefined}>{item.label}</Link>)}</nav></header>;
}

