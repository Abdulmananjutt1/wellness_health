'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { COLORS, FONTS } from '@/constants';
import useHeaderState from '@/hooks/useHeaderState';
import StartJourneyButton from '../buttons/StartJourneyButton';
import WatchDemoButton from '../buttons/WatchDemoButton';

const Hero: React.FC = () => {
  const { isDark } = useHeaderState();
  
  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:pl-16 lg:pr-0 pt-20 pb-16 overflow-hidden text-theme">
      
      {/* Left Content */}
      <div className="w-full lg:w-[40%] flex flex-col gap-8 items-start z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-theme leading-tight">
          Wellness <span style={{ color: isDark ? COLORS.theme.dark.primary : COLORS.theme.light.primary }}>Reimagined</span>
        </h1>

        <p className="text-theme-secondary max-w-lg leading-relaxed" style={{ fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.normal }}>
          Transform your health journey with personalized wellness plans, expert guidance, and a supportive community that celebrates every step of your progress.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <StartJourneyButton />
          <WatchDemoButton />
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-4">
          <div className="text-center">
            <div className="text-theme" style={{ fontSize: FONTS.sizes['2xl'], fontWeight: FONTS.weights.bold }}>50K+</div>
            <div className="text-theme-secondary" style={{ fontSize: FONTS.sizes.sm }}>Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-theme" style={{ fontSize: FONTS.sizes['2xl'], fontWeight: FONTS.weights.bold }}>98%</div>
            <div className="text-theme-secondary" style={{ fontSize: FONTS.sizes.sm }}>Success Rate</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-theme" style={{ fontSize: FONTS.sizes['2xl'], fontWeight: FONTS.weights.bold }}>4.9</span>
              <Star className="w-5 h-5" style={{ color: COLORS.semantic.yellow400, fill: COLORS.semantic.yellow400 }} />
            </div>
            <div className="text-theme-secondary" style={{ fontSize: FONTS.sizes.sm }}>App Rating</div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-12 lg:mt-0 w-full lg:w-[60%] flex justify-end">
        <img
          src="/assets/images/hero.png"
          alt="Wellness App Hero - People practicing yoga and meditation"
          className="w-full max-w-2xl h-auto"
          style={{
            maxWidth: '600px',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
