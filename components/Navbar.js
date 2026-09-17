'use client';
import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText, Container,
  ToggleButtonGroup, ToggleButton, Typography, useScrollTrigger,
  Slide, Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#accueil' },
    { key: 'about', href: '#apropos' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' },
  ];

  const handleLocaleChange = (newLocale) => {
    if (!newLocale || newLocale === locale) return;
    // Build the new path by replacing only the locale segment
    // pathname is like /fr, /fr#section, /en, etc.
    const withoutLocale = pathname.replace(/^\/(fr|en)/, '') || '/';
    router.push(`/${newLocale}${withoutLocale}`);
  };

  const scrollTo = (href) => {
    setDrawerOpen(false);
    if (href.startsWith('#')) {
      // Small delay when closing drawer to let it animate first
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            bgcolor: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.0)',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid' : 'none',
            borderColor: 'divider',
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>

              {/* Logo */}
              <Typography
                variant="h6"
                component="a"
                href="#accueil"
                onClick={(e) => { e.preventDefault(); scrollTo('#accueil'); }}
                sx={{
                  fontFamily: 'var(--font-sora)',
                  fontWeight: 800,
                  color: scrolled ? 'primary.main' : 'white',
                  textDecoration: 'none',
                  letterSpacing: '-0.03em',
                  mr: 'auto',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  transition: 'color 0.3s',
                  '&:focus-visible': {
                    outline: '3px solid',
                    outlineColor: 'primary.light',
                    outlineOffset: 3,
                    borderRadius: 1,
                  },
                }}
              >
                Eric<Box component="span" sx={{ color: 'secondary.main' }}>.</Box>dev
              </Typography>

              {/* ── Desktop nav ── */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.key}
                    onClick={() => scrollTo(item.href)}
                    sx={{
                      color: scrolled ? 'text.primary' : 'white',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      px: 1.5,
                      '&:hover': { bgcolor: scrolled ? 'grey.100' : 'rgba(255,255,255,0.15)' },
                      '&:focus-visible': {
                        outline: '2px solid',
                        outlineColor: 'primary.light',
                        outlineOffset: 2,
                      },
                    }}
                  >
                    {t(item.key)}
                  </Button>
                ))}

                {/* Desktop language switcher */}
                <ToggleButtonGroup
                  value={locale}
                  exclusive
                  onChange={(_, val) => handleLocaleChange(val)}
                  size="small"
                  sx={{ mx: 1.5 }}
                  aria-label="Sélecteur de langue"
                >
                  {routing.locales.map((loc) => (
                    <ToggleButton
                      key={loc}
                      value={loc}
                      aria-label={loc.toUpperCase()}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        fontWeight: 600,
                        fontSize: '0.78rem',
                        border: '2px solid',
                        borderColor: scrolled ? 'primary.main' : 'rgba(255,255,255,0.6)',
                        color: scrolled ? 'primary.main' : 'white',
                        '&.Mui-selected': {
                          bgcolor: 'primary.main',
                          color: 'white',
                          '&:hover': { bgcolor: 'primary.dark' },
                        },
                        '&:hover': {
                          bgcolor: scrolled ? 'primary.light' : 'rgba(255,255,255,0.2)',
                          color: 'white',
                        },
                      }}
                    >
                      {loc.toUpperCase()}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>

                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  startIcon={<DownloadIcon />}
                  href="/cv-eric-ndihokubwayo.pdf"
                  download
                  sx={{ ml: 1, fontSize: '0.82rem', px: 2 }}
                >
                  {t('downloadCV')}
                </Button>

                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<VisibilityIcon />}
                  href="https://flowcv.com/resume/sijustq2u2"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    ml: 1,
                    fontSize: '0.82rem',
                    px: 2,
                    borderWidth: 2,
                    borderColor: scrolled ? 'primary.main' : 'rgba(255,255,255,0.6)',
                    color: scrolled ? 'primary.main' : 'white',
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: scrolled ? 'primary.dark' : 'white',
                      bgcolor: scrolled ? 'rgba(27,58,107,0.08)' : 'rgba(255,255,255,0.15)',
                    },
                  }}
                >
                  {t('viewCV')}
                </Button>
              </Box>

              {/* ── Mobile: langue + hamburger ── */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }}>
                {/* Boutons FR / EN en mobile — utilise des boutons simples pour éviter
                    le problème de déselection du ToggleButtonGroup */}
                {routing.locales.map((loc) => (
                  <Button
                    key={loc}
                    onClick={() => handleLocaleChange(loc)}
                    size="small"
                    variant={locale === loc ? 'contained' : 'outlined'}
                    aria-label={`Langue ${loc.toUpperCase()}`}
                    aria-pressed={locale === loc}
                    sx={{
                      minWidth: 38,
                      px: 0,
                      py: 0.5,
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      lineHeight: 1,
                      ...(locale === loc
                        ? {
                            bgcolor: 'primary.main',
                            color: 'white',
                            border: '2px solid',
                            borderColor: 'primary.main',
                            '&:hover': { bgcolor: 'primary.dark', borderColor: 'primary.dark' },
                          }
                        : {
                            bgcolor: 'transparent',
                            color: scrolled ? 'primary.main' : 'white',
                            border: '2px solid',
                            borderColor: scrolled ? 'primary.main' : 'rgba(255,255,255,0.6)',
                            '&:hover': {
                              bgcolor: scrolled ? 'rgba(27,58,107,0.08)' : 'rgba(255,255,255,0.15)',
                              borderColor: scrolled ? 'primary.main' : 'white',
                            },
                          }),
                    }}
                  >
                    {loc.toUpperCase()}
                  </Button>
                ))}

                <IconButton
                  onClick={() => setDrawerOpen(true)}
                  aria-label="Ouvrir le menu"
                  sx={{
                    color: scrolled ? 'primary.main' : 'white',
                    ml: 0.5,
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* ── Mobile Drawer ── rendu en dehors du AppBar pour éviter tout conflit de z-index */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              pt: 1,
            },
          },
        }}
      >
        {/* Header du drawer */}
        <Box
          sx={{
            px: 2,
            py: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font-sora)',
              fontWeight: 800,
              fontSize: '1rem',
              color: 'primary.main',
              letterSpacing: '-0.03em',
            }}
          >
            Eric<Box component="span" sx={{ color: 'secondary.main' }}>.</Box>dev
          </Typography>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            aria-label="Fermer le menu"
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        {/* Liens de navigation */}
        <List sx={{ px: 1, py: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton
                onClick={() => scrollTo(item.href)}
                sx={{
                  px: 2.5,
                  py: 1.4,
                  borderRadius: 2,
                  mb: 0.5,
                  '&:hover': { bgcolor: 'primary.main', color: 'white' },
                }}
              >
                <ListItemText
                  primary={t(item.key)}
                  slotProps={{
                    primary: { fontWeight: 600, fontSize: '1rem' },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        {/* Télécharger CV + Voir CV */}
        <Box sx={{ px: 3, py: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            startIcon={<DownloadIcon />}
            href="/cv-eric-ndihokubwayo.pdf"
            download
            onClick={() => setDrawerOpen(false)}
            sx={{ py: 1.2 }}
          >
            {t('downloadCV')}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<VisibilityIcon />}
            href="https://flowcv.com/resume/sijustq2u2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDrawerOpen(false)}
            sx={{ py: 1.2, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
          >
            {t('viewCV')}
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
