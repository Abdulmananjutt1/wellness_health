'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { COLORS, FONTS } from '../../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Download', href: '#download' },
      { name: 'Integrations', href: '#integrations' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Press', href: '#press' },
    ],
    resources: [
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' },
      { name: 'Guidelines', href: '#guidelines' },
      { name: 'Privacy Policy', href: '#privacy' },
    ],
    legal: [
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Licenses', href: '#licenses' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer
      className="w-full min-w-[428px] border-t"
      style={{
        backgroundColor: 'var(--color-footer-bg)',
        borderColor: 'var(--color-footer-border)',
      }}
    >
      {/* Mobile-specific container for screens up to 428px */}
      <div className="w-full px-4 py-8 min-[429px]:px-6 md:px-16 md:py-12 lg:py-16">
        
        {/* Main Footer Content */}
        <div className="w-full max-w-none min-[429px]:max-w-7xl min-[429px]:mx-auto">
          
          <div className="grid grid-cols-1 min-[429px]:grid-cols-2 lg:grid-cols-5 gap-6 min-[429px]:gap-8 md:gap-12 mb-8 md:mb-12">
            
            {/* Brand Column - Full width on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="min-[429px]:col-span-2 lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                {/* Logo image shown standalone (not inside colored card) and slightly larger */}
                <img
                  src="/assets/images/5.png"
                  alt="WellnessPro logo"
                  className="w-20 h-20 md:w-24 md:h-24 object-contain bg-transparent -ml-4 md:-ml-6"
                  style={{ backgroundColor: 'transparent' }}
                />
                <div className="flex flex-col -ml-3 md:-ml-4">
                  <span className="tracking-tight" style={{ color: COLORS.neutral.white, fontSize: FONTS.sizes.xl, fontWeight: FONTS.weights.bold }}>WellnessPro</span>
                  <span style={{ color: COLORS.primary[100], fontSize: FONTS.sizes.xs }}>Wellness</span>
                </div>
              </div>
              
              <p
                className="mb-6 w-full max-w-full md:text-base"
                style={{ color: COLORS.primary[100], fontSize: FONTS.sizes.sm }}
              >
                Transform your health journey with personalized wellness plans, expert guidance, and a supportive community.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 min-[429px]:space-y-3 mb-6 w-full">
                <div className="flex items-start min-[429px]:items-center gap-2 w-full" style={{ color: COLORS.primary[100], fontSize: FONTS.sizes.sm }}>
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="break-all w-full">support@wellnesspro.com</span>
                </div>
                <div className="flex items-center gap-2 w-full" style={{ color: COLORS.primary[100], fontSize: FONTS.sizes.sm }}>
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="w-full">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start min-[429px]:items-center gap-2 w-full" style={{ color: COLORS.primary[100], fontSize: FONTS.sizes.sm }}>
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="break-all w-full">123 Wellness Street, Health City, HC 12345</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 min-[429px]:gap-4 w-full">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 min-[429px]:w-10 min-[429px]:h-10 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
                      style={{
                        backgroundColor: COLORS.primary[800],
                        border: `1px solid ${COLORS.primary[700]}`,
                        color: COLORS.neutral.white,
                      }}
                      onMouseOver={e => {
                        (e.currentTarget as HTMLElement).style.color = COLORS.wellness.orange;
                        (e.currentTarget as HTMLElement).style.borderColor = COLORS.wellness.orange;
                      }}
                      onMouseOut={e => {
                        (e.currentTarget as HTMLElement).style.color = COLORS.neutral.white;
                        (e.currentTarget as HTMLElement).style.borderColor = COLORS.primary[700];
                      }}
                    >
                      <IconComponent className="w-4 h-4 min-[429px]:w-5 min-[429px]:h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Product Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 min-[429px]:mt-0"
            >
              <h3 className="uppercase tracking-wide mb-3 min-[429px]:mb-4" style={{ color: COLORS.neutral.white, fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.bold }}>Product</h3>
              <ul className="space-y-2 min-[429px]:space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="transition-colors block py-1"
                      style={{ color: COLORS.primary[100], fontSize: FONTS.sizes.sm }}
                      onMouseOver={e => (e.currentTarget.style.color = COLORS.wellness.orange)}
                      onMouseOut={e => (e.currentTarget.style.color = COLORS.primary[100])}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 min-[429px]:mt-0"
            >
              <h3 className="uppercase tracking-wide mb-3 min-[429px]:mb-4" style={{ color: COLORS.neutral.white, fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.bold }}>Company</h3>
              <ul className="space-y-2 min-[429px]:space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="transition-colors block py-1"
                      style={{ color: COLORS.primary[100], fontSize: FONTS.sizes.sm }}
                      onMouseOver={e => (e.currentTarget.style.color = COLORS.wellness.orange)}
                      onMouseOut={e => (e.currentTarget.style.color = COLORS.primary[100])}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 min-[429px]:mt-0"
            >
              <h3 className="uppercase tracking-wide mb-3 min-[429px]:mb-4" style={{ color: COLORS.neutral.white, fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.bold }}>Resources</h3>
              <ul className="space-y-2 min-[429px]:space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="transition-colors block py-1"
                      style={{ color: COLORS.primary[100], fontSize: FONTS.sizes.sm }}
                      onMouseOver={e => (e.currentTarget.style.color = COLORS.wellness.orange)}
                      onMouseOut={e => (e.currentTarget.style.color = COLORS.primary[100])}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-6 md:pt-8 border-t w-full"
          style={{ borderColor: 'var(--color-footer-border)' }}
        >
          <div className="w-full max-w-none min-[429px]:max-w-7xl min-[429px]:mx-auto px-4 min-[429px]:px-6 md:px-0">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 min-[429px]:gap-4 w-full">
              <p
                className="text-center md:text-left order-2 md:order-1 w-full md:w-auto min-[429px]:text-sm"
                style={{ color: COLORS.primary[100], fontSize: FONTS.sizes.xs }}
              >
                © {currentYear} WellnessPro. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 min-[429px]:gap-6 order-1 md:order-2 mb-3 md:mb-0 w-full md:w-auto min-[429px]:text-sm">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="transition-colors whitespace-nowrap"
                    style={{ color: COLORS.primary[100], fontSize: FONTS.sizes.xs }}
                    onMouseOver={e => (e.currentTarget.style.color = COLORS.wellness.orange)}
                    onMouseOut={e => (e.currentTarget.style.color = COLORS.primary[100])}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;