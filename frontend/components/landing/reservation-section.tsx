import type { Branch } from "@/lib/landing-data";

import { ChatIcon, PhoneIcon } from "./primitives/icons";
import { ReservationForm } from "./reservation-form.client";

type ReservationSectionProps = {
  branches: Branch[];
  quickActions: Array<{
    id: string;
    label: string;
    href: string;
  }>;
};

const actionIcons = {
  phone: PhoneIcon,
  zalo: ChatIcon,
  messenger: ChatIcon,
} as const;

export function ReservationSection({
  branches,
  quickActions,
}: ReservationSectionProps) {
  const [featuredBranch, ...secondaryBranches] = branches;

  return (
    <section
      id="reserve"
      className="px-[1.9rem] py-16 md:px-[3.8rem] md:py-20 xl:px-[6.2rem]"
    >
      <div className="mx-auto max-w-[1320px] space-y-8">
        <div className="mx-auto max-w-[34rem] space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-soft">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            Đặt bàn trước
          </div>
          <h2 className="mx-auto max-w-[13ch] text-balance text-[2.65rem] font-semibold tracking-[-0.05em] text-ink md:max-w-[14ch] md:text-[4.45rem] md:leading-[0.94]">
            Đặt nhanh.{" "}
            <span className="relative inline-block text-accent">
              <span className="relative z-10">Quán gọi lại.</span>
              <span className="absolute bottom-[0.15em] left-[-2%] -z-10 h-[0.25em] w-[104%] -rotate-1 rounded-sm bg-accent/20" />
            </span>
          </h2>
        </div>

        <div className="grid gap-5 border-y border-line py-5 lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              Chi nhánh nổi bật
            </p>
            <p className="text-[1.45rem] font-semibold tracking-[-0.04em] text-ink">
              {featuredBranch.name}
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
            <div className="space-y-3">
              <p className="max-w-[58ch] text-sm leading-8 text-ink">
                {featuredBranch.address}
                {" / "}
                <span className="text-ink-soft">{featuredBranch.openHours}</span>
              </p>
              {secondaryBranches.length > 0 ? (
                <p className="text-sm leading-7 text-ink-soft">
                  + {secondaryBranches.length} chi nhánh khác
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {quickActions.map((action) => {
                const Icon = actionIcons[action.id as keyof typeof actionIcons];

                return (
                  <a
                    key={action.id}
                    href={action.href}
                    className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm font-medium text-ink-soft hover:border-line hover:text-ink"
                  >
                    <Icon className="size-[18px] text-accent" />
                    {action.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <ReservationForm branches={branches} />
      </div>
    </section>
  );
}
