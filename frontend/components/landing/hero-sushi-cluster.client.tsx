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
  labelClass: string;
  delay: number;
  imageId: SushiImageId;
}> = [
  {
    id: "main",
    label: "Salmon Ikura",
    size: "h-[18.5rem] w-[18.5rem] md:h-[26rem] md:w-[26rem]",
    position: "left-[4%] top-[8%] z-20 md:left-[7%] md:top-[10%]",
    labelClass: "text-[1.35rem] md:text-[1.9rem]",
    delay: 0,
    imageId: "salmonIkura",
  },
  {
    id: "top",
    label: "Tuna Nigiri",
    size: "h-[10.75rem] w-[10.75rem] md:h-[13.75rem] md:w-[13.75rem]",
    position: "right-[5%] bottom-[8%] z-30 md:right-[7%] md:bottom-[10%]",
    labelClass: "text-[1.15rem] md:text-[1.5rem]",
    delay: 0.5,
    imageId: "tunaNigiri",
  },
  {
    id: "bottom",
    label: "Avocado Roll",
    size: "h-[9.5rem] w-[9.5rem] md:h-[12.25rem] md:w-[12.25rem]",
    position: "right-[13%] top-[4%] z-10 md:right-[15%] md:top-[6%]",
    labelClass: "text-[1rem] md:text-[1.25rem]",
    delay: 0.9,
    imageId: "avocado",
  },
];

const revealSlideDuration = 2.7;
const revealFadeDuration = 2.2;

export function HeroSushiCluster() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[11/10] w-full max-w-[42rem]">
      <div className="absolute inset-[18%] rounded-full bg-accent-soft/30 blur-3xl" />

      {assets.map((asset, index) => (
        <motion.div
          key={asset.id}
          initial={reduceMotion ? false : { opacity: 0, y: 64 }}
          animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  opacity: {
                    delay: asset.delay * 1.25,
                    duration: revealFadeDuration,
                    ease: "linear",
                  },
                  y: {
                    delay: asset.delay * 1.25,
                    duration: revealSlideDuration,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
          }
          className={`absolute ${asset.position} ${asset.size}`}
        >
          <motion.div
            className="group/item relative h-full"
            animate={reduceMotion ? { y: 0 } : { y: [0, -10, 0] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    delay:
                      asset.delay * 1.25 +
                      Math.max(revealSlideDuration, revealFadeDuration),
                    duration: 4.8 + index * 0.7,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }
            }
          >
            <div className="absolute bottom-[13%] left-1/2 h-8 w-[60%] -translate-x-1/2 rotate-[9deg] rounded-full bg-[rgba(63,41,34,0.19)] blur-[18px] transition-opacity duration-500 ease-out group-hover/item:opacity-55 md:h-9 md:blur-[20px]" />
            <div className="relative h-full transition-transform duration-500 ease-out group-hover/item:-translate-y-2">
              <Image
                src={sushiImages[asset.imageId]}
                alt={asset.label}
                fill
                priority={asset.id === "main"}
                sizes="(max-width: 768px) 180px, 360px"
                className="object-contain object-center p-2 scale-[1.25] drop-shadow-[0_26px_30px_rgba(40,26,20,0.14)]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 text-center">
              <p
                className={`${asset.labelClass} font-medium leading-none tracking-[-0.02em] text-ink/50`}
              >
                {asset.label}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
