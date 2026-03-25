"use client";

import type { CSSProperties } from "react";

import Image from "next/image";

import type { FeaturedItem } from "@/lib/landing-data";
import { sushiImages } from "@/lib/sushi-image-map";

import { useRailFocus } from "./primitives/use-rail-focus";

type FeaturedMenuRailProps = {
  items: FeaturedItem[];
};

type FeaturedRailRowProps = {
  items: FeaturedItem[];
  direction: "forward" | "reverse";
  start: string;
  duration: string;
  drift: string;
};

function FeaturedRailRow({
  items,
  direction,
  start,
  duration,
  drift,
}: FeaturedRailRowProps) {
  const railItems = [...items, ...items];
  const { containerRef, setItemRef } = useRailFocus<HTMLElement>();
  const railStyle = {
    "--rail-gap": "1.25rem",
    "--rail-duration": duration,
    "--rail-start": start,
    "--rail-drift": drift,
  } as CSSProperties;

  return (
    <div className="rail-fade" ref={containerRef}>
      <div
        className="rail-marquee flex w-max items-start gap-5"
        data-direction={direction}
        data-diagonal="true"
        style={railStyle}
      >
        {railItems.map((item, index) => (
          <article
            key={`${direction}-${index}-${item.id}`}
            ref={(node) => {
              setItemRef(index, node);
            }}
            className="rail-focus-item group/item flex w-[11.5rem] flex-none flex-col items-center space-y-3 md:w-[13.5rem]"
          >
            <div data-rail-visual className="relative h-32 w-full self-stretch md:h-40">
              <div className="absolute bottom-[13%] left-1/2 h-7 w-[58%] -translate-x-1/2 rotate-[9deg] rounded-full bg-[rgba(63,41,34,0.18)] blur-[17px] transition-opacity duration-500 ease-out group-hover/item:opacity-55 md:h-8 md:blur-[19px]" />
              <div className="relative h-full transition-transform duration-500 ease-out group-hover/item:-translate-y-2">
                <Image
                  src={sushiImages[item.imageId]}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 180px, 240px"
                  className="object-contain object-center p-1 scale-[1.22] drop-shadow-[0_22px_26px_rgba(40,26,20,0.12)]"
                />
              </div>
            </div>

            <div data-rail-copy className="w-full space-y-1 px-1 text-center">
              <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                {item.badge}
              </p>
              <h3 className="text-center text-[1rem] font-semibold tracking-[-0.02em] text-ink md:text-[1.08rem]">
                {item.name}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function FeaturedMenuRail({ items }: FeaturedMenuRailProps) {
  const topRow = items.filter((_, index) => index % 2 === 0);
  const bottomRow = items.filter((_, index) => index % 2 === 1);
  const fallbackRow = items.length > 1 ? [...items].reverse() : items;
  const renderedTopRow = topRow.length > 0 ? topRow : items;
  const renderedBottomRow = bottomRow.length > 0 ? bottomRow : fallbackRow;

  return (
    <div className="overflow-visible space-y-5 pb-2">
      <FeaturedRailRow
        items={renderedTopRow}
        direction="forward"
        start="0px"
        duration={`${Math.max(27, renderedTopRow.length * 7.5)}s`}
        drift="-8px"
      />
      <FeaturedRailRow
        items={renderedBottomRow}
        direction="reverse"
        start="0px"
        duration={`${Math.max(30, renderedBottomRow.length * 7.75)}s`}
        drift="8px"
      />
    </div>
  );
}
