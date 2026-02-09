"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BarChart3 } from 'lucide-react';
import { foodScannerFeatures } from '../../data/foodScanner';
import { COLORS, FONTS } from '@/constants';

const FoodScanner: React.FC = () => {

  return (
    <section id="food-scanner" className="w-full py-20 bg-theme text-theme relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-theme mb-4">
            Smart Food Tracking
          </h2>
          <p className="text-base md:text-lg text-theme-secondary mt-3 max-w-3xl mx-auto">
            Track your nutrition effortlessly with our advanced food recognition technology. Multiple ways to log your meals instantly.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {foodScannerFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-surface-theme rounded-2xl p-8 border border-theme shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: feature.iconBg }}>
                    <IconComponent className="w-8 h-8" style={{ color: feature.iconColor }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-theme mb-4" style={{ fontSize: FONTS.sizes['2xl'], fontWeight: FONTS.weights.bold }}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-theme-secondary mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-theme-secondary" style={{ fontSize: FONTS.sizes.sm }}>
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: feature.iconColor }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-surface-theme rounded-2xl p-8 md:p-12 border border-theme shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <BarChart3 className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
                <h3 className="text-theme" style={{ fontSize: FONTS.sizes['2xl'], fontWeight: FONTS.weights.bold }}>
                  Complete Nutrition Analysis
                </h3>
              </div>
              <p className="text-theme-secondary" style={{ fontSize: FONTS.sizes.lg }}>
                Get detailed breakdowns of calories, protein, carbs, fats, and more for every food item you track.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 btn-theme rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
              style={{ fontWeight: FONTS.weights.semibold, fontSize: FONTS.sizes.lg }}
            >
              Try It Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodScanner;

