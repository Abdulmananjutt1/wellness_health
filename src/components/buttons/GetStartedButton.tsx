import React from 'react';
import { COLORS, FONTS } from '@/constants';
import useHeaderState from '@/hooks/useHeaderState';

interface GetStartedButtonProps {
  onClick?: () => void;
  className?: string;
  variant?: 'desktop' | 'mobile';
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ onClick, className = '', variant = 'desktop' }) => {
  const { isDark } = useHeaderState();
  
  const baseStyles = {
    backgroundColor: isDark ? COLORS.theme.dark.primary : COLORS.theme.light.primary,
    color: isDark ? COLORS.theme.dark.textMain : COLORS.neutral.white,
    fontWeight: FONTS.weights.medium,
  };

  const hoverStyles = {
    backgroundColor: COLORS.semantic.info, // #3b82f6 - same as --color-primary-accent
  };

  if (variant === 'mobile') {
    return (
      <button
        onClick={onClick}
        className={`py-2 px-3 rounded-full transition-all duration-200 w-full ${className}`}
        style={baseStyles}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = baseStyles.backgroundColor;
        }}
      >
        Get Started
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 ${className}`}
      style={baseStyles}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = baseStyles.backgroundColor;
      }}
    >
      Get Started
    </button>
  );
};

export default GetStartedButton;

