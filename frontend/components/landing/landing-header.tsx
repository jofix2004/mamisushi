import Image from "next/image";

import logo from "@/asses/logo.png";

import { CalendarIcon } from "./primitives/icons";

type LandingHeaderProps = {
  brandName: string;
};

const navItems = [
  { label: "Nổi bật", href: "#featured" },
  { label: "Combo", href: "#combos" },
  { label: "Menu", href: "#menu" },
] as const;

export function LandingHeader({ brandName }: LandingHeaderProps) {
  return (
    <header className="flex flex-col gap-3 py-2 md:flex-row md:items-center md:justify-between md:py-3">
      <a href="#top" className="group inline-flex items-center gap-3 self-start">
        <span className="flex h-9 w-9 items-center justify-center overflow-hidden">
          <Image
            src={logo}
            alt={`${brandName} logo`}
            sizes="36px"
            className="h-full w-full object-contain"
            priority
          />
        </span>
        <span className="flex flex-col gap-0.5">
          <span className="text-[9px] uppercase tracking-[0.24em] text-ink-soft">
            Sushi Bar
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            {brandName}
          </span>
        </span>
      </a>

      <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 md:justify-end md:gap-x-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[10px] uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#reserve"
          className="inline-flex items-center gap-2 rounded-full border border-line/70 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ink-soft transition-colors hover:border-accent/30 hover:text-ink"
        >
          <CalendarIcon className="size-3.5" />
          Đặt bàn
        </a>
      </nav>
    </header>
  );
}
