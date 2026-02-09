import { NAVIGATION, COLORS } from '@/constants';

export type NavigationItem = typeof NAVIGATION[number];
export type ColorPalette = keyof typeof COLORS;

export interface HeaderProps {
  isScrolled?: boolean;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface FeatureHighlight {
  icon: string;
  text: string;
}

export interface StatsData {
  number: string;
  label: string;
}