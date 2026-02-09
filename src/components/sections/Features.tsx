'use client';

import React from 'react';
import { featuresData } from '../../data/features';
import { COLORS, FONTS } from '../../constants';
import useHeaderState from '@/hooks/useHeaderState';

const Features: React.FC = () => {
  const { isDark } = useHeaderState();
  
  return (
    <section id="features" className="w-full py-16 md:py-20 px-4 md:px-16 bg-theme">
  <div className="max-w-7xl mx-auto max-[428px]:flex max-[428px]:flex-col max-[428px]:items-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-theme">
          We're here to help you{' '}
          <span style={{ color: isDark ? COLORS.theme.dark.primary : COLORS.theme.light.primary }}>feel better.</span>
        </h2>

        {/* Features Grid */}
  <div className="md:grid md:grid-cols-3 gap-8 md:gap-12 max-[428px]:flex max-[428px]:flex-col max-[428px]:items-center">
          {featuresData.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center md:items-start text-center md:text-left max-[428px]:mx-auto w-full md:w-auto max-w-xs md:max-w-none px-4 md:px-0"
                style={{ fontFamily: FONTS.sans }}
              >
                {/* Icon */}
                <IconComponent
                  className={`w-12 h-12 mb-5 max-[428px]:mx-auto md:mx-0`}
                  style={{
                    color:
                      index === 0
                        ? COLORS.primary[500]
                        : index === 1
                        ? COLORS.wellness.purple
                        : COLORS.wellness.green,
                  }}
                />

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-theme mb-3 text-center md:text-left" style={{ fontFamily: FONTS.sans }}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-theme-secondary leading-relaxed text-center md:text-left" style={{ fontFamily: FONTS.sans }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

