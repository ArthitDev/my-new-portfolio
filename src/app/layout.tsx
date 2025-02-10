import './globals.css';

import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import React from 'react';

import { ThemeProvider } from '@/components/providers/theme-provider';

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
});

export const metadata: Metadata = {
  title: 'Home | Arthit LungYa',
  description: 'Showcase of My Work and Projects',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={prompt.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
