import type { MenuGroup } from "@/lib/landing-data";

import { MenuGroupRail } from "./menu-group-rail.client";
import { SectionHeading } from "./primitives/section-heading";

type MenuExplorerSectionProps = {
  groups: MenuGroup[];
};

export function MenuExplorerSection({ groups }: MenuExplorerSectionProps) {
  return (
    <section
      id="menu"
      className="px-[1.9rem] py-16 md:px-[3.8rem] md:py-20 xl:px-[6.2rem]"
    >
      <div className="mx-auto max-w-[1320px] space-y-12">
        <SectionHeading
          eyebrow="Khám phá menu"
          title="Xem gần như full menu theo nhóm món"
          description="Chia theo nhóm để xem nhanh hơn, chọn dễ hơn và không bị rối mắt."
        />

        <div className="grid gap-14">
          {groups.map((group, index) => (
            <MenuGroupRail key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
