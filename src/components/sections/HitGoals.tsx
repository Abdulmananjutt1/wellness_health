'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { hitGoalsSteps } from '../../data/hitGoals';
import { COLORS, FONTS } from '@/constants';
import useHeaderState from '@/hooks/useHeaderState';

const HitGoals: React.FC = () => {
  const { isDark } = useHeaderState();
  
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-16 bg-theme relative overflow-visible md:overflow-hidden">
      {/* ✅ Removed white overlay background completely */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-theme mb-4">
            Hit Your Health Goals in <span style={{ color: isDark ? COLORS.theme.dark.primary : COLORS.theme.light.primary }}>1-2-3</span>
          </h2>
          <p className="text-lg md:text-xl text-theme-secondary max-w-2xl mx-auto">
            Our simple, powerful approach to a healthier you.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {hitGoalsSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center md:items-start"
            >
              {/* Step 2 with text */}
              {step.number === 2 && (
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="md:text-6xl opacity-20" style={{ fontSize: FONTS.sizes['5xl'], fontWeight: FONTS.weights.black, color: isDark ? COLORS.theme.dark.primary : COLORS.theme.light.primary }}>
                      {step.number}
                    </div>
                    <h3 className="text-theme md:text-3xl" style={{ fontSize: FONTS.sizes['2xl'], fontWeight: FONTS.weights.bold }}>
                      Monitor{' '}
                      <span className="text-theme">
                        {step.highlightedWords}
                      </span>
                    </h3>
                  </div>
                  <p className="text-theme-secondary leading-relaxed max-w-md md:text-lg" style={{ fontSize: FONTS.sizes.base }}>
                    {step.description}
                  </p>
                </div>
              )}

              {/* Images */}
              <div className="w-full flex justify-center md:justify-start">
                {step.number === 2 ? (
                  <div className="flex justify-center items-center gap-4 md:gap-6">
                    <div
                      className={`relative ${step.imageWidth} flex-1 ${step.imageHeight} overflow-hidden max-[428px]:h-auto`}
                    >
                      <img
                        src={step.images?.[0]}
                        alt={`${step.alt} - 1`}
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                      />
                    </div>
                    <div
                      className={`relative ${step.imageWidth} flex-1 ${step.imageHeight} overflow-hidden max-[428px]:h-auto`}
                    >
                      <img
                        src={step.images?.[1]}
                        alt={`${step.alt} - 2`}
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                      />
                    </div>
                  </div>
                ) : (
                  // Larger single images for step 1 & 3
                  <div
                    className={`relative ${step.imageWidth} ${step.imageHeight} overflow-hidden max-[428px]:h-auto`}
                  >
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="w-full h-full object-cover rounded-2xl shadow-xl max-[428px]:object-contain"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HitGoals;