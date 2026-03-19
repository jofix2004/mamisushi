"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

import comboLarge from "@/asses/large.png";
import comboMedium1 from "@/asses/medium1.png";
import comboMedium2 from "@/asses/medium2.png";
import comboSmall from "@/asses/small.png";
import type { ComboItem } from "@/lib/landing-data";

import { ArrowRightIcon } from "./primitives/icons";

type ComboStackProps = {
  combos: ComboItem[];
};

const comboVisuals: Record<
  string,
  { hero: StaticImageData; detail: StaticImageData }
> = {
  "duo-maki-set": {
    hero: comboLarge,
    detail: comboMedium2,
  },
  "friends-table-set": {
    hero: comboMedium1,
    detail: comboMedium1,
  },
  "after-class-combo": {
    hero: comboSmall,
    detail: comboSmall,
  },
};

function ComboVisual({
  src,
  alt,
  compact = false,
  secondaryLarge = false,
  imageScaleClass = "",
}: {
  src: StaticImageData;
  alt: string;
  compact?: boolean;
  secondaryLarge?: boolean;
  imageScaleClass?: string;
}) {
  return (
    <div
      className={`relative ${
        compact
          ? secondaryLarge
            ? "h-52 md:h-60"
            : "h-36 md:h-40"
          : "min-h-[20rem] md:min-h-[24rem]"
      }`}
    >
      <div className="absolute inset-[15%] rounded-full bg-accent-soft/22 blur-3xl" />
      <div
        className={`absolute left-[53%] -translate-x-1/2 rotate-[8deg] rounded-full bg-[rgba(57,36,29,0.24)] ${
          compact
            ? secondaryLarge
              ? "bottom-[24%] h-8 w-[82%] blur-[20px] md:h-10 md:blur-[24px]"
              : "bottom-[23%] h-6 w-[74%] blur-[18px] md:h-7 md:blur-[20px]"
            : "bottom-[22%] h-7 w-[80%] blur-[20px] md:h-8 md:blur-[24px]"
        }`}
      />

      <div className="relative h-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={compact ? "(max-width: 768px) 220px, 280px" : "(max-width: 768px) 320px, 520px"}
          className={`object-contain object-center drop-shadow-[0_26px_30px_rgba(40,26,20,0.16)] ${
            compact && secondaryLarge ? "scale-[1.5]" : ""
          } ${imageScaleClass}`}
        />
      </div>
    </div>
  );
}

export function ComboStack({ combos }: ComboStackProps) {
  const [mainCombo, ...secondaryCombos] = combos;
  const mainVisual = comboVisuals[mainCombo.id] ?? {
    hero: comboLarge,
    detail: comboMedium2,
  };

  return (
    <div className="space-y-8">
      <motion.article
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="border-y border-line py-8 md:py-10"
      >
        <div className="grid gap-8 xl:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(16rem,2.5fr)] xl:items-start">
          <div className="space-y-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              {mainCombo.badge} / {mainCombo.audience}
            </p>
            <h3 className="max-w-[12ch] text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              {mainCombo.name}
            </h3>
            <p className="max-w-[28ch] text-pretty text-base leading-8 text-ink-soft">
              {mainCombo.description}
            </p>
            <a
              href="#reserve"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent"
            >
              {mainCombo.ctaLabel}
              <ArrowRightIcon className="size-[18px]" />
            </a>
          </div>

          <div className="border border-line/70 px-4 py-5 md:px-6 md:py-6">
            <ComboVisual
              src={mainVisual.hero}
              alt={mainCombo.name}
            />
          </div>

          <div className="space-y-6">
            <div className="border-t border-line pt-4">
              <ComboVisual
                src={mainVisual.detail}
                alt={`${mainCombo.name} chi tiết`}
                compact
                imageScaleClass="scale-[1.25]"
              />
            </div>

            <div className="space-y-4 border-t border-line pt-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                  Giá combo
                </p>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-accent md:text-5xl">
                  {mainCombo.price}
                </p>
              </div>

              <div className="space-y-3">
                {mainCombo.items.map((item) => (
                  <p
                    key={item}
                    className="border-t border-line pt-3 text-sm leading-7 text-ink-soft"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      <div className="grid gap-6 xl:grid-cols-2">
        {secondaryCombos.map((combo) => {
          const comboImages = comboVisuals[combo.id] ?? {
            hero: comboMedium1,
            detail: comboSmall,
          };

          return (
            <motion.article
              key={combo.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="border-t border-line py-6"
            >
              <div className="grid gap-4 md:grid-cols-[16.5rem_minmax(0,1fr)] md:items-center">
                <div className="md:pr-1">
                  <ComboVisual
                    src={comboImages.detail}
                    alt={combo.name}
                    compact
                    secondaryLarge
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                    {combo.badge} / {combo.audience}
                  </p>
                  <h3 className="text-[1.45rem] font-sans font-semibold tracking-[0.01em] text-ink">
                    {combo.name}
                  </h3>
                  <p className="text-2xl font-semibold tracking-tight text-accent">
                    {combo.price}
                  </p>
                  <a
                    href="#reserve"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent"
                  >
                    {combo.ctaLabel}
                    <ArrowRightIcon className="size-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
