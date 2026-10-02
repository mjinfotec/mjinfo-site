import { stats } from "@/data/site";
import { Reveal } from "@/components/Motion";

export function Stats() {
  return (
    <section className="bg-white py-10">
      <div className="container-premium grid gap-4 md:grid-cols-4">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08}>
            <div className="rounded-lg border border-midnight/8 bg-mist p-6">
              <p className="text-4xl font-black text-ocean">
                {item.value}
                <span className="text-emerald">{item.suffix}</span>
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-graphite/72">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
