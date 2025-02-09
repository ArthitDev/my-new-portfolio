'use client';

import { Box } from '@mui/material';
import { useLayoutEffect, useState } from 'react';

import { Hero } from '@/components/hero';
import { LoadingIntro } from '@/components/loading-intro';
import { Navbar } from '@/components/navbar';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {isLoading && <LoadingIntro onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <Hero />
      </Box>
    </>
  );
}
