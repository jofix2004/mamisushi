import type { FeaturedItem, PromoLine } from "@/lib/landing-data";

import { FeaturedMenuRail } from "./featured-menu-rail.client";
import { SectionHeading } from "./primitives/section-heading";

type FeaturedMenuSectionProps = {
  items: FeaturedItem[];
  promos: PromoLine[];
};

export function FeaturedMenuSection({
  items,
  promos,
}: FeaturedMenuSectionProps) {
  return (
    <section
      id="featured"
      className="px-[1.9rem] py-12 md:px-[3.8rem] md:py-16 xl:px-[6.2rem]"
    >
      <div className="mx-auto max-w-[1320px] space-y-12">
        <SectionHeading
          eyebrow="Đang được gọi nhiều"
          title="Bắt đầu từ những món dễ gọi nhất"
          description="Nếu chưa biết gọi gì, cứ bắt đầu từ vài món dễ chọn và dễ chia cho cả bàn."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,6.4fr)_minmax(24rem,5.6fr)] xl:gap-14">
          <FeaturedMenuRail items={items} />

          <aside className="border-t border-line py-5 lg:pl-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              Khuyến mãi đang chạy
            </p>

            <div className="mt-6 grid gap-6">
              {promos.map((promo, index) => (
                <div key={promo.id} className="border-t border-line/80 pt-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-[15px] uppercase tracking-[0.24em] text-accent">
                      0{index + 1}
                    </p>
                    <span className="relative inline-flex items-center bg-accent px-4 py-1.5 text-sm font-semibold text-white before:absolute before:left-[-0.35rem] before:top-1/2 before:size-3 before:-translate-y-1/2 before:rounded-full before:bg-canvas after:absolute after:right-[-0.35rem] after:top-1/2 after:size-3 after:-translate-y-1/2 after:rounded-full after:bg-canvas">
                      {promo.discount}
                    </span>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                      {promo.label}
                    </p>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-5">
                    <div className="space-y-2">
                      <h3 className="text-[1.28rem] font-semibold tracking-[-0.03em] text-ink">
                        {promo.title}
                      </h3>
                      <p className="max-w-none text-pretty text-sm leading-6 text-ink-soft">
                        {promo.description}
                      </p>
                    </div>

                    <div className="shrink-0 md:text-right">
                      <p className="text-base font-medium text-ink-soft/60 line-through decoration-line/80">
                        {promo.oldPrice}
                      </p>
                      <p className="mt-1 text-[1.7rem] font-semibold leading-none tracking-[-0.02em] text-accent md:text-[1.85rem]">
                        {promo.newPrice}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#combos"
              className="mt-8 inline-flex items-center border-b border-transparent pb-1 text-sm font-medium text-ink-soft hover:border-line hover:text-ink"
            >
              Đi tiếp tới phần combo
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
