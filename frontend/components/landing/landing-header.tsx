import { CalendarIcon } from "./primitives/icons";

type LandingHeaderProps = {
  brandName: string;
};

export function LandingHeader({ brandName }: LandingHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4 py-4 md:py-5">
      <a href="#top" className="group inline-flex items-center gap-3">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-ink">
          {brandName}
        </span>
      </a>

      <nav className="flex items-center gap-5 md:gap-7">
        <a
          href="#menu"
          className="text-[11px] uppercase tracking-[0.22em] text-ink-soft hover:text-ink"
        >
          Menu
        </a>
        <a
          href="#reserve"
          className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-[11px] uppercase tracking-[0.22em] text-ink-soft hover:border-line hover:text-ink"
        >
          <CalendarIcon className="size-4" />
          Đặt bàn
        </a>
      </nav>
    </header>
  );
}
