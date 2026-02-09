import type { Metadata } from 'next';
import { APP } from '@/constants';
import './globals.css';
import ThemeFloating from '@/components/common/ThemeFloating';

export const metadata: Metadata = {
  title: APP.name,
  description: APP.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-theme text-theme">
        {children}
        <ThemeFloating />
      </body>
    </html>
  );
}