import { Scan, Mic, Image as ImageIcon } from 'lucide-react';
import { COLORS } from '../constants';

export const foodScannerFeatures = [
  {
    icon: Scan,
    title: 'Barcode Scanner',
    description: 'Simply scan any product barcode to instantly get complete nutritional information including calories, protein, carbs, and fats.',
    benefits: [
      'Instant nutrition data',
      'Works with 100K+ products',
      'Accurate database',
    ],
    iconColor: 'var(--color-primary)',
    iconBg: `${COLORS.theme.light.primary}1A`, // 10% opacity
  },
  {
    icon: Mic,
    title: 'Voice Input',
    description: 'Just speak the food name and our AI will automatically log it with all nutritional details. Perfect for hands-free tracking.',
    benefits: [
      'Hands-free logging',
      'AI-powered recognition',
      'Quick and convenient',
    ],
    iconColor: 'var(--color-accent)',
    iconBg: `${COLORS.wellness.orange}1A`, // 10% opacity
  },
  {
    icon: ImageIcon,
    title: 'Image Recognition',
    description: 'Take a photo of your meal and our advanced AI will analyze it to identify food items and calculate complete nutrition breakdown.',
    benefits: [
      'Smart food detection',
      'Multi-item recognition',
      'Automatic calorie counting',
    ],
    iconColor: 'var(--color-success)',
    iconBg: `${COLORS.semantic.success}1A`, // 10% opacity
  },
];
