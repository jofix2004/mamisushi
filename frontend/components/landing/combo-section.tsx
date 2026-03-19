import type { ComboItem } from "@/lib/landing-data";

import { ComboStack } from "./combo-stack.client";
import { SectionHeading } from "./primitives/section-heading";

type ComboSectionProps = {
  combos: ComboItem[];
};

export function ComboSection({ combos }: ComboSectionProps) {
  return (
    <section
      id="combos"
      className="px-[1.9rem] py-16 md:px-[3.8rem] md:py-20 xl:px-[6.2rem]"
    >
      <div className="mx-auto max-w-[1320px] space-y-10">
        <SectionHeading
          eyebrow="Combo để rủ nhau đi ăn"
          title="Gọi nhanh cho cả nhóm, không cần nghĩ nhiều"
          description="Chọn sẵn theo nhóm để gọi gọn hơn, đủ món hơn và chốt bàn nhanh hơn."
          emphasisSide="right"
        />
        <ComboStack combos={combos} />
      </div>
    </section>
  );
}
