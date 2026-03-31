"use client";

import type { CSSProperties } from "react";

import Image from "next/image";

import type { MenuGroup, MenuItem } from "@/lib/landing-data";
import { sushiImages } from "@/lib/sushi-image-map";

import { useSpotlight } from "./primitives/spotlight-context.client";
import { useRailFocus } from "./primitives/use-rail-focus";

type MenuGroupRailProps = {
  group: MenuGroup;
  index: number;
};

function formatOrdinal(value: number) {
  return String(value).padStart(2, "0");
}

function GroupIntro({
  group,
  index,
  align = "left",
  className = "",
}: {
  group: MenuGroup;
  index: number;
  align?: "left" | "right";
  className?: string;
}) {
  const isRight = align === "right";

  return (
    <div className={`space-y-4 ${className}`}>
      <p className="text-[15px] uppercase tracking-[0.24em] text-accent">
        {formatOrdinal(index + 1)}
      </p>
      <h3
        className={`max-w-[15ch] text-balance text-[2.25rem] font-semibold tracking-[-0.05em] text-ink md:max-w-[16ch] md:text-[3rem] md:leading-[0.94] ${isRight ? "lg:ml-auto" : ""}`}
      >
        {group.title}
      </h3>
      <p
        className={`max-w-[36ch] text-pretty text-base leading-8 text-ink-soft ${isRight ? "lg:ml-auto" : ""}`}
      >
        {group.description}
      </p>
      {group.priceFrom ? (
        <p
          className={`text-[1.12rem] font-medium leading-none text-accent md:text-[1.28rem] ${isRight ? "lg:ml-auto" : ""}`}
        >
          {group.priceFrom}
        </p>
      ) : null}
    </div>
  );
}

