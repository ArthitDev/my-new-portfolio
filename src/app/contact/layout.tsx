import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact | Arthit LungYa',
  description: 'Contact information for Arthit LungYa',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
