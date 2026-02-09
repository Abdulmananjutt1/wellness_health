// Colors Constants
export const COLORS = {
    // Primary Colors
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      navText: '#64748b', // Tailwind text-theme-secondary
      navTextHover: '#0ea5e9', // Tailwind text-primary
    },
    
    // Wellness Theme Colors
    wellness: {
      green: '#10b981',
      greenLight: '#34d399', // green-400 for dark theme
      teal: '#14b8a6',
      purple: '#8b5cf6',
      orange: '#f59e0b',
      pink: '#ec4899',
      footerBg: '#232329', // for dark mode footer background
      footerBorder: '#383844', // for dark mode footer border
      footerText: '#a1a1aa', // for dark mode text
    },
    
    // Neutral Colors
    neutral: {
      white: '#ffffff',
      white60: 'rgba(255,255,255,0.6)', // 60% opacity
      white80: 'rgba(255,255,255,0.8)', // 80% opacity
      white30: 'rgba(255,255,255,0.3)', // 30% opacity
      white20: 'rgba(255,255,255,0.2)', // 20% opacity
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      black: '#000000',
    },
    
    // Semantic Colors
    semantic: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
      // Common Tailwind color mappings
      green500: '#10b981', // same as success/wellness.green
      blue500: '#3b82f6',  // same as info
      orange500: '#f59e0b', // same as warning/wellness.orange
      yellow400: '#facc15', // yellow-400 for star ratings
    },
    
    // Theme-aware Colors (Light/Dark)
    theme: {
      light: {
        bg: '#f8fafc', // neutral[50]
        surface: '#ffffff', // neutral.white
        card: '#f4f7fa',
        border: '#e5e7eb',
        textMain: '#18181b',
        textSecondary: '#52525b',
        primary: '#2563eb',
        primaryAccent: '#3b82f6',
        secondary: '#4b5563',
        accent: '#f59e0b',
        danger: '#ef4444',
        success: '#10b981',
        highlight: '#e0e7ff',
        icon: '#2563eb', // icon color for light theme
      },
      dark: {
        bg: '#0f172a', // dark blue (slate-900)
        surface: '#1e293b', // dark blue-gray (slate-800)
        card: '#1e293b', // dark blue-gray
        border: '#334155', // slate-700
        textMain: '#f1f5f9', // light blue-gray
        textSecondary: '#94a3b8', // slate-400
        primary: '#60a5fa', // light blue for dark theme
        primaryAccent: '#3b82f6', // blue-500
        secondary: '#cbd5e1', // slate-300
        accent: '#fbbf24', // amber-400
        danger: '#fb7185', // rose-400
        success: '#34d399', // emerald-400
        highlight: '#1e3a8a', // dark blue highlight
        icon: '#60a5fa', // light blue icon color for dark theme
      }
    }
  } as const;
  
  // App Constants
  export const APP = {
    name: 'WellnessPro',
    description: 'Your journey to better health starts here',
    version: '1.0.0',
  } as const;
  
  // Navigation Constants (anchor links to page sections)
  export const NAVIGATION = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'About', href: '#about', id: 'about' },
  ] as const;
  
  // Breakpoints
  export const BREAKPOINTS = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  } as const;
  // Hero Section Constants
export const HERO = {
  title: "Transform Your",
  highlightedTitle: "Wellness Journey",
  subtitle: "Discover personalized wellness solutions that fit your lifestyle. Track your progress, connect with experts, and achieve your health goals with our AI-powered platform.",
  cta: {
    primary: "Start Free Trial",
    secondary: "Watch Demo",
  },
  features: [
    { icon: "✅", text: "Personalized Plans" },
    { icon: "📊", text: "Progress Tracking" },
    { icon: "👨‍⚕️", text: "Expert Coaches" },
    { icon: "🤝", text: "Community Support" },
  ],
  stats: [
    { number: "50K+", label: "Active Users" },
    { number: "98%", label: "Success Rate" },
    { number: "4.9", label: "App Rating" },
  ],
  buttons: {
    startJourney: "START YOUR JOURNEY",
    watchDemo: "WATCH DEMO",
  },
} as const;

// Fonts
export const FONTS = {
  sans: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  serif: "Georgia, Cambria, 'Times New Roman', Times, serif",
  // Font Sizes
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  // Font Weights
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
} as const;