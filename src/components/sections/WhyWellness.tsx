'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { COLORS, FONTS } from '@/constants';
import useHeaderState from '@/hooks/useHeaderState';
import { whyWellnessFeatures } from '@/data/whyWellness';
import { Shield, Leaf, Zap } from 'lucide-react';


const WhyWellness: React.FC = () => {
  const { isDark } = useHeaderState();
  const features = whyWellnessFeatures;

  return (
    <section id="about" className="w-full py-16 md:py-24 px-4 md:px-16 bg-theme">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <img 
                src="/assets/images/track.png"
                alt="Wellness app on mobile device"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Small Heading */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded bg-primary-theme"></div>
              <span className="uppercase tracking-wide text-theme-secondary" style={{ fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.semibold }}>
                Why Choose Us?
              </span>
            </div>

            {/* Main Heading with Highlights - Background colors removed */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-theme">
              Achieve{' '}
              <span className="text-theme">Your Fitness</span>{' '}
              <span className="text-theme">Goals</span>{' '}
              With Us
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed max-w-lg text-theme-secondary">
              We empower you to transform your life, using advanced technology and personalized approach to make your health and fitness milestones easier to achieve.
            </p>

            {/* Features Grid - 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon Circle */}
                      <div className="flex-shrink-0 relative">
                        <div 
                          className="w-14 h-14 rounded-full border-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          style={{ 
                            backgroundColor: isDark ? `${COLORS.wellness.green}40` : `${COLORS.wellness.green}15`,
                            borderColor: isDark ? COLORS.primary[500] : COLORS.primary[400]
                          }}
                        >
                          {feature.leafIcon ? (
                            <div className="relative">
                              <Shield className="w-6 h-6" style={{ color: isDark ? COLORS.primary[400] : COLORS.primary[600] }} />
                              <Leaf className="w-3 h-3 absolute -bottom-1 -right-1" style={{ color: isDark ? COLORS.wellness.greenLight : COLORS.wellness.green }} />
                            </div>
                          ) : feature.icon === Zap ? (
                            <div className="relative">
                              <div 
                                className="w-6 h-6 rounded flex items-center justify-center"
                                style={{ 
                                  background: `linear-gradient(to bottom right, ${COLORS.primary[500]}, ${COLORS.wellness.teal})`
                                }}
                              >
                                <Zap className="w-4 h-4" style={{ color: COLORS.neutral.white }} />
                              </div>
                            </div>
                          ) : (
                            <IconComponent className="w-6 h-6" style={{ color: isDark ? COLORS.primary[400] : COLORS.primary[600] }} />
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 
                          className="mb-2 transition-colors group-hover:opacity-80 text-theme md:text-2xl"
                          style={{ fontSize: FONTS.sizes.xl, fontWeight: FONTS.weights.bold }}
                        >
                          {feature.title}
                        </h3>
                        <p className="leading-relaxed text-theme-secondary md:text-base" style={{ fontSize: FONTS.sizes.sm }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyWellness;