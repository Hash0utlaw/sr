import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { StrictMode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Summit Roofing - Professional Roofing Services',
  description: 'Expert roofing solutions in Alabama & Georgia with unmatched quality and customer satisfaction',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StrictMode>
          {children}
          <Analytics />
        </StrictMode>
      </body>
    </html>
  );
}

