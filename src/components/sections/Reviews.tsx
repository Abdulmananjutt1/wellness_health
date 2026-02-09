'use client';

import React from 'react';
import { reviews } from '@/data/reviews';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Star } from 'lucide-react';
import { COLORS, FONTS } from '@/constants';
import { useReviewsCarousel } from '../../hooks/useReviewsCarousel';

const Reviews: React.FC = () => {
  const { currentIndex, visibleCount, maxIndex, nextReview, prevReview } = useReviewsCarousel({ totalItems: reviews.length });

  return (
    <section id="testimonials" className="w-full py-20 md:py-28 px-4 md:px-16 bg-theme" style={{ overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-theme"
        >
          Over <span style={{ color: 'var(--color-primary)' }}>2 million</span> 5-star reviews.
        </motion.h2>

        {/* Reviews Carousel */}
        <div className="relative">
          <div 
            className="overflow-x-auto overflow-y-hidden" 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}} />
            <motion.div
              animate={{
                x: currentIndex === 0 ? 0 : -(currentIndex * (384 + 32)),
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="flex gap-6 md:gap-8"
              style={{ width: 'max-content', minWidth: '100%' }}
            >
              {reviews.map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex-shrink-0 w-80 md:w-96"
                >
                  {/* Card with solid color */}
                  <div className="relative h-full min-h-[320px] rounded-3xl p-8 md:p-10 overflow-hidden group flex flex-col" style={{ backgroundColor: COLORS.primary[600] }}>
                    {/* Decorative Quote Icon */}
                    <div className="absolute top-6 left-6 opacity-25">
                      <Quote className="w-16 h-16 md:w-20 md:h-20" style={{ color: COLORS.neutral.white }} strokeWidth={1} />
                    </div>

                    {/* Review Content */}
                    <div className="relative z-10 flex flex-col h-full pt-8">
                      {/* Review Text */}
                      <p className="leading-relaxed mb-8 flex-grow whitespace-pre-line md:text-lg" style={{ color: COLORS.neutral.white, fontSize: FONTS.sizes.base, fontWeight: FONTS.weights.normal }}>
                        {review.text}
                      </p>

                      {/* Author Info */}
                      <div className="mt-auto">
                        <div className="mb-4 md:text-xl" style={{ color: COLORS.neutral.white, fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.bold }}>
                          {review.author} from {review.location}
                        </div>

                        {/* Star Rating */}
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 md:w-6 md:h-6" style={{ fill: COLORS.semantic.yellow400, color: COLORS.semantic.yellow400 }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-end items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevReview}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full bg-surface-theme border border-theme flex items-center justify-center text-theme hover:bg-highlight-theme hover:border-primary transition-colors shadow-lg ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextReview}
              disabled={currentIndex >= maxIndex}
              className={`w-12 h-12 rounded-full bg-surface-theme border border-theme flex items-center justify-center text-theme hover:bg-highlight-theme hover:border-primary transition-colors shadow-lg ${
                currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

