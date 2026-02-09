"use client";

import React from 'react';
import ThemeToggle from './ThemeToggle';

const ThemeFloating: React.FC = () => {
  return (
    <div
      aria-hidden={false}
      className="fixed right-6 bottom-6 z-50 lg:right-10 lg:bottom-8"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Use page background in light mode, surfaced background in dark mode */}
      <div className="bg-theme dark:bg-surface-theme border border-theme rounded-full p-2 shadow-lg">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default ThemeFloating;
