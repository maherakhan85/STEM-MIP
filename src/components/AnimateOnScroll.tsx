"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' */
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";
};

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  animation = "fadeUp",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            timeoutId = setTimeout(() => setVisible(true), delay);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`scroll-anchor ${visible ? `animate-in animate-${animation}` : "animate-out"} ${className}`}
    >
      {children}
    </div>
  );
}
