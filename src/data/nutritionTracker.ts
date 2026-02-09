import React from 'react';
import { COLORS } from '../constants';
import { Activity, Dumbbell, Heart } from 'lucide-react';

export interface MacroTarget {
  current: number;
  target: number;
  unit: string;
  color: string;
}

export interface Meal {
  name: string;
  time: string;
  calories: number;
  items: string[];
  color: string;
}

export interface Exercise {
  name: string;
  duration: string;
  calories: number;
  type: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

export const macroTargets = {
  protein: { current: 120, target: 150, unit: 'g', color: COLORS.wellness.green },
  carbs: { current: 180, target: 250, unit: 'g', color: COLORS.wellness.orange },
  fats: { current: 45, target: 65, unit: 'g', color: COLORS.wellness.purple },
};

export const waterTarget = 8; // glasses
export const waterCurrent = 5;

export const caloriesTarget = 2000;
export const caloriesCurrent = 1450;

export const meals: Meal[] = [
  {
    name: 'Breakfast',
    time: '8:00 AM',
    calories: 420,
    items: ['Oatmeal with berries', 'Greek yogurt', 'Almonds'],
    color: COLORS.wellness.orange,
  },
  {
    name: 'Lunch',
    time: '1:30 PM',
    calories: 580,
    items: ['Grilled chicken salad', 'Quinoa', 'Avocado'],
    color: COLORS.wellness.green,
  },
  {
    name: 'Dinner',
    time: '7:00 PM',
    calories: 450,
    items: ['Salmon', 'Sweet potato', 'Broccoli'],
    color: COLORS.wellness.purple,
  },
];

export const exercises: Exercise[] = [
  { name: 'Morning Run', duration: '45 min', calories: 320, type: 'Cardio', icon: Activity },
  { name: 'Weight Training', duration: '60 min', calories: 280, type: 'Strength', icon: Dumbbell },
  { name: 'Yoga Session', duration: '30 min', calories: 120, type: 'Flexibility', icon: Heart },
];

