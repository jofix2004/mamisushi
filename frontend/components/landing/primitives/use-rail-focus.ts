"use client";

import { useEffect, useRef } from "react";

import { useReducedMotion } from "framer-motion";

export function useRailFocus<T extends HTMLElement>() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<T | null>>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const applyStaticState = () => {
      itemRefs.current.forEach((item) => {
        if (!item) {
          return;
        }

        item.style.setProperty("--rail-scale", "1");
        item.style.setProperty("--rail-opacity", "1");
      });
    };

    if (reduceMotion) {
      applyStaticState();
      return;
    }

    let frameId = 0;
    let isVisible = true;

    const updateFocus = () => {
      const containerRect = container.getBoundingClientRect();
      const viewportCenter = containerRect.left + containerRect.width / 2;
      const maxDistance = Math.max(containerRect.width * 0.48, 1);

      itemRefs.current.forEach((item) => {
        if (!item) {
          return;
        }

        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = Math.min(
          Math.abs(itemCenter - viewportCenter) / maxDistance,
          1,
        );
        const focus = 1 - distance;
        const scale = 0.92 + focus * 0.16;
        const opacity = 0.68 + focus * 0.32;

        item.style.setProperty("--rail-scale", scale.toFixed(3));
        item.style.setProperty("--rail-opacity", opacity.toFixed(3));
      });

      if (isVisible) {
        frameId = requestAnimationFrame(updateFocus);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? false;
        cancelAnimationFrame(frameId);

        if (isVisible) {
          frameId = requestAnimationFrame(updateFocus);
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(container);
    frameId = requestAnimationFrame(updateFocus);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [reduceMotion]);

  const setItemRef = (index: number, node: T | null) => {
    itemRefs.current[index] = node;
  };

  return {
    containerRef,
    setItemRef,
  };
}
