import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: 'Prompt, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 300,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient(#00000015 1px, transparent 1px),
            linear-gradient(90deg, #00000015 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          transition: 'background-color 0.3s ease, background-image 0.3s ease',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ce93d8',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient(#ffffff09 1px, transparent 1px),
            linear-gradient(90deg, #ffffff09 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          transition: 'background-color 0.3s ease, background-image 0.3s ease',
        },
      },
    },
  },
});
