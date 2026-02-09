'use client';

import React from 'react';
import { COLORS, FONTS } from '@/constants';
import {
  ClipboardList,
  Zap,
  Leaf,
  Salad,
  UtensilsCrossed,
  Gauge,
  Activity,
  Footprints,
  Flame,
} from 'lucide-react';

const CalorieCounter: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 gap-6 sm:gap-8 text-theme calorie-counter-section">
      {/* Left Panel */}
      <div className="flex-1 flex flex-col justify-start gap-6 sm:gap-8 max-w-full lg:max-w-md">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-theme leading-tight calorie-counter-title">
            CALORIE
            <br />
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              COUNTER
            </span>
          </h1>
          <p className="text-base sm:text-lg text-theme-secondary max-w-full font-light leading-relaxed">
            Manage Your Daily Food Diary, Track Your Activities
            <br className="hidden sm:block" />
            And Lose Weight Successfully
          </p>
        </div>

        <button className="group bg-accent-theme hover:bg-primary-accent-theme text-theme font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-max text-sm sm:text-base flex items-center justify-center sm:justify-start gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Go to the app
          <span className="font-bold transform group-hover:translate-x-1 transition-transform">→</span>
        </button>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-10 calorie-counter-stats">
          <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl hover:bg-theme/5 transition-all duration-300 cursor-pointer flex-1 min-w-[80px]">
            <span className="text-xl sm:text-2xl font-bold text-theme">50M+</span>
            <span className="text-theme-secondary text-xs sm:text-sm mt-1">people</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl hover:bg-theme/5 transition-all duration-300 cursor-pointer flex-1 min-w-[80px]">
            <span className="text-xl sm:text-2xl font-bold text-theme">6K</span>
            <span className="text-theme-secondary text-xs sm:text-sm mt-1">recipes</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl border-2 border-dashed border-accent-theme bg-accent-theme/10 hover:bg-accent-theme/20 transition-all duration-300 cursor-pointer flex-1 min-w-[80px]">
            <span className="text-xl sm:text-2xl font-bold text-theme">87K</span>
            <span className="text-theme-secondary text-xs sm:text-sm mt-1">reviews</span>
          </div>
        </div>
      </div>

      {/* Right Panel - Dashboard Cards */}
      <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-2 gap-4 sm:gap-6 min-w-0 max-w-full calorie-counter-grid">
        {/* Summary Card */}
        <div className="bg-card-theme rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 calorie-counter-card">
          <div className="font-bold mb-3 sm:mb-4 flex items-center gap-2" style={{ color: COLORS.primary[700], fontSize: FONTS.sizes.lg }}>
            <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /> Summary
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-primary/20 flex items-center justify-center mb-2 sm:mb-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border-4 flex items-center justify-center" style={{ borderColor: COLORS.primary[500], borderTopColor: 'transparent', transform: 'rotate(-45deg)' }}>
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-theme" style={{ transform: 'rotate(45deg)', marginTop: '4px' }}>1031</span>
                </div>
              </div>
            </div>
            <span className="text-xs sm:text-sm text-theme-secondary font-medium text-center">
              Remaining Calories
            </span>
          </div>
        </div>

        {/* Recipes Card */}
        <div className="bg-surface-theme rounded-3xl p-4 sm:p-6 flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 calorie-counter-card">
          <div className="font-bold mb-3 sm:mb-4 flex items-center gap-2" style={{ color: COLORS.primary[700], fontSize: FONTS.sizes.lg }}>
            <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /> Recipes
          </div>
          <ul className="text-xs sm:text-sm text-theme-secondary list-none space-y-2 sm:space-y-3">
            <li className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg hover:bg-theme/5 transition-colors">
              <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span>Breakfast, Lunch, Dinner</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg hover:bg-theme/5 transition-colors">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: COLORS.semantic.green500 }} />
              <span>High Protein</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg hover:bg-theme/5 transition-colors">
              <Salad className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: COLORS.semantic.blue500 }} />
              <span>Low Carb, Low Calorie</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg hover:bg-theme/5 transition-colors">
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: COLORS.semantic.green500 }} />
              <span>Vegetarian</span>
            </li>
          </ul>
        </div>

        {/* Nutrition Card */}
        <div className="bg-card-theme rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 calorie-counter-card">
          <div className="font-bold flex items-center gap-2 mb-3 sm:mb-4" style={{ color: COLORS.primary[700], fontSize: FONTS.sizes.lg }}>
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /> Nutrition
          </div>
          <div className="space-y-3 sm:space-y-4">
            {[
              { meal: 'Lunch', kcal: '374 / 702', width: '53%' },
              { meal: 'Dinner', kcal: '0 / 702', width: '0%' },
              { meal: 'Snacks', kcal: '0 kcal', width: '0%' },
            ].map((item, i) => (
              <div key={i} className="space-y-1 sm:space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="font-medium">{item.meal}</span>
                  <span className="text-theme-secondary">{item.kcal}</span>
                </div>
                <div className="w-full bg-theme/10 rounded-full h-1.5 sm:h-2">
                  <div
                    className="bg-primary rounded-full h-1.5 sm:h-2"
                    style={{ width: item.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Measurements Card */}
        <div className="bg-surface-theme rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 calorie-counter-card">
          <div className="font-bold flex items-center gap-2 mb-3 sm:mb-4" style={{ color: COLORS.primary[700], fontSize: FONTS.sizes.lg }}>
            <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /> Measurements
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div>
              <div className="text-xs sm:text-sm text-theme-secondary font-normal mb-1">
                Weight
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-theme">
                54.1{' '}
                <span className="text-sm sm:text-lg text-theme-secondary">kg</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-theme mb-2">
                Activities
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-theme-secondary">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.semantic.green500 }}></div>
                  <span>2,041 steps</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.semantic.blue500 }}></div>
                  <span>15 km</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.semantic.orange500 }}></div>
                  <span>73 kcal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalorieCounter;