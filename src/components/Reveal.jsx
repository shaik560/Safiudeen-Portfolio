import { useEffect, useRef } from "react";

/** Fades/slides children in the first time they scroll into view. */
export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduceMotion) {
      el.classList.add("is-visible");
      return;
    }

    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-visible");
        // Clear the stagger delay afterwards so hover transitions stay snappy.
        timer = window.setTimeout(() => {
          el.style.transitionDelay = "0ms";
        }, delay + 650);
        observer.disconnect();
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
