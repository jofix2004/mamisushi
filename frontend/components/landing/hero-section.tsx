import type { HeroContent } from "@/lib/landing-data";

import { HeroSushiCluster } from "./hero-sushi-cluster.client";
import { LandingHeader } from "./landing-header";
import { ArrowRightIcon } from "./primitives/icons";

type HeroSectionProps = {
  brandName: string;
  content: HeroContent;
};

export function HeroSection({ brandName, content }: HeroSectionProps) {
  const titleStartsWithBrand = content.title.startsWith(brandName);
  const titleTail = titleStartsWithBrand
    ? content.title.slice(brandName.length)
    : content.title;
  const hasChips = content.chips.length > 0;

  return (
    <section
      id="top"
      className="relative px-[2.5rem] pb-0 pt-1 md:px-[5rem] md:pb-4 xl:px-[7.4rem]"
    >
      <div className="mx-auto max-w-[1320px]">
        <LandingHeader brandName={brandName} />

        <div className="grid min-h-[38rem] items-center gap-8 pb-0 pt-0 md:min-h-[42rem] md:gap-10 lg:grid-cols-12 lg:gap-16 lg:py-0">
          <div className="space-y-7 lg:col-span-5">
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-accent">
                {content.eyebrow}
              </p>
              <h1 className="max-w-[12ch] text-balance text-[3.1rem] font-semibold tracking-[-0.06em] text-ink md:max-w-[11ch] md:text-[5.1rem] md:leading-[0.92]">
                {titleStartsWithBrand ? (
                  <>
                    <span className="text-accent">{brandName}</span>
                    <span>{titleTail}</span>
                  </>
                ) : (
                  content.title
                )}
              </h1>
            </div>

            {hasChips ? (
              <div className="grid gap-5 border-t border-line/80 pt-4 lg:grid-cols-[minmax(0,3.3fr)_minmax(0,2.7fr)] lg:gap-8">
                <p className="max-w-[34ch] text-pretty text-base leading-8 text-ink-soft">
                  {content.description}
                </p>

                <div className="space-y-3 text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                  {content.chips.map((chip) => (
                    <p key={chip} className="border-b border-line/70 pb-3">
                      {chip}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="border-t border-line/80 pt-4">
                <p className="max-w-[34ch] text-pretty text-base leading-8 text-ink-soft">
                  {content.description}
                </p>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-[11px] uppercase tracking-[0.18em]">
              <a
                href={content.primaryCta.href}
                className="inline-flex items-center gap-2 border-b border-accent pb-1 font-medium text-accent hover:text-accent-deep"
              >
                {content.primaryCta.label}
                <ArrowRightIcon className="size-4" />
              </a>
              <a
                href={content.secondaryCta.href}
                className="inline-flex items-center gap-2 border-b border-transparent pb-1 font-medium text-ink-soft hover:border-line hover:text-ink"
              >
                {content.secondaryCta.label}
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative">
              <HeroSushiCluster />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
