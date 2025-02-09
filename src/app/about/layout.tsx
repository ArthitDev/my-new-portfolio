import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About | Arthit LungYa',
  description: 'About Arthit LungYa - Personal portfolio and information',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
