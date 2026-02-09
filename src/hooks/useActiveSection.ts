import { useEffect, useState, useRef } from 'react';

/**
 * Lightweight active-section hook that returns the id of the nav-targeted
 * section currently nearest the top of the viewport. This uses a scroll
 * listener and a simple geometry-based selection which tends to be more
 * deterministic across browsers than relying on IntersectionObserver
 * thresholds for this specific nav-highlight use case.
 */
export default function useActiveSection(sectionIds: string[] = []) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const ids = sectionIds.length
      ? sectionIds
      : Array.from(document.querySelectorAll('section[id]')).map((s) => s.id);

    const getElements = () => ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const update = () => {
      const elems = getElements();
      if (!elems.length) {
        setActiveId(null);
        return;
      }

      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      const scrollPos = window.scrollY + headerHeight + 1; // position just under header

      // choose the last section whose offsetTop is <= scrollPos
      const byOffset = elems
        .map((el) => ({ id: el.id, top: el.offsetTop }))
        .sort((a, b) => a.top - b.top);

      let chosen: string | null = null;
      for (const s of byOffset) {
        if (s.top <= scrollPos) chosen = s.id;
        else break;
      }

      // if nothing matched, pick the first section (so Home shows on very top)
      if (!chosen && byOffset.length) chosen = byOffset[0].id;

      setActiveId(chosen);
    };

    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    // initial run
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds.join(',')]);

  return activeId;
}