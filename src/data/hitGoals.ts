export interface HitGoalStep {
  number: number;
  title: string;
  image?: string;
  images?: string[];
  alt: string;
  imageHeight: string;
  imageWidth: string;
  highlightedWords?: string;
  description?: string;
}

export const hitGoalsSteps: HitGoalStep[] = [
  {
    number: 1,
    title: 'Log Food',
    image: '/assets/images/1.png',
    alt: 'Log Food interface on mobile',
    imageHeight: 'h-[360px] md:h-[420px]',
    imageWidth: 'w-[280px] md:w-[340px]',
  },
  {
    number: 2,
    title: 'Monitor Your Progress',
    highlightedWords: 'Your Progress',
    description:
      'Visualize your journey, understand trends, and stay motivated with insightful data.',
    images: ['/assets/images/2.png', '/assets/images/3.png'],
    alt: 'Progress monitoring screens',
    imageHeight: 'h-[150px] md:h-[300px]', // slightly shorter
    imageWidth: 'max-w-[340px] md:max-w-[580px]', // wider center images
  },
  {
    number: 3,
    title: 'Nutrition Chart',
    image: '/assets/images/4.png',
    alt: 'Nutrition chart interface',
    imageHeight: 'h-[360px] md:h-[420px]',
    imageWidth: 'w-[280px] md:w-[340px]',
  },
];

