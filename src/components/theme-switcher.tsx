'use client';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';

import { useThemeContext } from '@/components/providers/theme-provider';

export function ThemeSwitcher() {
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      sx={{
        transition: 'transform 0.3s ease',
        '&:active': {
          transform: 'rotate(180deg)',
        },
        '& .MuiSvgIcon-root': {
          transition: 'transform 0.3s ease',
        },
        '&:hover .MuiSvgIcon-root': {
          transform: 'rotate(90deg)',
        },
      }}
    >
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
