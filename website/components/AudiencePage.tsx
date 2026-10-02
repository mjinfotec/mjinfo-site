import Link from "next/link";
import { ArrowUpRight, Check, type LucideIcon } from "lucide-react";
import { ResourceSection, type ResourceGroup } from "@/components/ResourceSection";
type Item = { title:string; text:string; icon:LucideIcon; points?:string[] };
type Props = { label:string; title:string; intro:string; items:Item[]; note:string; message:string; singleLineTitle?:boolean; resources?:ResourceGroup; brands?:string[]; extra?:{title:string;text:string} };
export function AudiencePage({label,title,intro,items,note,message,extra,singleLineTitle=false,resources,brands}:Props) {
 const url = `https://wa.me/5542984187790?text=${encodeURIComponent(message)}`;
 return <div className="mj-inner-page container-premium"><section className={singleLineTitle ? "mj-page-intro mj-single-title" : "mj-page-intro"}><Link className="mj-breadcrumb" href="/">Início <span>/</span></Link><p className="mj-kicker">{label}</p><h1>{title}</h1><p className="mj-lead">{intro}</p></section><section className="mj-detail-grid" aria-label={`Conteúdo: ${label}`}>{items.map(item => <article className="mj-detail-card" key={item.title}><item.icon size={28}/><h2>{item.title}</h2><p>{item.text}</p>{item.points && <ul>{item.points.map(point => <li key={point}><Check size={16}/>{point}</li>)}</ul>}</article>)}</section>{extra && <aside className="mj-extra"><h2>{extra.title}</h2><p>{extra.text}</p></aside>}{brands && <section className="mj-brand-references"><h2>Marcas para sua próxima escolha</h2><p>Orientação para avaliar equipamentos, periféricos e software conforme sua necessidade. Disponibilidade e condições são verificadas em cada orçamento.</p><ul>{brands.map(brand => <li key={brand}>{brand}</li>)}</ul><small>Nomes apresentados como referência de produtos. Não representam vínculo de parceria oficial ou certificação. Marcas pertencem aos respectivos titulares.</small></section>}{resources && <ResourceSection {...resources}/>}<section className="mj-page-cta"><div><h2>Vamos entender sua necessidade?</h2><p>{note}</p></div><a href={url} target="_blank" rel="noreferrer" className="mj-button">Converse agora <ArrowUpRight size={18}/></a></section></div>;
}


