"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS, FONTS } from '@/constants';
import StartFreeTrialButton from '../buttons/StartFreeTrialButton';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    { 
      title: 'Fasting', 
      desc: 'Track your intermittent fasting windows',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill={COLORS.primary[600]} stroke={COLORS.primary[600]} strokeWidth="1.5"/>
          <path d="M12 6V12L16 14" stroke={COLORS.neutral.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="9" fill="none" stroke={COLORS.neutral.white} strokeWidth="1" opacity="0.3"/>
        </svg>
      )
    },
    { 
      title: 'AI Meal Calories Estimate', 
      desc: 'Smart calorie calculation powered by AI',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M9 2V4M15 2V4M5 8H19M5 8C3.89543 8 3 8.89543 3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10C21 8.89543 20.1046 8 19 8H5Z" fill={COLORS.wellness.green} stroke={COLORS.wellness.green} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12H15" stroke={COLORS.neutral.white} strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 16H13" stroke={COLORS.neutral.white} strokeWidth="2" strokeLinecap="round"/>
          <circle cx="17" cy="5" r="2" fill={COLORS.wellness.green} opacity="0.8"/>
        </svg>
      )
    },
    { 
      title: 'Voice Over', 
      desc: 'Hands-free voice commands and narration',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 1C8.13 1 5 4.13 5 8C5 11.87 8.13 15 12 15C15.87 15 19 11.87 19 8C19 4.13 15.87 1 12 1Z" fill={COLORS.wellness.orange} stroke={COLORS.wellness.orange} strokeWidth="1.5"/>
          <path d="M12 15V23" stroke={COLORS.wellness.orange} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 23H16" stroke={COLORS.wellness.orange} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 8C9 8.55 9.45 9 10 9C10.55 9 11 8.55 11 8C11 7.45 10.55 7 10 7C9.45 7 9 7.45 9 8Z" fill={COLORS.neutral.white}/>
          <path d="M13 8C13 8.55 13.45 9 14 9C14.55 9 15 8.55 15 8C15 7.45 14.55 7 14 7C13.45 7 13 7.45 13 8Z" fill={COLORS.neutral.white}/>
          <path d="M10 11C10.5 11.5 11.2 11.8 12 11.8C12.8 11.8 13.5 11.5 14 11" stroke={COLORS.neutral.white} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
  ];

  const pricingPlans = {
    monthly: {
      price: 9.99,
      period: 'month',
      originalPrice: null,
      savings: null,
      perMonth: 9.99,
    },
    yearly: {
      price: 79.99,
      period: 'year',
      originalPrice: 119.88,
      savings: 33,
      perMonth: 6.67,
    },
  };

  const currentPlan = isYearly ? pricingPlans.yearly : pricingPlans.monthly;

  return (
    <section id="pricing" className="w-full py-20 bg-theme text-theme relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-success rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-theme mb-4"
          >
            Unlock Unlimited Well-being.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-theme-secondary mt-3 text-lg md:text-xl"
          >
            Your 14-Day Free Trial Awaits
          </motion.p>

          {/* Toggle Switch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mt-8 mb-4"
          >
            <span className={`transition-colors ${!isYearly ? 'text-theme' : 'text-theme-secondary'}`} style={{ fontSize: FONTS.sizes.sm, fontWeight: !isYearly ? FONTS.weights.semibold : FONTS.weights.medium }}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-0 active:outline-none"
              style={{
                backgroundColor: isYearly ? COLORS.primary[600] : COLORS.neutral[300],
              }}
              aria-label="Toggle billing period"
            >
              <motion.span
                className="inline-block h-6 w-6 transform rounded-full shadow-lg"
                style={{ backgroundColor: COLORS.neutral.white }}
                animate={{
                  x: isYearly ? 28 : 4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            </button>
            <span className={`transition-colors ${isYearly ? 'text-theme' : 'text-theme-secondary'}`} style={{ fontSize: FONTS.sizes.sm, fontWeight: isYearly ? FONTS.weights.semibold : FONTS.weights.medium }}>
              Yearly
            </span>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-3 py-1 rounded-full"
                style={{ backgroundColor: COLORS.primary[500], fontSize: FONTS.sizes.xs, fontWeight: FONTS.weights.semibold, color: COLORS.neutral.white }}
              >
                Save 33%
              </motion.span>
            )}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column: features */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-6"
          >
            <ul className="space-y-8">
              {features.map((f, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 flex items-center justify-center text-primary shrink-0 rounded-xl bg-surface-theme group-hover:scale-110 transition-transform duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <div className="group-hover:text-primary transition-colors" style={{ fontSize: FONTS.sizes.xl, fontWeight: FONTS.weights.semibold }}>{f.title}</div>
                    <div className="text-theme-secondary mt-1">{f.desc}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right column: pricing card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center lg:items-start justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isYearly ? 'yearly' : 'monthly'}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md relative"
              >
                {/* Discount Badge for Yearly */}
                {isYearly && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-primary to-success text-theme px-4 py-2 rounded-full shadow-xl z-10"
                    style={{ fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.bold }}
                  >
                    Save {pricingPlans.yearly.savings}%
                  </motion.div>
                )}

                <div className="w-full p-8 rounded-3xl bg-surface-theme shadow-2xl relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${
                    isYearly ? 'from-primary to-success' : 'from-primary to-primary'
                  }`}></div>

                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="text-theme-secondary mb-3 uppercase tracking-wider" style={{ fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.medium }}>
                        {isYearly ? 'Yearly Plan' : 'Monthly Plan'}
                      </div>
                      
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <motion.div
                          key={currentPlan.price}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="text-primary md:text-7xl"
                          style={{ fontSize: FONTS.sizes['6xl'], fontWeight: FONTS.weights.extrabold }}
                        >
                          ${currentPlan.price}
                        </motion.div>
                        <div className="text-theme-secondary md:text-2xl" style={{ fontSize: FONTS.sizes.xl }}>/{currentPlan.period}</div>
                      </div>

                      {isYearly && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-1"
                        >
                          <div className="text-primary" style={{ fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.semibold }}>
                            ${currentPlan.perMonth.toFixed(2)}/month
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-theme-secondary line-through" style={{ fontSize: FONTS.sizes.sm }}>
                              ${currentPlan.originalPrice?.toFixed(2)}/year
                            </span>
                          </div>
                        </motion.div>
                      )}

                      {!isYearly && (
                        <div className="text-theme-secondary mt-2" style={{ fontSize: FONTS.sizes.sm }}>
                          Billed monthly
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-theme-secondary" style={{ fontSize: FONTS.sizes.sm }}>
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>14-day free trial</span>
                      </div>
                      <div className="flex items-center gap-3 text-theme-secondary" style={{ fontSize: FONTS.sizes.sm }}>
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Cancel anytime</span>
                      </div>
                      <div className="flex items-center gap-3 text-theme-secondary" style={{ fontSize: FONTS.sizes.sm }}>
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>All features included</span>
                      </div>
                    </div>

                    <StartFreeTrialButton />

                    <p className="mt-6 text-center text-theme-secondary leading-relaxed" style={{ fontSize: FONTS.sizes.xs }}>
                      Subscription auto-renews at <strong>${currentPlan.price}/{currentPlan.period}</strong> after trial.{' '}
                      <a href="#" className="underline hover:text-primary transition-colors">Terms & Conditions</a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
