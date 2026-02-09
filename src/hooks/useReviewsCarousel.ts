import { useState, useEffect } from 'react';

interface UseReviewsCarouselProps {
  totalItems: number;
}

export const useReviewsCarousel = ({ totalItems }: UseReviewsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Calculate visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window !== 'undefined') {
        setVisibleCount(window.innerWidth >= 768 ? 3 : 1);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, totalItems - visibleCount);

  // Reset currentIndex if it exceeds maxIndex (e.g., on window resize)
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const nextReview = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevReview = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return {
    currentIndex,
    visibleCount,
    maxIndex,
    nextReview,
    prevReview,
  };
};

