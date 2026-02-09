import React from 'react';
import { motion } from 'framer-motion';
import { FONTS } from '@/constants';

interface StartFreeTrialButtonProps {
  onClick?: () => void;
  className?: string;
}

const StartFreeTrialButton: React.FC<StartFreeTrialButtonProps> = ({ onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full btn-theme shadow-xl hover:shadow-2xl transition-all duration-300 py-4 rounded-xl ${className}`}
      style={{ fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.semibold }}
    >
      Start Your Free 14-Day Trial
    </motion.button>
  );
};

export default StartFreeTrialButton;

