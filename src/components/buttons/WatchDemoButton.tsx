import React from 'react';
import { Play } from 'lucide-react';
import { COLORS, FONTS, HERO } from '@/constants';

interface WatchDemoButtonProps {
  onClick?: () => void;
  className?: string;
}

const WatchDemoButton: React.FC<WatchDemoButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-10 py-5 rounded-2xl border-2 shadow-md hover:shadow-xl transition-base transform hover:-translate-y-1 flex items-center gap-3 ${className}`}
      style={{
        fontSize: FONTS.sizes.base,
        fontWeight: FONTS.weights.bold,
        backgroundColor: COLORS.neutral.white,
        color: COLORS.neutral.black,
        borderColor: COLORS.neutral[200],
      }}
    >
      <Play className="w-5 h-5" style={{ color: COLORS.neutral.black }} />
      {HERO.buttons.watchDemo}
    </button>
  );
};

export default WatchDemoButton;

