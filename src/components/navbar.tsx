'use client';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  Stack,
  Toolbar,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import { LanguageSwitcher } from '@/components/language-switcher';
import { useLanguage } from '@/components/providers/language-provider';
import { ThemeSwitcher } from '@/components/theme-switcher';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { messages } = useLanguage();
  const pathname = usePathname();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItemStyle = (isActive: boolean) => ({
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '1.1rem',
    width: '100%',
    textAlign: 'center',
    padding: '12px 0',
    position: 'relative',
    whiteSpace: 'nowrap',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: isActive ? '100%' : 0,
      height: '1px',
      backgroundColor: 'currentColor',
      transition: 'width 0.3s ease-in-out',
    },
    '&:hover::after': {
      width: '100%',
    },
  });

  const mobileMenuItemStyle = (isActive: boolean) => ({
    ...menuItemStyle(isActive),
    fontSize: '1.4rem',
    padding: '16px 0',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '35%',
      width: isActive ? '30%' : '0%',
      height: '2px',
      backgroundColor: 'currentColor',
      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'center',
      transition: 'width 0.3s ease-in-out, transform 0.3s ease-in-out',
    },
    '&:hover::after': {
      width: '30%',
      transform: 'scaleX(1)',
    },
  });

  const menuItems = (isMobile = false) => (
    <>
      <Link
        href="/"
        sx={
          isMobile
            ? mobileMenuItemStyle(pathname === '/')
            : menuItemStyle(pathname === '/')
        }
      >
        {messages.navbar.home}
      </Link>
      <Link
        href="/about"
        sx={
          isMobile
            ? mobileMenuItemStyle(pathname === '/about')
            : menuItemStyle(pathname === '/about')
        }
      >
        {messages.navbar.about}
      </Link>
      <Link
        href="/projects"
        sx={
          isMobile
            ? mobileMenuItemStyle(pathname === '/projects')
            : menuItemStyle(pathname === '/projects')
        }
      >
        {messages.navbar.projects}
      </Link>
      <Link
        href="/contact"
        sx={
          isMobile
            ? mobileMenuItemStyle(pathname === '/contact')
            : menuItemStyle(pathname === '/contact')
        }
      >
        {messages.navbar.contact}
      </Link>
    </>
  );

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        background: 'none',
        maxWidth: '1200px',
        margin: '0 auto',
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        pt: 2,
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          px: { xs: 2, sm: 4 },
          minHeight: { xs: '64px', sm: '80px' },
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            fontSize: '1.8rem',
            fontWeight: 'bold',
          }}
        >
          AT.
        </Link>

        {/* Desktop Menu */}
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {menuItems(false)}
          <ThemeSwitcher />
          <LanguageSwitcher />
        </Stack>

        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            display: { md: 'none' },
            ml: 'auto',
          }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%',
            backgroundColor: 'background.default',
            backgroundImage: (theme) =>
              theme.palette.mode === 'light'
                ? `linear-gradient(#00000015 1px, transparent 1px),
                   linear-gradient(90deg, #00000015 1px, transparent 1px)`
                : `linear-gradient(#ffffff09 1px, transparent 1px),
                   linear-gradient(90deg, #ffffff09 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            height: '100vh',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            pt: 2,
          }}
        >
          {/* Header with ThemeSwitcher and Close button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 2,
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <ThemeSwitcher />
              <LanguageSwitcher />
            </Box>
            <IconButton onClick={handleDrawerToggle} color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Menu Items */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flex: 1,
              pt: 8,
            }}
          >
            <Stack spacing={3} width="100%" alignItems="center">
              {menuItems(true)}
            </Stack>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
