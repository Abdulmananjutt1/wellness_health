'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sun,
  Moon,
  Coffee,
  Dumbbell,
  Apple,
  Heart,
  Droplet,
  BookOpen,
  Flame
} from 'lucide-react';
import { COLORS } from '@/constants';
import { FONTS } from '@/constants';
import { weeks, dailyRoutines, habitStreaks, IconName } from '@/data/wellnessPlanner';

// Icon mapping
const iconMap: Record<IconName, React.ComponentType<any>> = {
  Sun,
  Moon,
  Coffee,
  Dumbbell,
  Apple,
  Heart,
  Droplet,
  BookOpen,
};

const WellnessPlanner: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const currentWeekData = weeks[0];

  return (
    <section id="wellness-planner" className="w-full py-16 md:py-20 px-4 md:px-16 bg-theme relative overflow-hidden" style={{ fontFamily: FONTS.sans }}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-theme mb-4" style={{ fontFamily: FONTS.sans }}>
            Plan Your Perfect Day
          </h2>
          <p className="text-base md:text-lg text-theme-secondary max-w-3xl mx-auto" style={{ fontFamily: FONTS.sans }}>
            Organize your wellness routine, track daily habits, and build consistency with our smart planner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left: Weekly Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl p-6 bg-surface-theme shadow-lg">
              {/* Week Navigation */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setCurrentWeek(prev => Math.max(0, prev - 1))}
                  className="p-2 rounded-lg hover:bg-theme/5 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-theme-secondary" />
                </button>
                <div className="text-center">
                  <h3 className="text-lg text-theme" style={{ fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.bold }}>This Week</h3>
                  <p className="text-theme-secondary" style={{ fontSize: FONTS.sizes.sm }}>October 2024</p>
                </div>
                <button
                  onClick={() => setCurrentWeek(prev => prev + 1)}
                  className="p-2 rounded-lg hover:bg-theme/5 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-theme-secondary" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1.5 sm:gap-2 md:gap-3 justify-items-center">
                {currentWeekData.days.map((day, index) => {
                  const completionPercentage = (day.habits / day.total) * 100;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`p-1.5 sm:p-2 md:p-4 rounded-xl transition-all duration-300 w-full max-w-[60px] sm:max-w-[70px] md:max-w-none ${
                        day.completed ? 'shadow-md' : 'shadow-sm'
                      }`}
                      style={{
                        backgroundColor: day.completed ? `${COLORS.wellness.green}10` : 'transparent',
                        border: `2px solid ${day.completed ? COLORS.wellness.green : 'transparent'}`,
                      }}
                    >
                      <p className="text-theme-secondary mb-0.5 sm:mb-1 text-center text-[10px] sm:text-xs" style={{ fontWeight: FONTS.weights.semibold }}>
                        {day.day}
                      </p>
                      <p className="text-theme mb-1 sm:mb-2 md:mb-3 text-center text-sm sm:text-base md:text-xl" style={{ fontWeight: FONTS.weights.black }}>{day.date}</p>
                      
                      {/* Progress Circle */}
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1 sm:mb-2">
                        <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 48 48">
                          <circle
                            cx="24"
                            cy="24"
                            r="18"
                            stroke={COLORS.neutral[200]}
                            strokeWidth="2"
                            fill="none"
                            className="opacity-20"
                            style={{ strokeWidth: 'clamp(1.5px, 0.5vw, 4px)' }}
                          />
                          <motion.circle
                            cx="24"
                            cy="24"
                            r="18"
                            stroke={day.completed ? COLORS.wellness.green : COLORS.primary[600]}
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray={113}
                            strokeDashoffset={113 - (completionPercentage / 100) * 113}
                            strokeLinecap="round"
                            initial={{ strokeDashoffset: 113 }}
                            animate={{ strokeDashoffset: 113 - (completionPercentage / 100) * 113 }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            style={{ strokeWidth: 'clamp(1.5px, 0.5vw, 4px)' }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-theme text-[8px] sm:text-[10px] md:text-xs" style={{ fontWeight: FONTS.weights.bold }}>
                            {day.habits}/{day.total}
                          </span>
                        </div>
                      </div>
                      
                      {day.completed && (
                        <div className="flex justify-center">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" style={{ color: COLORS.wellness.green }} />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Habit Streaks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-theme" style={{ fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.bold }}>Habit Streaks</h3>
              <Flame className="w-5 h-5 text-theme-secondary" />
            </div>

            {habitStreaks.map((habit, index) => {
              const Icon = iconMap[habit.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl p-4 shadow-lg"
                  style={{ backgroundColor: `${habit.color}08` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${habit.color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: habit.color }} />
                      </div>
                      <div>
                        <p className="text-theme" style={{ fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.bold }}>{habit.name}</p>
                        <p className="text-theme-secondary" style={{ fontSize: FONTS.sizes.xs }}>Current streak</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p style={{ color: habit.color, fontSize: FONTS.sizes.xl, fontWeight: FONTS.weights.black }}>
                        {habit.streak}
                      </p>
                      <p className="text-theme-secondary" style={{ fontSize: FONTS.sizes.xs }}>days</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-2 rounded-full ${
                          i < Math.min(habit.streak, 7)
                            ? 'shadow-sm'
                            : 'opacity-20'
                        }`}
                        style={{
                          backgroundColor: i < Math.min(habit.streak, 7) ? habit.color : COLORS.neutral[200],
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Daily Routine Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-xl p-6 bg-surface-theme shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl text-theme" style={{ fontSize: FONTS.sizes.xl, fontWeight: FONTS.weights.bold }}>Today's Routine</h3>
            <Clock className="w-5 h-5 text-theme-secondary" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: COLORS.neutral[200] }} />

            <div className="space-y-6">
              {dailyRoutines.map((routine, index) => {
                const Icon = iconMap[routine.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="relative flex items-start gap-4"
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                        routine.completed ? 'ring-4' : ''
                      }`}
                      style={{
                        backgroundColor: routine.completed ? routine.color : `${routine.color}20`,
                        ...(routine.completed && { 
                          boxShadow: `0 0 0 4px ${routine.color}40`
                        }),
                      }}
                    >
                      <Icon
                        className="w-8 h-8"
                        style={{ color: routine.completed ? COLORS.neutral.white : routine.color }}
                      />
                      {routine.completed && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: COLORS.wellness.green }}
                        >
                          <CheckCircle2 className="w-4 h-4" style={{ color: COLORS.neutral.white }} />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="text-theme-secondary" style={{ fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.semibold }}>{routine.time}</p>
                          <h4 className="text-theme" style={{ fontSize: FONTS.sizes.base, fontWeight: FONTS.weights.bold }}>{routine.title}</h4>
                        </div>
                        <span className="text-theme-secondary" style={{ fontSize: FONTS.sizes.xs }}>{routine.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WellnessPlanner;

