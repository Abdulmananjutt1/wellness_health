'use client';

import React, { useState, useEffect } from 'react';
import useHeaderState from '@/hooks/useHeaderState';
import useActiveSection from '@/hooks/useActiveSection';
import { COLORS, NAVIGATION, APP, FONTS } from '@/constants';
import { NavigationItem } from '@/types';
import GetStartedButton from '../buttons/GetStartedButton';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Header state (hero visibility + theme)
  const { isOnHero, isDark } = useHeaderState();

  const navIds = NAVIGATION.map((n) => n.id as string);
  const activeSection = useActiveSection(navIds);

  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isOnHero
            ? 'bg-theme text-theme'
            : isDark
            ? 'bg-theme text-theme header-border'
            : 'bg-white text-black'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* Logo + Text: keep original layout for large screens, compact for small */}
            <div className="min-w-0">
              {/* Small screens: compact logo + truncated name */}
              <div
                className="flex items-center space-x-2 cursor-pointer lg:hidden min-w-0"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <img
                  src="/assets/images/5.png"
                  alt="Logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                />
                <div className="flex flex-col justify-center -ml-1 min-w-0">
                  <span
                    className="inline-block tracking-tight leading-none truncate max-w-[120px] sm:text-2xl md:text-3xl"
                    style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.bold }}
                    title={APP.name}
                  >
                    {APP.name}
                  </span>
                </div>
              </div>

              {/* Large screens: original full-size logo + name */}
              <div
                className="hidden lg:flex items-center space-x-1 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <img
                  src="/assets/images/5.png"
                  alt="Logo"
                  className="w-28 h-28 object-contain"
                />
                <div className="flex flex-col justify-center -ml-2">
                  <span
                    className="tracking-tight leading-none"
                    style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes['3xl'], fontWeight: FONTS.weights.bold }}
                  >
                    {APP.name}
                  </span>
                </div>
              </div>
            </div>

  {/* Desktop Navigation */}
  <nav className="hidden lg:flex items-center space-x-8 relative">
                {NAVIGATION.map((item: NavigationItem) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="transition-all duration-200 hover:scale-105 relative group text-theme-secondary hover:text-primary inline-block"
                    style={{ color: COLORS.primary.navText, fontWeight: FONTS.weights.medium }}
                    onMouseOver={e => (e.currentTarget.style.color = COLORS.primary.navTextHover)}
                    onMouseOut={e => (e.currentTarget.style.color = COLORS.primary.navText)}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                        activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      style={{ backgroundColor: COLORS.primary[500] }}
                    />
                  </a>
                ))}
                {/* per-link underline handles active state */}
            </nav>
            

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <GetStartedButton variant="desktop" />
            </div>

            {/* Mobile Menu Button (icon only, no square background) */}
            <button
              className="lg:hidden p-2 rounded-full transition-colors duration-200 bg-transparent border-0 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-3 rotate-45' : 'top-2'
                  }`}
                  style={{ backgroundColor: isDark ? '#ffffff' : COLORS.neutral.black }}
                />
                <span
                  className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-3 opacity-0' : 'top-3'
                  }`}
                  style={{ backgroundColor: isDark ? '#ffffff' : COLORS.neutral.black }}
                />
                <span
                  className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-4'
                  }`}
                  style={{ backgroundColor: isDark ? '#ffffff' : COLORS.neutral.black }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-theme/60"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed right-4 top-17 bottom-90 bg-surface-theme shadow-lg rounded-l-xl p-4 w-[80%] max-w-xs overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Navigation (drawer) */}
            <nav className="flex flex-col space-y-3">
              {NAVIGATION.map((item: NavigationItem) => {
                const defaultColor = isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary;
                const activeColor = isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain;
                
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`py-2 px-3 rounded-md transition-all duration-200 hover:scale-105 ${
                      activeSection === item.id ? 'border-b-2' : ''
                    }`}
                    style={
                      activeSection === item.id
                        ? { 
                            borderBottomColor: COLORS.primary[500], 
                            color: activeColor, 
                            fontSize: FONTS.sizes.sm, 
                            fontWeight: FONTS.weights.medium 
                          }
                        : { 
                            color: defaultColor, 
                            fontSize: FONTS.sizes.sm, 
                            fontWeight: FONTS.weights.medium 
                          }
                    }
                    onMouseOver={e => (e.currentTarget.style.color = COLORS.primary.navTextHover)}
                    onMouseOut={e => {
                      e.currentTarget.style.color = activeSection === item.id ? activeColor : defaultColor;
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Mobile CTA Button (smaller) */}
            <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-theme">
              <GetStartedButton variant="mobile" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;