type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`mb-4 text-sm font-black uppercase tracking-[0.22em] ${light ? "text-emerald" : "text-ocean"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-black leading-tight md:text-5xl ${light ? "text-white" : "text-midnight"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-white/72" : "text-graphite/75"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
