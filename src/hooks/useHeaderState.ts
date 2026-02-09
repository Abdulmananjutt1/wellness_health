'use client';

import { useEffect, useState } from 'react';

type UseHeaderState = {
  isOnHero: boolean;
  isDark: boolean;
};

// Hook detects whether the page is currently showing the hero section
// and whether the app is in dark mode. It uses IntersectionObserver to
// observe the element with id="hero" and a MutationObserver to watch
// for `class` changes on <html> so we can track dark mode toggles.
export default function useHeaderState(): UseHeaderState {
  const [isOnHero, setIsOnHero] = useState<boolean>(true);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hero = document.getElementById('hero');
    if (hero) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Consider on-hero when at least 40% of hero is visible
            setIsOnHero(entry.intersectionRatio > 0.4);
          });
        },
        { threshold: [0, 0.25, 0.4, 0.6, 1] }
      );
      io.observe(hero);
      return () => io.disconnect();
    } else {
      // Fallback: use scroll position relative to viewport height
      const onScroll = () => {
        setIsOnHero(window.scrollY < window.innerHeight * 0.6);
      };
      onScroll();
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const el = document.documentElement;
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'class') {
          setIsDark(el.classList.contains('dark'));
        }
      }
    });
    mo.observe(el, { attributes: true, attributeFilter: ['class'] });

    // ensure initial state is correct
    setIsDark(el.classList.contains('dark'));

    return () => mo.disconnect();
  }, []);

  return { isOnHero, isDark };
}
