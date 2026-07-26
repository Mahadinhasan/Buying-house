export default function StampBadge({
  eyebrow,
  main,
  sub,
  size = 108,
  className = "text-loom",
}: {
  eyebrow: string;
  main: string;
  sub: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`stamp ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="mono-label text-[9px] leading-tight">{eyebrow}</span>
      <span className="font-display text-lg font-semibold leading-none mt-0.5">
        {main}
      </span>
      <span className="mono-label text-[8px] leading-tight mt-0.5">{sub}</span>
    </div>
  );
}
