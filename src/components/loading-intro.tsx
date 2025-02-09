'use client';

import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import React, { useEffect, useState } from 'react';

const textReveal = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; visibility: hidden; }
`;

export function LoadingIntro({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // รอให้ animation เสร็จแล้วจึงเรียก onComplete
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500); // รอให้ fade out เสร็จก่อน
    }, 3000); // ระยะเวลารวมของ animation

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        backgroundImage: (theme) =>
          theme.palette.mode === 'light'
            ? `linear-gradient(#00000015 1px, transparent 1px),
             linear-gradient(90deg, #00000015 1px, transparent 1px)`
            : `linear-gradient(#ffffff09 1px, transparent 1px),
             linear-gradient(90deg, #ffffff09 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        animation: isAnimating ? 'none' : `${fadeOut} 0.5s forwards`,
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          display: 'inline-block',
        }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            position: 'relative',
            width: 0,
            whiteSpace: 'nowrap',
            animation: `${textReveal} 2s cubic-bezier(0.85, 0, 0.15, 1) forwards`,
            overflow: 'hidden',
          }}
        >
          ARTHIT DEV
        </Typography>
      </Box>
    </Box>
  );
}
