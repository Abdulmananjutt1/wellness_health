"use client";


import React, { useEffect, useState } from 'react';
import { COLORS } from '../../constants';

const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const ThemeToggle: React.FC = () => {
  // avoid hydratation mismatch: don't render theme-dependent UI until mounted
  const [mounted, setMounted] = useState(false);

  const [theme, setTheme] = useState<string>(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || getSystemTheme();
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    // mark mounted after hydration so server markup doesn't mismatch
    setMounted(true);

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (localStorage.getItem('theme') === 'system') {
        setTheme(getSystemTheme());
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  const Icon =
    theme === 'dark' ? (
      // ☀️ Sun Icon (Yellow for Dark Mode)
      <svg
        width="26"
        height="26"
        fill="none"
        stroke={COLORS.wellness.orange}
        strokeWidth="2"
        className="transition-transform duration-300"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42" />
      </svg>
    ) : (
      // 🌙 Moon Icon (Blue for Light Mode)
      <svg
        width="26"
        height="26"
        fill="none"
        stroke={COLORS.primary[500]}
        strokeWidth="2"
        className="transition-transform duration-300"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>
    );

  // while not mounted, render a neutral button to match server markup
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="p-2 transition-transform duration-300"
        title="Switch theme"
        type="button"
      />
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(nextTheme)}
      className="p-2 transition-transform duration-300 hover:scale-110"
      title="Switch theme"
      type="button"
    >
      {Icon}
    </button>
  );
};

export default ThemeToggle;
