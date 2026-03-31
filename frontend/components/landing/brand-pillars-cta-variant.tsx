"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import sushiLayer1 from "@/asses/sushi_1.png";
import sushiLayer2 from "@/asses/sushi_2.png";
import sushiLayer3 from "@/asses/sushi_3.png";
import sushiLayer4 from "@/asses/sushi_4.png";
import type { Pillar } from "@/lib/landing-data";

import { ArrowRightIcon } from "./primitives/icons";

type BrandPillarsCtaVariantProps = {
  brandName: string;
  pillars: Pillar[];
  cta: { label: string; href: string };
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

export function BrandPillarsCtaVariant({ pillars, cta }: BrandPillarsCtaVariantProps) {
  const reduceMotion = useReducedMotion();
  const revealSlideDuration = 2.75;
  const revealFadeDuration = 2.25;
  const waveDuration = 6.2;
  const revealCompleteAfter = Math.max(revealSlideDuration, revealFadeDuration);

  return (
    <section className="relative overflow-hidden bg-canvas px-[2.5rem] py-16 md:px-[5rem] md:py-20 xl:px-[7.4rem]">
      <div className="relative z-20 mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-20">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-[48rem]">
            <div className="absolute inset-0 scale-110 rounded-full bg-accent-soft/10 blur-[100px]" />
            <div className="absolute left-1/2 top-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/60" />
            <div className="absolute left-1/2 top-1/2 aspect-square w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20 border-dashed animate-[spin_60s_linear_infinite]" />

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
                    className="scale-105 object-contain object-center"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="relative z-20 space-y-8 lg:ml-auto lg:w-full lg:max-w-[40rem]">
            <div className="mb-2 inline-flex items-center gap-3 rounded-full bg-accent/10 px-5 py-2.5">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-accent">
                Cá tính thương hiệu
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-[2.8rem] font-bold leading-[1.05] tracking-[-0.04em] text-ink md:text-[3.5rem]">
                Tươi ngon <span className="ml-2 hidden text-[1.4rem] font-medium tracking-normal text-ink-soft opacity-80 sm:inline-block md:text-[1.7rem]">nuông chiều vị giác.</span>
              </h2>
              <h2 className="text-[2.8rem] font-bold leading-[1.05] tracking-[-0.04em] text-accent md:text-[3.5rem]">
                Vừa vặn <span className="ml-2 hidden text-[1.4rem] font-medium tracking-normal text-ink opacity-60 sm:inline-block md:text-[1.7rem]">khớp mọi khẩu vị.</span>
              </h2>
              <h2 className="text-[2.8rem] font-bold leading-[1.05] tracking-[-0.04em] text-ink md:text-[3.5rem]">
                Thoải mái <span className="ml-2 hidden text-[1.4rem] font-medium tracking-normal text-ink-soft opacity-80 sm:inline-block md:text-[1.7rem]">đón mọi cuộc vui.</span>
              </h2>
            </div>

            <div className="grid gap-5 border-t border-line/80 pt-8 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.id} className="group flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50 transition-colors group-hover:bg-accent" />
                  <p className="text-balance text-[1.1rem] font-medium leading-[1.4] tracking-[-0.01em] text-ink-soft transition-colors group-hover:text-ink">
                    {pillar.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center">
              <a
                href={cta.href}
                className="group relative inline-flex items-center justify-center gap-5 rounded-full bg-accent px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent-deep md:px-10 md:py-5"
              >
                <div className="flex flex-col text-left">
                  <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                    Trải nghiệm ngay
                  </span>
                  <span className="whitespace-nowrap text-[1.3rem] font-bold leading-none tracking-tight text-white md:text-[1.5rem]">
                    {cta.label}
                  </span>
                </div>
                <div className="ml-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-accent">
                  <ArrowRightIcon className="size-5 transition-transform duration-300 group-hover:-rotate-45" />
                </div>
              </a>

              <div className="flex items-center">
                <div className="mr-5 hidden h-12 w-[3px] rounded-full bg-line/80 sm:block" />
                <p className="max-w-[14ch] text-[1rem] font-medium leading-[1.4] text-ink-soft">
                  Lựa chọn của bạn,
                  <br />
                  <span className="text-ink">nhịp điệu của bạn.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
