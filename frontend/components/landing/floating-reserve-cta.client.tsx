"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";

import { CalendarIcon } from "./primitives/icons";

export function FloatingReserveCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextVisible = latest > 360;

    if (nextVisible !== visibleRef.current) {
      visibleRef.current = nextVisible;
      setVisible(nextVisible);
    }
  });

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#reserve"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed inset-x-4 bottom-4 z-20 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-5 text-sm font-medium text-white shadow-[0_18px_35px_-18px_rgba(152,50,35,0.55)] md:inset-x-auto md:right-6 md:w-auto"
        >
          <CalendarIcon className="size-[18px]" />
          Đặt bàn nhanh
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
