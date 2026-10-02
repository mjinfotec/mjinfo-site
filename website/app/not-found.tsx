import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mesh-light grid min-h-screen place-items-center pt-20">
      <div className="container-premium max-w-2xl text-center">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-ocean">404</p>
        <h1 className="text-4xl font-black text-midnight md:text-6xl">Pagina nao encontrada</h1>
        <p className="mt-5 leading-8 text-graphite/74">
          O endereco acessado nao esta disponivel. Volte para a Home da MJ INFO e continue sua
          jornada de protecao digital.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-emerald px-6 py-4 text-sm font-black text-midnight"
        >
          Voltar para Home
        </Link>
      </div>
    </section>
  );
}
