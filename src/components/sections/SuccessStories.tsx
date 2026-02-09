'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Target,
  ArrowRight,
  Quote,
  Star,
  TrendingDown,
  Award,
  Users,
  UserCircle
} from 'lucide-react';
import { COLORS } from '@/constants';
import { FONTS } from '@/constants';
import useHeaderState from '@/hooks/useHeaderState';
import { stories, overallStats, IconName } from '@/data/successStories';

// Icon mapping
const iconMap: Record<IconName, React.ComponentType<any>> = {
  UserCircle,
  Users,
  TrendingDown,
  Award,
  Star,
};

const SuccessStories: React.FC = () => {
  const [activeStory, setActiveStory] = useState(0);
  const { isDark } = useHeaderState();

  const currentStory = stories[activeStory];

  return (
    <section id="success-stories" className="w-full py-16 md:py-20 px-4 md:px-16 relative overflow-hidden" style={{ fontFamily: FONTS.sans }}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontFamily: FONTS.sans }}>
            Real Success Stories
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontFamily: FONTS.sans }}>
            Join thousands of users who have transformed their lives with Wellness app
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {overallStats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center p-4 rounded-xl shadow-lg"
              >
                <div className="flex justify-center mb-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                </div>
                <p className="mb-1" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes['2xl'], fontWeight: FONTS.weights.bold }}>{stat.number}</p>
                <p style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs }}>{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left: Story Navigation */}
          <div className="lg:col-span-1 space-y-3">
            {stories.map((story, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveStory(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                  activeStory === index ? 'shadow-lg' : ''
                }`}
                style={{
                  backgroundColor: activeStory === index ? `${story.color}08` : 'transparent',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center">
                    {React.createElement(iconMap[story.icon], { 
                      className: "w-8 h-8",
                      style: { color: story.color }
                    })}
                  </div>
                  <div className="flex-1">
                    <p style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.bold }}>{story.name}</p>
                    <p style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs }}>{story.role}</p>
                  </div>
                  {activeStory === index && (
                    <ArrowRight className="w-4 h-4" style={{ color: story.color }} />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Active Story Details */}
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl p-6 shadow-lg"
            >
              {/* Story Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center">
                    {React.createElement(iconMap[currentStory.icon], { 
                      className: "w-16 h-16",
                      style: { color: currentStory.color }
                    })}
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.xl, fontWeight: FONTS.weights.bold }}>{currentStory.name}</h3>
                    <p style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.sm }}>{currentStory.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current"
                        style={{ color: COLORS.wellness.orange }}
                      />
                    ))}
                  </div>
                  <p style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs }}>Verified User</p>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl"
                  style={{ backgroundColor: isDark ? `${COLORS.neutral[700]}40` : `${COLORS.neutral[200]}40` }}
                >
                  <p className="mb-2" style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs }}>Before</p>
                  <p className="mb-1" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes['2xl'], fontWeight: FONTS.weights.bold }}>
                    {currentStory.before.weight} lbs
                  </p>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary }} />
                    <p style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs }}>{currentStory.before.date}</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl"
                  style={{ backgroundColor: `${currentStory.color}15` }}
                >
                  <p className="mb-2" style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs }}>After</p>
                  <p className="mb-1" style={{ color: currentStory.color, fontSize: FONTS.sizes['2xl'], fontWeight: FONTS.weights.bold }}>
                    {currentStory.after.weight} lbs
                  </p>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary }} />
                    <p style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs }}>{currentStory.after.date}</p>
                  </div>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="flex items-center justify-center gap-2 mb-6 p-3 rounded-xl"
                style={{ backgroundColor: `${currentStory.color}15` }}
              >
                <Target className="w-5 h-5" style={{ color: currentStory.color }} />
                <p style={{ color: currentStory.color, fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.bold }}>
                  {currentStory.achievement} in {currentStory.duration}
                </p>
              </div>

              {/* Quote */}
              <div className="mb-6 p-4 rounded-xl"
                style={{ backgroundColor: isDark ? `${COLORS.neutral[700]}20` : `${COLORS.neutral[200]}20` }}
              >
                <Quote className="w-6 h-6 mb-2" style={{ color: currentStory.color }} />
                <p className="italic" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.sm }}>"{currentStory.quote}"</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                {currentStory.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg text-center"
                    style={{ backgroundColor: `${currentStory.color}08` }}
                  >
                    <p className="mb-1" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.bold }}>{stat.value}</p>
                    <p style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

