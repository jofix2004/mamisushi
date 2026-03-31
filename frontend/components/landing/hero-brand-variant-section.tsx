import Image from "next/image";

import heroImage from "@/asses/hero.png";
import type { HeroContent } from "@/lib/landing-data";

import { LandingHeader } from "./landing-header";
import { ArrowRightIcon } from "./primitives/icons";

type HeroBrandVariantSectionProps = {
  brandName: string;
  content: HeroContent;
};

export function HeroBrandVariantSection({
  brandName,
  content,
}: HeroBrandVariantSectionProps) {
  const titleStartsWithBrand = content.title.startsWith(brandName);
  const statement = titleStartsWithBrand
    ? content.title.slice(brandName.length).replace(/^[\s,.]+/, "")
    : content.title;
  const brandParts = brandName.split(" ");
  const leadWord = brandParts[0] ?? brandName;
  const trailingWord = brandParts.slice(1).join(" ") || "SUSHI";

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-canvas px-[2.5rem] pb-8 pt-1 md:px-[5rem] md:pb-12 xl:px-[7.4rem]"
    >
      <div className="absolute left-[-5%] top-[8%] z-0 select-none pointer-events-none opacity-[0.015]">
        <span className="whitespace-nowrap text-[35vw] font-black leading-none tracking-tighter text-ink">
          {leadWord.toUpperCase()}
        </span>
      </div>

      <div className="relative z-20 mx-auto max-w-[1320px]">
        <LandingHeader brandName={brandName} />

        <div className="grid gap-12 border-t border-line pt-7 lg:grid-cols-[minmax(0,5.6fr)_minmax(0,6.4fr)] lg:items-center lg:gap-16">
          <div className="relative z-30 space-y-10 pt-4 md:pt-8 lg:pb-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-accent" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-ink-soft">
                {content.eyebrow}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col">
                <h2 className="text-[clamp(5.5rem,13vw,10.5rem)] font-bold uppercase leading-[0.8] tracking-[-0.05em] text-accent">
                  {leadWord.toUpperCase()}
                </h2>
                <div className="ml-2 pt-2 md:pt-3">
                  <p className="font-sans text-[2rem] font-bold uppercase leading-none tracking-[0.25em] text-ink opacity-90 md:text-[3.2rem]">
                    {trailingWord.toUpperCase()}
                  </p>
                </div>
              </div>

              <div className="relative border-l-4 border-accent pl-6 pt-6">
                <h3 className="text-[1.5rem] font-medium leading-tight tracking-tight text-ink md:text-[2rem] lg:text-[2.2rem]">
                  {statement}
                </h3>
              </div>
            </div>

            <p className="max-w-[40ch] text-[1.1rem] leading-[1.8] text-ink-soft/90">
              {content.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-4 text-[13px] font-bold uppercase tracking-[0.15em]">
              <a
                href={content.primaryCta.href}
                className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent-deep md:py-5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {content.primaryCta.label}
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 border-b-2 border-transparent px-6 py-4 text-ink transition-all hover:translate-x-1 hover:border-ink"
              >
                Xem menu
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[34rem] items-center justify-center overflow-hidden md:min-h-[44rem]">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="absolute aspect-[3/4] w-[80%] rotate-[6deg] transform rounded-b-[3rem] rounded-t-[14rem] bg-line/20 md:w-[70%]" />
              <div className="absolute aspect-[3/4] w-[80%] -rotate-[3deg] transform rounded-b-[3rem] rounded-t-[14rem] border border-accent/20 md:w-[70%]" />
              <div className="absolute aspect-square w-[60%] rounded-full bg-accent-soft/20 blur-[80px]" />
            </div>

            <div className="absolute bottom-[14%] left-1/2 z-30 h-10 w-[56%] -translate-x-1/2 rotate-[8deg] rounded-full bg-[rgba(63,41,34,0.18)] blur-[28px] md:h-12 md:blur-[32px]" />

            <div className="absolute inset-[7%_4%_8%_8%] z-40">
              <Image
                src={heroImage}
                alt={`${brandName} hero visual`}
                fill
                sizes="(max-width: 768px) 88vw, 760px"
                className="scale-[1.2] object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
