'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1B3A6B',      // Deep navy blue — trust, professionalism
      light: '#2E5FA3',
      dark: '#0F2244',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00A8A8',      // Teal — tech, innovation
      light: '#33BEBE',
      dark: '#007575',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F7F9FC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A2E',
      secondary: '#4A5568',
    },
    divider: '#E2E8F0',
    grey: {
      50: '#F7F9FC',
      100: '#EEF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Sora", "Inter", sans-serif',
      fontWeight: 800,
      fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Sora", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)',
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
    },
    h3: {
      fontFamily: '"Sora", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Sora", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.1rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
      color: '#4A5568',
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.65,
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    caption: {
      fontSize: '0.8rem',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '0.95rem',
          transition: 'all 0.25s ease',
        },
        containedPrimary: {
          boxShadow: '0 4px 14px rgba(27,58,107,0.25)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(27,58,107,0.4)',
            transform: 'translateY(-1px)',
          },
        },
        containedSecondary: {
          boxShadow: '0 4px 14px rgba(0,168,168,0.25)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0,168,168,0.4)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2E5FA3',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1B3A6B',
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          border: '1px solid #E2E8F0',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: '3px solid #2E5FA3',
            outlineOffset: '3px',
            borderRadius: 3,
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