function ItemVisual({
  item,
  heightClass,
}: {
  item: MenuItem;
  heightClass: string;
}) {
  const { setHoveredItem } = useSpotlight();
  
  return (
    <div 
      className={`group/item relative ${heightClass} cursor-pointer`}
      onClick={() => setHoveredItem(item)}
    >
      <div className="absolute bottom-[13%] left-1/2 h-7 w-[58%] -translate-x-1/2 rotate-[9deg] rounded-full bg-[rgba(63,41,34,0.18)] blur-[17px] transition-opacity duration-500 ease-out group-hover/item:opacity-55 md:h-8 md:blur-[19px]" />
      <div className="relative h-full transition-transform duration-500 ease-out group-hover/item:-translate-y-2">
        <Image
          src={sushiImages[item.imageId]}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 220px, 360px"
          className="object-contain object-center p-2 scale-[1.25] drop-shadow-[0_22px_26px_rgba(40,26,20,0.12)]"
        />

        {/* Explicit Click Hint Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all duration-300 bg-canvas/40 backdrop-blur-[2px] rounded-full scale-95 group-hover/item:scale-100">
          <div className="flex items-center gap-2 bg-white text-accent border border-line/60 px-4 py-2 rounded-full shadow-[0_8px_30px_rgba(205,82,56,0.15)]">
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Bấm khám phá</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpotlightGroup({ group, index }: MenuGroupRailProps) {
  const [hero, ...rest] = group.items;
  const sectionIndex = formatOrdinal(index + 1);

  return (
    <div className="grid gap-10 border-t border-line pt-10 md:pt-12 lg:grid-cols-12 lg:gap-14">
      <div className="relative grid gap-8 lg:col-span-8 lg:order-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <p className="pointer-events-none absolute right-0 top-0 hidden text-[clamp(4rem,10vw,7.5rem)] font-semibold tracking-[-0.08em] text-ink/[0.05] lg:block">
          {sectionIndex}
        </p>
        <div className="grid gap-4">
          {rest.map((item) => (
            <article
              key={item.id}
              className="grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-4 border-t border-line pt-4"
            >
              <ItemVisual item={item} heightClass="h-20 md:h-24" />
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {item.badge}
                </p>
                <h4 className="text-[1.04rem] font-semibold tracking-[-0.02em] text-ink md:text-[1.14rem]">
                  {item.name}
                </h4>
              </div>
            </article>
          ))}
        </div>

        <article className="space-y-5">
          <ItemVisual item={hero} heightClass="h-60 md:h-80" />
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              {hero.badge}
            </p>
            <h4 className="text-[1.28rem] font-semibold tracking-[-0.025em] text-ink md:text-[1.56rem]">
              {hero.name}
            </h4>
            <p className="max-w-[28ch] text-pretty text-base leading-8 text-ink-soft">
              {hero.description}
            </p>
          </div>
        </article>
      </div>

      <GroupIntro group={group} index={index} className="lg:col-span-4 lg:order-2 lg:pl-8" />
    </div>
  );
}

function MarqueeGroup({ group, index }: MenuGroupRailProps) {
  const [lead, ...rest] = group.items;
  const sideItems = rest.slice(0, 3);
  const railItems = [...group.items, ...group.items];
  const { containerRef, setItemRef } = useRailFocus<HTMLElement>();
  const sectionIndex = formatOrdinal(index + 1);
  const railStyle = {
    "--rail-gap": "2rem",
    "--rail-duration": `${Math.max(40, group.items.length * 9.5)}s`,
    "--rail-start": "0px",
  } as CSSProperties;

  return (
    <div className="space-y-8 border-t border-line pt-10 md:pt-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-end lg:gap-14">
        <GroupIntro group={group} index={index} className="lg:pr-8" />

        <div className="relative overflow-hidden border-t border-line pt-5 lg:border-t-0 lg:pt-0">
          <p className="pointer-events-none absolute right-0 top-0 hidden text-[clamp(4rem,11vw,8rem)] font-semibold tracking-[-0.08em] text-ink/[0.05] lg:block">
            {sectionIndex}
          </p>

          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-end">
            <article className="space-y-4">
              <ItemVisual item={lead} heightClass="h-60 md:h-[19rem]" />
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {lead.badge}
                </p>
                <h4 className="text-[1.3rem] font-semibold tracking-[-0.025em] text-ink md:text-[1.58rem]">
                  {lead.name}
                </h4>
                <p className="max-w-[28ch] text-pretty text-base leading-8 text-ink-soft">
                  {lead.description}
                </p>
              </div>
            </article>

            <div className="border-t border-line pt-4 md:border-t-0 md:pt-0">
              <p className="text-[15px] uppercase tracking-[0.24em] text-accent">
                Gọi thêm
              </p>
              <div className="mt-4 divide-y divide-line">
                {sideItems.map((item, itemIndex) => (
                  <article key={item.id} className="py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {formatOrdinal(itemIndex + 2)}
                    </p>
                    <h4 className="mt-2 text-[1.1rem] font-semibold tracking-[-0.02em] text-ink md:text-[1.22rem]">
                      {item.name}
                    </h4>
                    <p className="mt-1 max-w-[24ch] text-base leading-7 text-ink-soft">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rail-fade border-t border-line pt-5" ref={containerRef}>
        <div
          className="rail-marquee flex w-max items-start gap-8"
          data-direction="reverse"
          style={railStyle}
        >
          {railItems.map((item, itemIndex) => (
            <article
              key={`${item.id}-${Math.floor(itemIndex / group.items.length)}`}
              ref={(node) => {
                setItemRef(itemIndex, node);
              }}
              className="rail-focus-item w-[15rem] flex-none space-y-4 md:w-[17.5rem]"
            >
              <div data-rail-visual>
                <ItemVisual item={item} heightClass="h-40 md:h-[11.5rem]" />
              </div>
              <div data-rail-copy className="space-y-1 px-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {item.badge}
                </p>
                <h4 className="text-[0.96rem] font-sans font-semibold uppercase tracking-[0.06em] text-ink md:text-[1.06rem]">
                  {item.name}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function EditorialGroup({ group, index }: MenuGroupRailProps) {
  const items = group.items;
  const sectionIndex = formatOrdinal(index + 1);

  return (
    <div className="space-y-6 border-t border-line pt-9 md:pt-10">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:items-end lg:gap-10">
        <div className="relative border-t border-line pt-5 lg:border-t-0 lg:pt-0">
          <p className="pointer-events-none absolute right-0 top-0 hidden text-[clamp(4rem,10vw,7.5rem)] font-semibold tracking-[-0.08em] text-ink/[0.05] lg:block">
            {sectionIndex}
          </p>
          <p className="max-w-[34ch] text-pretty text-base leading-8 text-ink-soft">
            Toàn những món rõ vị hơn một chút, hợp khi muốn gọi lẻ từng món cho cả bàn.
          </p>
        </div>

        <GroupIntro
          group={group}
          index={index}
          align="right"
          className="lg:ml-auto lg:text-right"
        />
      </div>

      <div className="border-y border-line">
        {items.map((item, itemIndex) => (
          <article
            key={item.id}
            className="grid gap-4 border-b border-line py-3.5 last:border-b-0 md:grid-cols-[3rem_minmax(10rem,0.88fr)_minmax(0,1.15fr)_10rem] md:items-center md:gap-5"
          >
            <p className="text-[1.2rem] font-semibold tracking-[-0.03em] text-accent md:text-[1.45rem]">
              {formatOrdinal(itemIndex + 1)}
            </p>
            <h4 className="text-[0.98rem] font-medium italic tracking-[-0.02em] text-ink md:text-[1.1rem]">
              {item.name}
            </h4>
            <p className="max-w-[34ch] text-pretty text-sm leading-7 text-ink-soft">
              {item.description}
            </p>
            <ItemVisual item={item} heightClass="h-[5.5rem] md:h-24" />
          </article>
        ))}
      </div>
    </div>
  );
}

function MatrixGroup({ group, index }: MenuGroupRailProps) {
  const [hero, second, ...rest] = group.items;
  const mainItems = [hero, second];
  const sectionIndex = formatOrdinal(index + 1);

  return (
    <div className="space-y-8 border-t border-line pt-10 md:pt-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-end lg:gap-14">
        <div className="space-y-6 lg:pr-8">
          <GroupIntro group={group} index={index} />
          <div className="border-t border-line pt-4">
            <p className="text-[15px] uppercase tracking-[0.24em] text-accent">
              Món chính
            </p>
            <div className="mt-4 divide-y divide-line">
              {mainItems.map((item, itemIndex) => (
                <article key={item.id} className="py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {formatOrdinal(itemIndex + 1)}
                  </p>
                  <h4 className="mt-1 text-[1.26rem] font-semibold tracking-[-0.03em] text-ink md:text-[1.46rem]">
                    {item.name}
                  </h4>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative space-y-6">
          <p className="pointer-events-none absolute right-0 top-0 hidden text-[clamp(4rem,10vw,7.5rem)] font-semibold tracking-[-0.08em] text-ink/[0.05] lg:block">
            {sectionIndex}
          </p>
          <div className="space-y-3 border-t border-line pt-5 lg:border-t-0 lg:pt-0">
            <p className="text-[15px] uppercase tracking-[0.24em] text-accent">
              Món chính
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {mainItems.map((item) => (
                <article key={item.id} className="space-y-4">
                  <ItemVisual item={item} heightClass="h-44 md:h-56" />
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {item.badge}
                    </p>
                    <h4 className="text-[1.22rem] font-semibold tracking-[-0.02em] text-ink md:text-[1.48rem]">
                      {item.name}
                    </h4>
                    <p className="max-w-[28ch] text-pretty text-base leading-8 text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-3 border-t border-line pt-5">
            <p className="text-[15px] uppercase tracking-[0.24em] text-ink-soft">
              Gọi thêm
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {rest.map((item) => (
                <article key={item.id} className="space-y-4">
                  <ItemVisual item={item} heightClass="h-36 md:h-40" />
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {item.badge}
                    </p>
                    <h4 className="text-[1rem] font-sans font-semibold tracking-[0.01em] text-ink md:text-[1.08rem]">
                      {item.name}
                    </h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MenuGroupRail(props: MenuGroupRailProps) {
  const variant = props.index % 4;

  if (variant === 0) return <SpotlightGroup {...props} />;
  if (variant === 1) return <MarqueeGroup {...props} />;
  if (variant === 2) return <EditorialGroup {...props} />;
  return <MatrixGroup {...props} />;
}
