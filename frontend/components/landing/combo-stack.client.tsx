"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

import comboLarge from "@/asses/large.webp";
import comboMedium1 from "@/asses/medium1.webp";
import comboMedium2 from "@/asses/medium2.webp";
import comboSmall from "@/asses/small.webp";
import type { ComboItem } from "@/lib/landing-data";

import { ArrowRightIcon } from "./primitives/icons";

type ComboStackProps = {
  combos: ComboItem[];
};

const mainComboImages = {
  hero: comboMedium1,
  detail: comboMedium2,
} satisfies {
  hero: StaticImageData;
  detail: StaticImageData;
};

const mainComboSlotStyles = {
  heroScaleClass: "scale-[1.02]",
  detailScaleClass: "scale-[1.28] -translate-x-[6%] -translate-y-[4%]",
  detailLarge: false,
  detailSizeClass: "h-36 md:h-40",
} satisfies {
  heroScaleClass?: string;
  detailScaleClass?: string;
  detailLarge?: boolean;
  detailSizeClass?: string;
};

const secondaryComboVisuals = [
  {
    image: comboLarge,
    imageScaleClass: "scale-[1.12]",
    secondaryLarge: true,
  },
  {
    image: comboSmall,
    imageScaleClass: "scale-[1.18]",
    secondaryLarge: true,
  },
] satisfies Array<{
  image: StaticImageData;
  imageScaleClass?: string;
  secondaryLarge?: boolean;
}>;

const revealTransition = {
  opacity: {
    duration: 2.05,
    ease: "linear" as const,
  },
  y: {
    duration: 2.5,
    ease: [0.16, 1, 0.3, 1] as const,
  },
};

const hoverTransition = {
  type: "spring" as const,
  stiffness: 120,
  damping: 22,
};

function ComboVisual({
  src,
  alt,
  compact = false,
  secondaryLarge = false,
  imageScaleClass = "",
  sizeClass,
}: {
  src: StaticImageData;
  alt: string;
  compact?: boolean;
  secondaryLarge?: boolean;
  imageScaleClass?: string;
  sizeClass?: string;
}) {
  return (
    <div
      className={`group/item relative ${
        sizeClass ??
        (compact
          ? secondaryLarge
            ? "h-44 md:h-48"
            : "h-36 md:h-40"
          : "min-h-[20rem] md:min-h-[24rem]")
      }`}
      >
      <div className="absolute inset-[15%] rounded-full bg-accent-soft/22 blur-3xl" />
      <div
        className={`absolute left-[53%] -translate-x-1/2 rotate-[8deg] rounded-full bg-[rgba(57,36,29,0.24)] transition-opacity duration-500 ease-out group-hover/item:opacity-55 ${
          compact
            ? secondaryLarge
              ? "bottom-[23%] h-7 w-[78%] blur-[18px] md:h-8 md:blur-[20px]"
              : "bottom-[23%] h-6 w-[74%] blur-[18px] md:h-7 md:blur-[20px]"
            : "bottom-[22%] h-7 w-[80%] blur-[20px] md:h-8 md:blur-[24px]"
        }`}
      />

      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover/item:-translate-y-2">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={compact ? "(max-width: 768px) 220px, 280px" : "(max-width: 768px) 320px, 520px"}
          className={`object-contain object-center drop-shadow-[0_26px_30px_rgba(40,26,20,0.16)] ${imageScaleClass}`}
        />
      </div>
    </div>
  );
}

export function ComboStack({ combos }: ComboStackProps) {
  const [mainCombo, ...secondaryCombos] = combos;
  const fallbackSecondaryVisual =
    secondaryComboVisuals[secondaryComboVisuals.length - 1];

  return (
    <div className="space-y-8">
      <motion.article
        layout
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -4, transition: hoverTransition }}
        transition={revealTransition}
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
              src={mainComboImages.hero}
              alt={mainCombo.name}
              imageScaleClass={mainComboSlotStyles.heroScaleClass ?? ""}
            />
          </div>

          <div className="space-y-6">
            <div className="border-t border-line pt-4">
              <ComboVisual
                src={mainComboImages.detail}
                alt={`${mainCombo.name} detail`}
                compact
                secondaryLarge={mainComboSlotStyles.detailLarge ?? false}
                imageScaleClass={mainComboSlotStyles.detailScaleClass ?? ""}
                sizeClass={mainComboSlotStyles.detailSizeClass}
              />
            </div>

            <div className="space-y-4 border-t border-line pt-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                  Giá combo
                </p>
                <p className="mt-2 text-[2.35rem] font-medium leading-none tracking-[-0.02em] text-accent md:text-[3rem]">
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
        {secondaryCombos.map((combo, index) => {
          const comboVisual = secondaryComboVisuals[index] ?? fallbackSecondaryVisual;

          return (
            <motion.article
              key={combo.id}
              layout
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -3, transition: hoverTransition }}
              transition={revealTransition}
              className="border-t border-line py-6"
            >
              <div className="grid gap-4 md:grid-cols-[15.5rem_minmax(0,1fr)] md:items-center">
                <div className="md:pr-1">
                  <ComboVisual
                    src={comboVisual.image}
                    alt={combo.name}
                    compact
                    secondaryLarge={comboVisual.secondaryLarge ?? true}
                    imageScaleClass={comboVisual.imageScaleClass ?? ""}
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                    {combo.badge} / {combo.audience}
                  </p>
                  <h3 className="text-[1.45rem] font-sans font-semibold tracking-[0.01em] text-ink">
                    {combo.name}
                  </h3>
                  <p className="text-[1.7rem] font-medium leading-none tracking-[-0.015em] text-accent">
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
