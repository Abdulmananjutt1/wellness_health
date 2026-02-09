import { useState, useEffect, useMemo } from 'react';
import { BarChart3, ChefHat, Dumbbell } from 'lucide-react';
import { macroTargets, waterTarget, waterCurrent, caloriesTarget, caloriesCurrent } from '../data/nutritionTracker';

interface AnimatedValues {
  protein: number;
  carbs: number;
  fats: number;
  water: number;
  calories: number;
}

export const useNutritionTracker = () => {
  const [activeTab, setActiveTab] = useState<'macros' | 'meals' | 'exercise'>('macros');
  const [animatedValues, setAnimatedValues] = useState<AnimatedValues>({
    protein: 0,
    carbs: 0,
    fats: 0,
    water: 0,
    calories: 0,
  });

  // Animate values on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedValues({
        protein: Math.round(macroTargets.protein.current * progress),
        carbs: Math.round(macroTargets.carbs.current * progress),
        fats: Math.round(macroTargets.fats.current * progress),
        water: Math.round(waterCurrent * progress),
        calories: Math.round(caloriesCurrent * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedValues({
          protein: macroTargets.protein.current,
          carbs: macroTargets.carbs.current,
          fats: macroTargets.fats.current,
          water: waterCurrent,
          calories: caloriesCurrent,
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Tabs configuration
  const tabs = useMemo(() => [
    { id: 'macros' as const, label: 'Macros', icon: BarChart3 },
    { id: 'meals' as const, label: 'Meals', icon: ChefHat },
    { id: 'exercise' as const, label: 'Exercise', icon: Dumbbell },
  ], []);

  // Computed values
  const remainingCalories = caloriesTarget - caloriesCurrent;
  const remainingWater = waterTarget - waterCurrent;
  const caloriesPercentage = (caloriesCurrent / caloriesTarget) * 100;

  return {
    activeTab,
    setActiveTab,
    animatedValues,
    tabs,
    remainingCalories,
    remainingWater,
    caloriesPercentage,
  };
};

