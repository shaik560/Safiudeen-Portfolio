import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data/portfolio";

const SECTION_IDS = [...NAV_ITEMS.map((item) => item.id), "contact"];
const SCROLLED_AFTER = 40;
const BACK_TO_TOP_AFTER = 700;
const HERO_PARALLAX_MAX = 800;
const HERO_PARALLAX_RATIO = 0.12;

/** Tracks scroll position and exposes header/back-to-top state + CSS variables. */
export function useScrollState() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const root = document.documentElement;

    const onScroll = () => {
      const { scrollY, innerHeight } = window;

      setIsScrolled(scrollY > SCROLLED_AFTER);
      setShowBackToTop(scrollY > BACK_TO_TOP_AFTER);

      const maxScroll = root.scrollHeight - innerHeight;
      root.style.setProperty("--progress", String(maxScroll > 0 ? scrollY / maxScroll : 0));
      root.style.setProperty(
        "--hero-shift",
        `${Math.min(scrollY, HERO_PARALLAX_MAX) * HERO_PARALLAX_RATIO}px`
      );

      const probe = scrollY + innerHeight * 0.35;
      const current = SECTION_IDS.filter((id) => {
        const el = document.getElementById(id);
        return el && el.offsetTop <= probe;
      }).pop();
      setActiveSection(current ?? SECTION_IDS[0]);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { isScrolled, showBackToTop, activeSection };
}
