import { ArrowUpRight, ShieldCheck } from "lucide-react";
export type ResourceGroup = {title:string;intro:string;items:{name:string;text:string;url:string}[];note:string};
export function ResourceSection({title,intro,items,note}:ResourceGroup) {
 return <section className="mj-resources" aria-label={title}><div className="mj-resource-intro"><p className="mj-kicker">Informação para escolher melhor</p><h2>{title}</h2><p>{intro}</p></div><div className="mj-resource-grid">{items.map(item => <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="mj-resource-card"><ShieldCheck size={21} aria-hidden="true"/><h3>{item.name}</h3><p>{item.text}</p><span>Conhecer no site oficial <ArrowUpRight size={16}/></span></a>)}</div><p className="mj-resource-note">{note}</p></section>;
}
