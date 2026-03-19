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
            className="rail-focus-item w-[11.5rem] flex-none space-y-3 md:w-[13.5rem]"
          >
            <div data-rail-visual className="relative h-32 md:h-40">
              <div className="absolute bottom-[13%] left-1/2 h-7 w-[58%] -translate-x-1/2 rotate-[9deg] rounded-full bg-[rgba(63,41,34,0.18)] blur-[17px] md:h-8 md:blur-[19px]" />
              <div className="relative h-full">
                <Image
                  src={sushiImages[item.imageId]}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 180px, 240px"
                  className="object-contain object-center p-1 scale-[1.22] drop-shadow-[0_22px_26px_rgba(40,26,20,0.12)]"
                />
              </div>
            </div>

            <div data-rail-copy className="space-y-1 px-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                {item.badge}
              </p>
              <h3 className="text-[1rem] font-semibold tracking-[-0.02em] text-ink md:text-[1.08rem]">
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
  const mid = Math.ceil(items.length / 2);
  const topRow = [...items, ...items.slice(0, mid)];
  const bottomRow = [...items.slice(mid), ...items.slice(0, mid), ...items.slice(mid)];

  return (
    <div className="overflow-visible space-y-5 pb-2">
      <FeaturedRailRow
        items={topRow}
        direction="forward"
        start="calc(-18% - (var(--rail-gap) / 4))"
        duration={`${Math.max(48, topRow.length * 8)}s`}
        drift="-8px"
      />
      <FeaturedRailRow
        items={bottomRow}
        direction="reverse"
        start="calc(-34% - (var(--rail-gap) / 4))"
        duration={`${Math.max(52, bottomRow.length * 8.5)}s`}
        drift="8px"
      />
    </div>
  );
}
