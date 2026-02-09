'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone,
  QrCode,
  Apple,
  Play,
  ArrowRight
} from 'lucide-react';
import { COLORS, FONTS } from '@/constants';

const DownloadApp: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'ios' | 'android'>('ios');
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="download-app" className="w-full py-16 md:py-20 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-theme mb-4" style={{ fontSize: FONTS.sizes['3xl'], fontWeight: FONTS.weights.bold }}>
            Download Wellness App
          </h2>
          <p className="text-theme-secondary max-w-3xl mx-auto mb-8" style={{ fontSize: FONTS.sizes.base }}>
            Join millions of users who are transforming their lives. Available on iOS and Android.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Left: Phone Mockup & QR Code */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto max-w-sm">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-[3rem] blur-2xl opacity-50"
                style={{ backgroundColor: COLORS.primary[600] }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Phone Frame */}
              <div className="relative rounded-[3rem] p-4 shadow-2xl"
                style={{ backgroundColor: COLORS.neutral[900] }}
              >
                <div className="rounded-[2.5rem] overflow-hidden"
                  style={{ backgroundColor: COLORS.neutral[800] }}
                >
                  {/* Phone Screen */}
                  <div 
                    className="aspect-[9/19.5] relative p-6 flex flex-col items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.primary[600]}, ${COLORS.primary[800]})`
                    }}
                  >
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6" style={{ color: COLORS.neutral.white, fontSize: FONTS.sizes.xs }}>
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border rounded-sm" style={{ borderColor: COLORS.neutral.white }} />
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.neutral.white }} />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="text-center" style={{ color: COLORS.neutral.white }}>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        className="mb-4"
                      >
                        <Smartphone className="w-14 h-14 mx-auto" />
                      </motion.div>
                      <h3 className="mb-2" style={{ fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.bold }}>Wellness</h3>
                      <p className="opacity-80" style={{ fontSize: FONTS.sizes.xs }}>Your Health Companion</p>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-around">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.neutral.white30 }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block"
            >
              <div className="rounded-2xl p-4 shadow-2xl border-2"
                style={{ borderColor: COLORS.primary[600], backgroundColor: COLORS.neutral.white }}
              >
                <QrCode className="w-32 h-32" style={{ color: COLORS.neutral[900] }} />
                <p className="text-theme text-center mt-2" style={{ fontSize: FONTS.sizes.xs, fontWeight: FONTS.weights.bold }}>Scan to Download</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Download Buttons & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Platform Selector */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setActivePlatform('ios')}
                className={`flex-1 py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 border-2 ${
                  activePlatform === 'ios'
                    ? 'shadow-lg scale-105'
                    : 'opacity-60 hover:opacity-80'
                }`}
                style={{
                  backgroundColor: activePlatform === 'ios' ? COLORS.neutral[900] : 'transparent',
                  borderColor: activePlatform === 'ios' ? COLORS.neutral[900] : COLORS.neutral[300],
                  color: activePlatform === 'ios' ? COLORS.neutral.white : COLORS.neutral[300],
                  fontWeight: FONTS.weights.bold,
                }}
              >
                <Apple className="w-6 h-6" />
                <span>iOS</span>
              </button>
              <button
                onClick={() => setActivePlatform('android')}
                className={`flex-1 py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 border-2 ${
                  activePlatform === 'android'
                    ? 'shadow-lg scale-105'
                    : 'opacity-60 hover:opacity-80'
                }`}
                style={{
                  backgroundColor: activePlatform === 'android' ? COLORS.wellness.green : 'transparent',
                  borderColor: activePlatform === 'android' ? COLORS.wellness.green : COLORS.neutral[300],
                  color: activePlatform === 'android' ? COLORS.neutral.white : COLORS.neutral[300],
                  fontWeight: FONTS.weights.bold,
                }}
              >
                <Play className="w-6 h-6" />
                <span>Android</span>
              </button>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              {/* App Store Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block"
              >
                <div className={`rounded-xl p-3 shadow-lg transition-all duration-300 ${
                  activePlatform === 'ios' ? 'opacity-100' : 'opacity-50'
                }`}
                style={{ 
                  backgroundColor: COLORS.neutral[900],
                }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ 
                        backgroundColor: COLORS.neutral[800],
                      }}
                    >
                      <Apple className="w-5 h-5" style={{ color: COLORS.neutral.white }} />
                    </div>
                    <div className="flex-1">
                      <p className="mb-0.5" style={{ color: COLORS.neutral.white60, fontSize: FONTS.sizes.xs }}>Download on the</p>
                      <p style={{ color: COLORS.neutral.white, fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.bold }}>App Store</p>
                    </div>
                    <ArrowRight className="w-4 h-4" style={{ color: COLORS.neutral.white }} />
                  </div>
                </div>
              </motion.a>

              {/* Play Store Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block"
              >
                <div className={`rounded-xl p-3 shadow-lg transition-all duration-300 ${
                  activePlatform === 'android' ? 'opacity-100' : 'opacity-50'
                }`}
                style={{ 
                  backgroundColor: COLORS.wellness.green,
                }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ 
                        backgroundColor: COLORS.neutral.white20,
                      }}
                    >
                      <Play className="w-5 h-5" style={{ color: COLORS.neutral.white }} />
                    </div>
                    <div className="flex-1">
                      <p className="mb-0.5" style={{ color: COLORS.neutral.white80, fontSize: FONTS.sizes.xs }}>Get it on</p>
                      <p style={{ color: COLORS.neutral.white, fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.bold }}>Google Play</p>
                    </div>
                    <ArrowRight className="w-4 h-4" style={{ color: COLORS.neutral.white }} />
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Live Download Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-xl p-3 text-center"
            >
              <p className="text-theme-secondary mb-1" style={{ fontSize: FONTS.sizes.xs }}>Downloads Today</p>
              <p style={{ color: COLORS.primary[600], fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.bold }}>
                {(1250000 + downloadCount).toLocaleString()}+
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;

