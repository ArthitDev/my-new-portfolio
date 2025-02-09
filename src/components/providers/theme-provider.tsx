'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';

import { darkTheme, theme } from '@/themes/theme';

import { LanguageProvider } from './language-provider';

type ThemeContextType = {
  toggleTheme: () => void;
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  isDarkMode: false,
});

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      // ถ้ามีการบันทึกธีมไว้ ใช้ค่าที่บันทึก
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // ถ้าไม่มีการบันทึก ให้เช็คเวลา
      const hours = new Date().getHours();
      const isDark = hours < 6 || hours >= 18; // Dark mode ระหว่าง 18:00 - 06:00
      setIsDarkMode(isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    setIsClient(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <MUIThemeProvider theme={isDarkMode ? darkTheme : theme}>
        <CssBaseline />
        <LanguageProvider>{isClient ? children : null}</LanguageProvider>
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
