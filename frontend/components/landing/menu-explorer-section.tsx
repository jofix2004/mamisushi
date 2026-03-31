import type { MenuGroup } from "@/lib/landing-data";

import { MenuGroupRail } from "./menu-group-rail.client";
import { Highlight, SectionHeading } from "./primitives/section-heading";

type MenuExplorerSectionProps = {
  groups: MenuGroup[];
};

export function MenuExplorerSection({ groups }: MenuExplorerSectionProps) {
  return (
    <section
      id="menu"
      className="px-[1.9rem] py-12 md:px-[3.8rem] md:py-16 xl:px-[6.2rem]"
    >
      <div className="mx-auto max-w-[1320px] space-y-12">
        <SectionHeading
          eyebrow={
            <div className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              Khám phá menu
            </div>
          }
          title={
            <>
              Menu chia sẵn theo <Highlight>nhóm món</Highlight>
            </>
          }
          description="Muốn ăn gì thì xem đúng nhóm đó trước, đỡ phải lướt cả menu."
        />

        <div className="grid gap-30 md:gap-36">
          {groups.map((group, index) => (
            <MenuGroupRail key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
