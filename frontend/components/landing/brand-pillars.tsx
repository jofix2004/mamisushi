import Image from "next/image";

import sushiImage from "@/asses/sushi.png";
import type { Pillar } from "@/lib/landing-data";

type BrandPillarsProps = {
  pillars: Pillar[];
};

export function BrandPillars({ pillars }: BrandPillarsProps) {
  return (
    <section className="px-[2.5rem] py-12 md:px-[5rem] md:py-14 xl:px-[7.4rem]">
      <div className="mx-auto max-w-[1320px] border-t border-line pt-5">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-16">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-[48rem]">
            <div className="absolute inset-[14%] rounded-full bg-accent-soft/35 blur-[90px]" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
            >
              <span className="select-none text-center text-[clamp(4.2rem,11vw,8.5rem)] font-semibold uppercase tracking-[0.26em] text-ink/[0.06]">
                3D MODEL
              </span>
            </div>
            <div className="absolute bottom-[13%] left-1/2 h-9 w-[50%] -translate-x-1/2 rotate-[9deg] rounded-full bg-[rgba(63,41,34,0.18)] blur-[22px] md:h-10 md:blur-[24px]" />
            <Image
              src={sushiImage}
              alt="Salmon nigiri"
              fill
              sizes="(max-width: 768px) 80vw, 700px"
              className="relative z-20 object-contain object-center scale-[1.15] drop-shadow-[0_34px_38px_rgba(40,26,20,0.14)]"
            />
          </div>

          <div className="space-y-6 lg:ml-auto lg:w-full lg:max-w-[36rem]">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              Vì sao là Nami Sushi
            </p>

            <div className="space-y-1.5">
              <h2 className="w-full max-w-none text-balance text-[2.55rem] font-semibold tracking-[-0.05em] text-ink md:text-[4.25rem] md:leading-[0.94]">
                gọn để chọn nhanh
              </h2>
              <h2 className="w-full max-w-none text-balance text-[2.55rem] font-semibold tracking-[-0.05em] text-accent md:text-[4.25rem] md:leading-[0.94]">
                đẹp để muốn gọi
              </h2>
              <h2 className="w-full max-w-none text-balance text-[2.55rem] font-semibold tracking-[-0.05em] text-ink md:text-[4.25rem] md:leading-[0.94]">
                vui để rủ nhau đi
              </h2>
            </div>

            <div className="grid gap-3 border-t border-line/80 pt-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4">
              {pillars.map((pillar) => (
                <p
                  key={pillar.id}
                  className="max-w-[18ch] text-balance text-[1rem] font-medium tracking-[-0.02em] text-ink md:text-[1.16rem] md:leading-[1.15]"
                >
                  {pillar.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
