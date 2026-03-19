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
      className="px-[1.9rem] py-16 md:px-[3.8rem] md:py-20 xl:px-[6.2rem]"
    >
      <div className="mx-auto max-w-[1320px] space-y-12">
        <SectionHeading
          eyebrow="Đang được gọi nhiều"
          title="Bắt đầu từ những món dễ gọi nhất"
          description="Nếu chưa biết gọi gì, cứ bắt đầu từ vài món dễ chọn và dễ chia cho cả bàn."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(18rem,4.5fr)] xl:gap-14">
          <FeaturedMenuRail items={items} />

          <aside className="border-t border-line py-5 lg:pl-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              Nhịp khuyến mãi
            </p>

            <div className="mt-6 grid gap-6">
              {promos.map((promo, index) => (
                <div key={promo.id} className="border-t border-line/80 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-accent">
                    0{index + 1}
                  </p>
                  <p className="mt-3 max-w-[26ch] text-pretty text-base leading-8 text-ink">
                    {promo.text}
                  </p>
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
