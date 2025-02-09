'use client';

import EastIcon from '@mui/icons-material/East';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { useLanguage } from './providers/language-provider';

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export function Hero() {
  const { messages } = useLanguage();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: { xs: 4, sm: 6, md: 10 },
        maxWidth: '1200px',
        mx: 'auto',
        position: 'relative',
        pt: { xs: '60px', sm: '20px' },
      }}
    >
      <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '2.7rem' },
            mb: 2,
            letterSpacing: '0.02em',
            fontWeight: 700,
          }}
        >
          {messages.hero.title}
        </Typography>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            maxWidth: '900px',
            mb: 3,
            lineHeight: 1.8,
            color: 'text.secondary',
          }}
        >
          {messages.hero.description1}{' '}
          <Link
            href="/projects"
            style={{
              color: 'inherit',
              fontWeight: 700,
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
            }}
          >
            {messages.hero.projects}
          </Link>{' '}
          {messages.hero.description2}
        </Typography>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            maxWidth: '900px',
            mb: 2,
            lineHeight: 1.8,
            color: 'text.secondary',
          }}
        >
          {messages.hero.description3}{' '}
          <Box component="span">{messages.highlight.articles}</Box>{' '}
          {messages.hero.description4}
          <Link
            href="/contact"
            style={{
              color: 'inherit',
              fontWeight: 700,
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
            }}
          >
            {messages.highlight.contact}
          </Link>
        </Typography>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
        <div>
          <Link
            href="/about"
            style={{
              textDecoration: 'none',
              textUnderlineOffset: '4px',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '1.1rem',
              fontWeight: 500,
              width: 'fit-content',
            }}
          >
            {messages.highlight.seemore}
            <Box
              component="span"
              sx={{
                fontSize: '2.5rem',
                animation: 'arrowMove 1.5s infinite',
                '@keyframes arrowMove': {
                  '0%': { transform: 'translateX(0)' },
                  '50%': { transform: 'translateX(10px)' },
                  '100%': { transform: 'translateX(0)' },
                },
              }}
            >
              <EastIcon />
            </Box>
          </Link>
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            mt: 3,
          }}
        >
          {[
            {
              Icon: XIcon,
              url: 'https://twitter.com/ArthitDev',
              hoverColor: '#1DA1F2',
            },
            {
              Icon: FacebookIcon,
              url: 'https://www.facebook.com/profile.php?id=100009756317050',
              hoverColor: '#4267B2',
            },
            {
              Icon: LinkedInIcon,
              url: 'https://www.linkedin.com/in/arthitdev/',
              hoverColor: '#0077B5',
            },
            {
              Icon: GitHubIcon,
              url: 'https://github.com/ArthitDev',
              hoverColor: '#333',
            },
            {
              Icon: InstagramIcon,
              url: 'https://instagram.com/yourusername',
              hoverColor: '#E4405F',
            },
          ].map(({ Icon, url, hoverColor }, index) => (
            <IconButton
              key={index}
              color="inherit"
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                '&:hover': {
                  transform: 'translateY(-2px)',
                  transition: 'transform 0.2s ease-in-out',
                  color: hoverColor,
                },
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
}
