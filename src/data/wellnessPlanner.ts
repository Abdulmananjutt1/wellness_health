import { COLORS } from '@/constants';

// Icon names as strings for mapping
export type IconName = 
  | 'Sun' 
  | 'Moon' 
  | 'Coffee' 
  | 'Dumbbell' 
  | 'Apple' 
  | 'Heart' 
  | 'Droplet' 
  | 'BookOpen';

export interface WeekDay {
  date: number;
  day: string;
  completed: boolean;
  habits: number;
  total: number;
}

export interface Week {
  days: WeekDay[];
}

export interface DailyRoutine {
  time: string;
  icon: IconName;
  title: string;
  duration: string;
  color: string;
  completed: boolean;
}

export interface HabitStreak {
  name: string;
  streak: number;
  icon: IconName;
  color: string;
}

export const weeks: Week[] = [
  {
    days: [
      { date: 1, day: 'Mon', completed: true, habits: 5, total: 7 },
      { date: 2, day: 'Tue', completed: true, habits: 7, total: 7 },
      { date: 3, day: 'Wed', completed: true, habits: 6, total: 7 },
      { date: 4, day: 'Thu', completed: false, habits: 4, total: 7 },
      { date: 5, day: 'Fri', completed: false, habits: 0, total: 7 },
      { date: 6, day: 'Sat', completed: false, habits: 0, total: 7 },
      { date: 7, day: 'Sun', completed: false, habits: 0, total: 7 },
    ]
  }
];

export const dailyRoutines: DailyRoutine[] = [
  {
    time: '6:00 AM',
    icon: 'Sun',
    title: 'Morning Meditation',
    duration: '15 min',
    color: COLORS.wellness.orange,
    completed: true,
  },
  {
    time: '7:00 AM',
    icon: 'Coffee',
    title: 'Healthy Breakfast',
    duration: '30 min',
    color: COLORS.wellness.green,
    completed: true,
  },
  {
    time: '8:00 AM',
    icon: 'Dumbbell',
    title: 'Morning Workout',
    duration: '45 min',
    color: COLORS.primary[600],
    completed: true,
  },
  {
    time: '12:00 PM',
    icon: 'Apple',
    title: 'Nutritious Lunch',
    duration: '45 min',
    color: COLORS.wellness.purple,
    completed: false,
  },
  {
    time: '3:00 PM',
    icon: 'Droplet',
    title: 'Hydration Break',
    duration: '5 min',
    color: COLORS.wellness.teal,
    completed: false,
  },
  {
    time: '6:00 PM',
    icon: 'Heart',
    title: 'Evening Walk',
    duration: '30 min',
    color: COLORS.wellness.pink,
    completed: false,
  },
  {
    time: '8:00 PM',
    icon: 'BookOpen',
    title: 'Reading Time',
    duration: '30 min',
    color: COLORS.wellness.orange,
    completed: false,
  },
  {
    time: '10:00 PM',
    icon: 'Moon',
    title: 'Wind Down',
    duration: '20 min',
    color: COLORS.primary[600],
    completed: false,
  },
];

export const habitStreaks: HabitStreak[] = [
  { name: 'Workout', streak: 8, icon: 'Dumbbell', color: COLORS.primary[600] },
  { name: 'Water', streak: 15, icon: 'Droplet', color: COLORS.wellness.teal },
];

