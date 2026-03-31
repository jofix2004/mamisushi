"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import sushiLayer1 from "@/asses/sushi_1.webp";
import sushiLayer2 from "@/asses/sushi_2.webp";
import sushiLayer3 from "@/asses/sushi_3.webp";
import sushiLayer4 from "@/asses/sushi_4.webp";
import type { Pillar } from "@/lib/landing-data";

type BrandPillarsProps = {
  pillars: Pillar[];
};

const sushiLayers: Array<{
  id: string;
  src: StaticImageData;
  alt: string;
  className: string;
  delay: number;
  waveOffset: number;
}> = [
  {
    id: "sushi-1",
    src: sushiLayer1,
    alt: "Sushi layer 1",
    className: "z-40",
    delay: 0,
    waveOffset: 0,
  },
  {
    id: "sushi-2",
    src: sushiLayer2,
    alt: "Sushi layer 2",
    className: "z-30",
    delay: 0.225,
    waveOffset: 0.28,
  },
  {
    id: "sushi-3",
    src: sushiLayer3,
    alt: "Sushi layer 3",
    className: "z-20",
    delay: 0.45,
    waveOffset: 0.56,
  },
  {
    id: "sushi-4",
    src: sushiLayer4,
    alt: "Sushi layer 4",
    className: "z-10",
    delay: 0.675,
    waveOffset: 0.84,
  },
];

export function BrandPillars({ pillars }: BrandPillarsProps) {
  const reduceMotion = useReducedMotion();
  const revealSlideDuration = 2.75;
  const revealFadeDuration = 2.25;
  const waveDuration = 6.2;
  const revealCompleteAfter = Math.max(revealSlideDuration, revealFadeDuration);

  return (
    <section className="px-[2.5rem] py-12 md:px-[5rem] md:py-14 xl:px-[7.4rem]">
      <div className="mx-auto max-w-[1320px] border-t border-line pt-5">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-16">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-[48rem]">
            <div className="absolute inset-[12%] rounded-full bg-accent-soft/35 blur-[90px]" />
            <div className="absolute bottom-[10%] left-1/2 h-10 w-[58%] -translate-x-1/2 rotate-[9deg] rounded-full bg-[rgba(63,41,34,0.16)] blur-[26px] md:h-12 md:blur-[28px]" />

            {sushiLayers.map((layer) => (
              <motion.div
                key={layer.id}
                initial={reduceMotion ? false : { opacity: 0, y: 72 }}
                whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7, margin: "-12% 0px -12% 0px" }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        opacity: {
                          duration: revealFadeDuration,
                          delay: layer.delay,
                          ease: "linear",
                        },
                        y: {
                          duration: revealSlideDuration,
                          delay: layer.delay,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      }
                }
                className={`absolute inset-0 ${layer.className}`}
              >
                <motion.div
                  className="relative h-full"
                  animate={reduceMotion ? { y: 0 } : { y: [0, -10, 0, 8, 0] }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          delay: layer.delay + revealCompleteAfter + layer.waveOffset,
                          duration: waveDuration,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          times: [0, 0.25, 0.5, 0.75, 1],
                        }
                  }
                >
                  <Image
                    src={layer.src}
                    alt={layer.alt}
                    fill
                    sizes="(max-width: 768px) 80vw, 700px"
                    className="object-contain object-center drop-shadow-[0_28px_32px_rgba(40,26,20,0.14)]"
                  />
                </motion.div>
              </motion.div>
            ))}
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
