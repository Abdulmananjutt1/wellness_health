'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplet, 
  ChefHat,
  Award,
  Clock,
  Flame,
  Camera,
} from 'lucide-react';
import { COLORS, FONTS } from '@/constants';
import { macroTargets, waterTarget, waterCurrent, caloriesTarget, caloriesCurrent, meals, exercises } from '../../data/nutritionTracker';
import { useNutritionTracker } from '../../hooks/useNutritionTracker';

const NutritionTracker: React.FC = () => {
  const { activeTab, setActiveTab, animatedValues, tabs, remainingCalories, remainingWater, caloriesPercentage } = useNutritionTracker();

  const MacroCircle = ({ 
    current, 
    target, 
    unit, 
    color, 
    label, 
    delay = 0 
  }: { 
    current: number; 
    target: number; 
    unit: string; 
    color: string; 
    label: string;
    delay?: number;
  }) => {
    const percentage = Math.min((current / target) * 100, 100);
    const circumference = 2 * Math.PI * 35;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="flex flex-col items-center"
      >
        <div className="relative w-24 h-24">
          <svg className="transform -rotate-90 w-24 h-24">
            <circle
              cx="48"
              cy="48"
              r="35"
              stroke={COLORS.neutral[200]}
              strokeWidth="6"
              fill="none"
              className="opacity-20"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="35"
              stroke={color}
              strokeWidth="6"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, delay, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-theme" style={{ fontSize: FONTS.sizes.xl, fontWeight: FONTS.weights.bold }}>{current}</span>
            <span className="text-theme-secondary" style={{ fontSize: FONTS.sizes.xs }}>{unit}</span>
          </div>
        </div>
        <span className="mt-2 text-theme" style={{ fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.semibold }}>{label}</span>
        <span className="text-theme-secondary" style={{ fontSize: FONTS.sizes.xs }}>of {target}{unit}</span>
      </motion.div>
    );
  };

  return (
    <section id="nutrition-tracker" className="w-full py-16 md:py-20 px-4 md:px-16 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-theme mb-4">
            Track Your Nutrition
          </h2>
          <p className="text-base md:text-lg text-theme-secondary max-w-3xl mx-auto">
            Master your macros, plan your meals, and achieve your fitness goals with precision tracking
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-6 mb-8"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? ''
                    : 'text-theme-secondary hover:text-theme'
                }`}
                style={{
                  backgroundColor: isActive ? COLORS.primary[600] : 'transparent',
                  fontWeight: FONTS.weights.semibold,
                  color: isActive ? COLORS.neutral.white : undefined,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: COLORS.primary[600] }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                  />
                )}
                <Icon className="w-5 h-5 relative z-10" style={{ color: isActive ? COLORS.neutral.white : undefined }} />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'macros' && (
            <motion.div
              key="macros"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
            >
              {/* Macro Circles */}
              <MacroCircle
                current={animatedValues.protein}
                target={macroTargets.protein.target}
                unit="g"
                color={macroTargets.protein.color}
                label="Protein"
                delay={0.1}
              />
              <MacroCircle
                current={animatedValues.carbs}
                target={macroTargets.carbs.target}
                unit="g"
                color={macroTargets.carbs.color}
                label="Carbs"
                delay={0.2}
              />
              <MacroCircle
                current={animatedValues.fats}
                target={macroTargets.fats.target}
                unit="g"
                color={macroTargets.fats.color}
                label="Fats"
                delay={0.3}
              />
            </motion.div>
          )}

          {activeTab === 'meals' && (
            <motion.div
              key="meals"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
            >
              {/* Create Meal Section - Left */}
              <div className="rounded-xl p-5 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-theme" style={{ fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.bold }}>Create Your Meal</h3>
                  <ChefHat className="w-5 h-5 text-theme-secondary" />
                </div>
                
                <div className="space-y-4">
                  <div className="text-theme-secondary leading-relaxed" style={{ fontSize: FONTS.sizes.sm }}>
                    <p className="mb-3">
                      Easily track your meals and maintain your nutrition goals with our intuitive meal creation feature. 
                      Capture your food moments by uploading photos of your meals, add detailed descriptions, and log 
                      all the ingredients you've consumed throughout the day.
                    </p>
                    <p className="mb-3">
                      Our meal tracker helps you monitor your daily calorie intake, macronutrients, and ensures you 
                      stay on track with your wellness journey. Simply take a picture of your meal, add the meal name, 
                      and include any additional details or ingredients you'd like to record.
                    </p>
                    <p>
                      You can also share your healthy meal creations with the community and get inspired by others' 
                      nutrition choices. Start tracking your meals today and take control of your nutrition!
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ 
                      backgroundColor: COLORS.primary[600],
                      color: COLORS.neutral.white,
                      fontWeight: FONTS.weights.semibold,
                      fontSize: FONTS.sizes.sm,
                    }}
                  >
                    <Camera className="w-4 h-4" />
                    Create Your Meal
                  </motion.button>
                </div>
              </div>

              {/* Existing Meals - Right */}
              <div>
                <h4 className="text-theme mb-4" style={{ fontSize: FONTS.sizes.base, fontWeight: FONTS.weights.bold }}>Today's Meals</h4>
                <div className="grid grid-cols-1 gap-4">
                  {meals.map((meal, index) => (
                    <div
                      key={meal.name}
                      className="rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
                      style={{ borderLeftColor: meal.color }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-theme mb-1" style={{ fontSize: FONTS.sizes.base, fontWeight: FONTS.weights.bold }}>{meal.name}</h3>
                          <div className="flex items-center gap-1.5 text-theme-secondary" style={{ fontSize: FONTS.sizes.xs }}>
                            <Clock className="w-3 h-3" />
                            {meal.time}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ 
                            color: meal.color,
                            fontSize: FONTS.sizes.xs,
                            fontWeight: FONTS.weights.bold,
                          }}
                        >
                          <Flame className="w-3 h-3" />
                          {meal.calories}
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {meal.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-theme-secondary" style={{ fontSize: FONTS.sizes.xs }}>
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: meal.color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'exercise' && (
            <motion.div
              key="exercise"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
              {exercises.map((exercise, index) => {
                const IconComponent = exercise.icon;
                return (
                <div
                  key={exercise.name}
                  className="rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-lg">
                    <IconComponent className="w-6 h-6" style={{ color: COLORS.primary[600] }} />
                  </div>
                  <h3 className="text-theme mb-2" style={{ fontSize: FONTS.sizes.base, fontWeight: FONTS.weights.bold }}>{exercise.name}</h3>
                  <div className="space-y-1.5 text-theme-secondary" style={{ fontSize: FONTS.sizes.xs }}>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {exercise.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Flame className="w-3 h-3" />
                      {exercise.calories} kcal burned
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3 h-3" />
                      {exercise.type}
                    </div>
                  </div>
                </div>
              );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Calories Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-xl p-5 shadow-xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <Flame className="w-5 h-5" style={{ color: COLORS.primary[600] }} />
                  </div>
                  <div>
                    <h3 className="text-theme" style={{ fontSize: FONTS.sizes.base, fontWeight: FONTS.weights.bold }}>Calories</h3>
                    <p className="text-theme-secondary" style={{ fontSize: FONTS.sizes.xs }}>Today's intake</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-theme" style={{ fontSize: FONTS.sizes['2xl'], fontWeight: FONTS.weights.black }}>{animatedValues.calories}</span>
                  <span className="text-theme-secondary" style={{ fontSize: FONTS.sizes.base }}>/ {caloriesTarget}</span>
                </div>
                <div className="w-full bg-theme/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${caloriesPercentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: COLORS.primary[600] }}
                  />
                </div>
                <p className="text-theme-secondary" style={{ fontSize: FONTS.sizes.xs }}>
                  {remainingCalories} calories remaining
                </p>
              </div>
            </div>
          </motion.div>

          {/* Water Intake Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-xl p-5 shadow-xl"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <Droplet className="w-5 h-5" style={{ color: COLORS.wellness.teal }} />
                </div>
                <div>
                  <h3 className="text-theme" style={{ fontSize: FONTS.sizes.base, fontWeight: FONTS.weights.bold }}>Water Intake</h3>
                  <p className="text-theme-secondary" style={{ fontSize: FONTS.sizes.xs }}>Stay hydrated</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-theme" style={{ fontSize: FONTS.sizes['2xl'], fontWeight: FONTS.weights.black }}>{animatedValues.water}</span>
                <span className="text-theme-secondary" style={{ fontSize: FONTS.sizes.base }}>/ {waterTarget} glasses</span>
              </div>
              <div className="grid grid-cols-8 gap-2">
                {Array.from({ length: waterTarget }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    className={`h-12 rounded-lg ${
                      i < waterCurrent
                        ? 'shadow-lg border-2'
                        : 'border-2 border-dashed border-theme/20'
                    }`}
                    style={{
                      backgroundColor: i < waterCurrent ? COLORS.wellness.teal : 'transparent',
                      borderColor: i < waterCurrent ? COLORS.wellness.teal : undefined,
                    }}
                  />
                ))}
              </div>
              <p className="text-theme-secondary" style={{ fontSize: FONTS.sizes.xs }}>
                {remainingWater} more glasses to reach your goal
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default NutritionTracker;

