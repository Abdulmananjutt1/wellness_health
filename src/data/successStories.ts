import { COLORS } from '@/constants';

// Icon names as strings for mapping
export type IconName = 
  | 'UserCircle'
  | 'Users'
  | 'TrendingDown'
  | 'Award'
  | 'Star';

export interface StoryStat {
  label: string;
  value: string;
}

export interface BeforeAfter {
  weight: number;
  date: string;
}

export interface Story {
  name: string;
  role: string;
  icon: IconName;
  before: BeforeAfter;
  after: BeforeAfter;
  achievement: string;
  duration: string;
  quote: string;
  stats: StoryStat[];
  color: string;
}

export interface OverallStat {
  number: string;
  label: string;
  icon: IconName;
  color: string;
}

export const stories: Story[] = [
  {
    name: 'Sarah Johnson',
    role: 'Lost 30 lbs in 3 months',
    icon: 'UserCircle',
    before: { weight: 180, date: 'Jan 2024' },
    after: { weight: 150, date: 'Apr 2024' },
    achievement: '30 lbs lost',
    duration: '3 months',
    quote: 'Wellness app changed my life completely. The meal tracking and workout plans made it so easy!',
    stats: [
      { label: 'Calories Burned', value: '45K' },
      { label: 'Workouts', value: '89' },
      { label: 'Meals Tracked', value: '270' },
    ],
    color: COLORS.wellness.green,
  },
  {
    name: 'Michael Chen',
    role: 'Gained 15 lbs muscle',
    icon: 'UserCircle',
    before: { weight: 160, date: 'Feb 2024' },
    after: { weight: 175, date: 'May 2024' },
    achievement: '15 lbs gained',
    duration: '3 months',
    quote: 'Best fitness app I\'ve ever used. The macro tracking helped me build muscle effectively.',
    stats: [
      { label: 'Protein Intake', value: '180g/day' },
      { label: 'Workouts', value: '120' },
      { label: 'Strength Gain', value: '+40%' },
    ],
    color: COLORS.primary[600],
  },
  {
    name: 'Emma Williams',
    role: 'Maintained healthy lifestyle',
    icon: 'UserCircle',
    before: { weight: 140, date: 'Mar 2024' },
    after: { weight: 140, date: 'Jun 2024' },
    achievement: 'Maintained',
    duration: '3 months',
    quote: 'I love how the app helps me maintain my weight while still enjoying my favorite foods.',
    stats: [
      { label: 'Days Active', value: '90' },
      { label: 'Steps', value: '2.5M' },
      { label: 'Water Intake', value: '720L' },
    ],
    color: COLORS.wellness.purple,
  },
];

export const overallStats: OverallStat[] = [
  { number: '50K+', label: 'Success Stories', icon: 'Users', color: COLORS.primary[600] },
  { number: '2M+', label: 'Lbs Lost', icon: 'TrendingDown', color: COLORS.wellness.green },
  { number: '98%', label: 'Success Rate', icon: 'Award', color: COLORS.wellness.orange },
  { number: '4.9/5', label: 'User Rating', icon: 'Star', color: COLORS.wellness.purple },
];

