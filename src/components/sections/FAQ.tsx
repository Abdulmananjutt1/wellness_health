'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, Heart, Moon, Music, Utensils, Target, Dumbbell, Award } from 'lucide-react';
import { faqCategories } from '../../data/faq';
import { COLORS, FONTS } from '@/constants';
import useHeaderState from '@/hooks/useHeaderState';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { isDark } = useHeaderState();

  // ...existing code...
  // Map icon string to Lucide icon component
  const iconMap: Record<string, React.ElementType> = {
    HelpCircle,
    Sparkles,
    Heart,
    Moon,
    Music,
    Utensils,
    Target,
    Dumbbell,
    Award,
  };

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const fullIndex = `${categoryIndex}-${questionIndex}`;
    const currentOpen = openIndex === null ? null : openIndex;
    const newIndex = parseInt(fullIndex.split('-')[0]) * 100 + parseInt(fullIndex.split('-')[1]);
    
    if (currentOpen === newIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(newIndex);
    }
  };

  const getFullIndex = (categoryIndex: number, questionIndex: number) => {
    return categoryIndex * 100 + questionIndex;
  };

  return (
    <section className="w-full py-20 md:py-28 px-4 md:px-16 bg-theme">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-theme" style={{ fontSize: FONTS.sizes['4xl'], fontWeight: FONTS.weights.bold }}>
            Frequently Asked Questions
          </h2>
          <p className="text-center text-theme-secondary max-w-2xl mx-auto" style={{ fontSize: FONTS.sizes.lg }}>
            Find answers to common questions about wellness, meditation, and your journey to better health.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              {/* Category Title with Icon */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                {category.icon && iconMap[category.icon] && (
                  React.createElement(iconMap[category.icon], { 
                    className: "w-6 h-6", 
                    style: { color: isDark ? COLORS.theme.dark.icon : COLORS.theme.light.icon } 
                  })
                )}
                <h3 className="uppercase tracking-wide" style={{ 
                  fontSize: FONTS.sizes.xl, 
                  fontWeight: FONTS.weights.bold, 
                  color: isDark ? COLORS.theme.dark.icon : COLORS.theme.light.icon 
                }}>
                  {category.category}
                </h3>
              </motion.div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const fullIndex = getFullIndex(categoryIndex, questionIndex);
                  const isOpen = openIndex === fullIndex;

                  return (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: questionIndex * 0.05 }}
                      whileHover={{ y: -2 }}
                      className="bg-surface-theme border border-theme rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                      style={{ 
                        borderColor: isDark ? COLORS.theme.dark.border : COLORS.theme.light.border,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${isDark ? COLORS.theme.dark.primary : COLORS.theme.light.primary}80`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = isDark ? COLORS.theme.dark.border : COLORS.theme.light.border;
                      }}
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left group"
                      >
                        <span className="text-theme pr-4 transition-colors flex-1" style={{ 
                          fontSize: FONTS.sizes.base, 
                          fontWeight: FONTS.weights.semibold,
                          color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain
                        }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = isDark ? COLORS.theme.dark.primary : COLORS.theme.light.primary;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain;
                          }}>
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 ml-4"
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" 
                            style={{ 
                              backgroundColor: isOpen ? `${isDark ? COLORS.theme.dark.primary : COLORS.theme.light.primary}1A` : (isDark ? COLORS.theme.dark.bg : COLORS.theme.light.bg),
                            }}
                            onMouseEnter={(e) => {
                              if (!isOpen) {
                                e.currentTarget.style.backgroundColor = `${isDark ? COLORS.theme.dark.primary : COLORS.theme.light.primary}1A`;
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isOpen) {
                                e.currentTarget.style.backgroundColor = isDark ? COLORS.theme.dark.bg : COLORS.theme.light.bg;
                              }
                            }}>
                            <ChevronDown className="w-4 h-4 transition-colors" 
                              style={{ 
                                color: isOpen ? (isDark ? COLORS.theme.dark.primary : COLORS.theme.light.primary) : (isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary),
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = isDark ? COLORS.theme.dark.primary : COLORS.theme.light.primary;
                              }}
                              onMouseLeave={(e) => {
                                if (!isOpen) {
                                  e.currentTarget.style.color = isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary;
                                }
                              }} />
                          </div>
                        </motion.div>
                      </button>

                      {/* Answer */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-theme">
                              <p className="text-theme-secondary leading-relaxed pt-4" style={{ fontSize: FONTS.sizes.sm }}>
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

