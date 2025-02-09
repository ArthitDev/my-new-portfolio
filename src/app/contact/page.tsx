'use client';

import { Box } from '@mui/material';

import { Navbar } from '@/components/navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 4, sm: 6, md: 10 },
          pt: { xs: '100px', sm: '120px' },
        }}
      >
        {/* Add your Contact page content here */}
      </Box>
    </>
  );
}
