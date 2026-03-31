import type { ComboItem } from "@/lib/landing-data";

import { ComboStack } from "./combo-stack.client";
import { Highlight, SectionHeading } from "./primitives/section-heading";

type ComboSectionProps = {
  combos: ComboItem[];
};

export function ComboSection({ combos }: ComboSectionProps) {
  return (
    <section
      id="combos"
      className="px-[1.9rem] py-12 md:px-[3.8rem] md:py-16 xl:px-[6.2rem]"
    >
      <div className="mx-auto max-w-[1320px] space-y-10">
        <SectionHeading
          eyebrow={
            <div className="inline-flex items-center justify-end gap-2">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              Combo để rủ nhau đi ăn
            </div>
          }
          title={
            <>
              Gọi nhanh cho cả nhóm, <Highlight>không cần nghĩ nhiều</Highlight>
            </>
          }
          description="Chọn sẵn theo nhóm để gọi gọn hơn, đủ món hơn và chốt bàn nhanh hơn."
          emphasisSide="right"
        />
        <ComboStack combos={combos} />
      </div>
    </section>
  );
}
