type PriceLockupProps = {
  label?: string;
  value: string;
};

export function PriceLockup({
  label = "Gia combo",
  value,
}: PriceLockupProps) {
  return (
    <div className="inline-flex min-w-[10rem] flex-col rounded-[1.5rem] border border-accent-soft bg-accent-soft/55 px-4 py-3">
      <span className="text-[11px] uppercase tracking-[0.2em] text-accent-deep/80">
        {label}
      </span>
      <strong className="mt-2 text-2xl font-semibold tracking-tight text-accent-deep md:text-3xl">
        {value}
      </strong>
    </div>
  );
}
