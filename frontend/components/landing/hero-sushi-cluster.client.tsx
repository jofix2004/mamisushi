"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import type { SushiImageId } from "@/lib/sushi-image-map";
import { sushiImages } from "@/lib/sushi-image-map";

const assets: Array<{
  id: string;
  label: string;
  size: string;
  position: string;
  delay: number;
  imageId: SushiImageId;
}> = [
  {
    id: "main",
    label: "Salmon Nigiri",
    size: "h-[17rem] w-[17rem] md:h-[25rem] md:w-[25rem]",
    position: "left-[16%] top-[18%] md:left-[20%] md:top-[14%]",
    delay: 0,
    imageId: "11",
  },
  {
    id: "top",
    label: "Ikura Gunkan",
    size: "h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem]",
    position: "right-[10%] top-[8%] md:right-[12%] md:top-[8%]",
    delay: 0.5,
    imageId: "4",
  },
  {
    id: "bottom",
    label: "Uni Gunkan",
    size: "h-[9rem] w-[9rem] md:h-[11rem] md:w-[11rem]",
    position: "right-[4%] bottom-[8%] md:right-[4%] md:bottom-[10%]",
    delay: 0.9,
    imageId: "8",
  },
];

export function HeroSushiCluster() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[11/10] w-full max-w-[42rem]">
      <div className="absolute inset-[18%] rounded-full bg-accent-soft/30 blur-3xl" />

      {assets.map((asset, index) => (
        <motion.div
          key={asset.id}
          initial={false}
          animate={reduceMotion ? { y: 0 } : { y: [0, -10, 0] }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  delay: asset.delay,
                  duration: 7 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }
          }
          className={`absolute ${asset.position} ${asset.size}`}
        >
          <div className="relative h-full">
            <div className="absolute bottom-[13%] left-1/2 h-8 w-[60%] -translate-x-1/2 rotate-[9deg] rounded-full bg-[rgba(63,41,34,0.19)] blur-[18px] md:h-9 md:blur-[20px]" />
            <div className="relative h-full">
              <Image
                src={sushiImages[asset.imageId]}
                alt={asset.label}
                fill
                priority={asset.id === "main"}
                sizes="(max-width: 768px) 180px, 360px"
                className="object-contain object-center p-2 scale-[1.25] drop-shadow-[0_26px_30px_rgba(40,26,20,0.14)]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 space-y-1 text-center">
              <p className="text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                Sushi lẻ
              </p>
              <p className="text-lg font-semibold tracking-tight text-ink md:text-xl">
                {asset.label}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
