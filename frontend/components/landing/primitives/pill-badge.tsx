type PillBadgeProps = {
  label: string;
  tone?: "accent" | "neutral" | "soft";
};

export function PillBadge({
  label,
  tone = "neutral",
}: PillBadgeProps) {
  const toneClass =
    tone === "accent"
      ? "border-accent bg-accent text-white"
      : tone === "soft"
        ? "border-accent-soft bg-accent-soft/75 text-accent-deep"
        : "border-line bg-transparent text-ink-soft";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ${toneClass}`}
    >
      {label}
    </span>
  );
}
