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
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <p className="mono-label text-xs text-loom font-medium">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {desc && <p className="mt-4 text-ink/65 leading-relaxed">{desc}</p>}
    </div>
  );
}
