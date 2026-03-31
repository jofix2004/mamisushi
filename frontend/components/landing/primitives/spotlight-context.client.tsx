"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import type { MenuItem } from "@/lib/landing-data";
import { sushiImages } from "@/lib/sushi-image-map";

type SpotlightContextType = {
  hoveredItem: MenuItem | null;
  setHoveredItem: (item: MenuItem | null) => void;
};

const SpotlightContext = createContext<SpotlightContextType | null>(null);

export function SpotlightProvider({ children }: { children: ReactNode }) {
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);

  return (
    <SpotlightContext.Provider value={{ hoveredItem, setHoveredItem }}>
      {children}
      <SpotlightGlobalOverlay hoveredItem={hoveredItem} />
    </SpotlightContext.Provider>
  );
}

export function useSpotlight() {
  const ctx = useContext(SpotlightContext);
  if (!ctx) return { hoveredItem: null, setHoveredItem: () => {} };
  return ctx;
}

function getPrimaryIngredients(ingredients?: string) {
  if (!ingredients) return [];

  return ingredients
    .split("·")
    .map((part) => part.trim())
    .filter((part) => part.length > 0 && part.toLowerCase() !== "wasabi");
}

function SpotlightGlobalOverlay({ hoveredItem }: { hoveredItem: MenuItem | null }) {
  const { setHoveredItem } = useSpotlight();
  const ingredientList = hoveredItem ? getPrimaryIngredients(hoveredItem.ingredients) : [];
  const tastingNote = hoveredItem?.story ?? hoveredItem?.description;
  const contextNote = hoveredItem?.story ? hoveredItem.description : null;

  return (
    <AnimatePresence>
      {hoveredItem && (
        <motion.div
          key="spotlight-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white/85"
          style={{ backdropFilter: "blur(50px)", WebkitBackdropFilter: "blur(50px)" }}
        >
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setHoveredItem(null)}
          />

          <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.015]">
            <span className="whitespace-nowrap font-sans text-[25vw] font-bold uppercase tracking-tight text-ink">
              {hoveredItem.name.split(" ")[0]}
            </span>
          </div>

          <div className="pointer-events-none absolute right-8 top-8 z-20 md:right-12 md:top-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink-soft shadow-sm">
              <span className="mb-1 text-xl font-light leading-none">x</span>
            </div>
          </div>

          <div className="pointer-events-none relative z-10 flex w-full max-w-[1400px] flex-col-reverse items-center justify-between gap-12 px-6 md:flex-row md:px-16">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 max-w-2xl space-y-8 text-center md:text-left"
            >
              <div className="space-y-5">
                {hoveredItem.badge && (
                  <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-[0.9rem] font-bold uppercase tracking-[0.2em] text-accent">
                    {hoveredItem.badge}
                  </span>
                )}
                <div className="space-y-4">
                  <h2 className="text-balance text-[3.8rem] font-bold leading-[0.9] tracking-[-0.04em] text-ink md:text-[6rem]">
                    {hoveredItem.name}
                  </h2>
                  {tastingNote && (
                    <p className="max-w-[30ch] text-pretty text-[1.08rem] leading-8 text-ink md:text-[1.35rem] md:leading-[1.85]">
                      {tastingNote}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-6 pt-2 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] md:items-start">
                {contextNote && (
                  <div className="space-y-3 border-l-[3px] border-accent py-1 pl-5 text-left">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">
                      Hợp khi gọi
                    </p>
                    <p className="text-pretty text-[1rem] leading-8 text-ink-soft md:text-[1.08rem] md:leading-[1.8]">
                      {contextNote}
                    </p>
                  </div>
                )}

                {ingredientList.length > 0 && (
                  <div className="space-y-3 text-left md:justify-self-end">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">
                      Thành phần chính
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {ingredientList.map((ingredient) => (
                        <span
                          key={ingredient}
                          className="rounded-full border border-line bg-white/75 px-4 py-2 text-[0.82rem] font-semibold tracking-[0.01em] text-ink"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -25 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[300px] w-[300px] flex-none md:h-[600px] md:w-[600px]"
            >
              <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-ink/5" />
              <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-ink/5" />
              <div className="absolute bottom-[2%] left-1/2 h-7 w-[68%] -translate-x-1/2 rotate-[8deg] rounded-full bg-[rgba(63,41,34,0.18)] blur-[24px] md:h-9 md:blur-[28px]" />

              <Image
                src={sushiImages[hoveredItem.imageId as keyof typeof sushiImages]}
                alt={hoveredItem.name}
                fill
                className="scale-110 object-contain drop-shadow-[0_20px_30px_rgba(40,26,20,0.1)]"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
