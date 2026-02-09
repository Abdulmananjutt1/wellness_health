import React from 'react';
import { FONTS, HERO } from '@/constants';

interface StartJourneyButtonProps {
  onClick?: () => void;
  className?: string;
}

const StartJourneyButton: React.FC<StartJourneyButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-10 py-5 rounded-2xl btn-theme shadow-lg hover:shadow-xl transition-base transform hover:-translate-y-1 ${className}`}
      style={{ fontSize: FONTS.sizes.base, fontWeight: FONTS.weights.bold }}
    >
      {HERO.buttons.startJourney}
    </button>
  );
};

export default StartJourneyButton;

