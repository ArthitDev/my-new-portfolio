import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Projects | Arthit LungYa',
  description: 'Projects and work by Arthit LungYa',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
