export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-loom/10 border border-loom/20 text-loom text-xs font-semibold mono-label mb-3 ${align === "center" ? "mx-auto" : ""}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-loom" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-ink leading-[1.15]">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl">{desc}</p>}
    </div>
  );
}
