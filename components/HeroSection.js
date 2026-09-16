'use client';
import React from 'react';
import {
  Box, Container, Typography, Button, Stack, Chip, Avatar,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslations } from 'next-intl';

const TECH_TAGS = ['Next.js', 'Spring Boot', 'Kafka', 'Java', 'PostgreSQL', 'Microservices'];

export default function HeroSection() {
  const t = useTranslations('hero');

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="accueil"
      component="section"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: 'primary.dark',
        // Subtle diagonal grid pattern
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(0,168,168,0.12) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(46,95,163,0.2) 0%, transparent 40%),
          linear-gradient(135deg, #0F2244 0%, #1B3A6B 60%, #0F2244 100%)
        `,
      }}
    >
      {/* Decorative grid lines */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Accent blob top-right */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,168,168,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 14, md: 0 } }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 6, md: 4 }}
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* Left: Text content */}
          <Box sx={{ maxWidth: { md: '58%' } }}>
            {/* Location badge */}
            <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', mb: 3 }}>
              <LocationOnIcon sx={{ fontSize: 16, color: 'secondary.main' }} />
              <Typography
                variant="caption"
                sx={{ color: 'rgba(255,255,255,0.65)', letterSpacing: '0.1em' }}
              >
                {t('location')}
              </Typography>
            </Stack>

            {/* Greeting */}
            <Typography
              variant="body1"
              sx={{
                color: 'secondary.main',
                fontWeight: 600,
                fontSize: '1.05rem',
                mb: 1,
                letterSpacing: '0.02em',
              }}
            >
              {t('greeting')}
            </Typography>

            {/* Name */}
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                mb: 2,
                '& span': { color: 'secondary.main' },
              }}
            >
              {t('name').split(' ')[0]}{' '}
              <Box component="span">{t('name').split(' ')[1]}</Box>
            </Typography>

            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                color: 'rgba(255,255,255,0.82)',
                fontWeight: 500,
                mb: 3,
                fontSize: { xs: '1.1rem', md: '1.35rem' },
                fontFamily: 'var(--font-inter)',
              }}
            >
              {t('title')}
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="subtitle1"
              sx={{
                color: 'rgba(255,255,255,0.6)',
                maxWidth: 560,
                mb: 4,
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', md: '1rem' },
              }}
            >
              {t('subtitle')}
            </Typography>

            {/* Tech chips */}
            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, mb: 5 }}>
              {TECH_TAGS.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.07)',
                    color: 'rgba(255,255,255,0.75)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    fontWeight: 500,
                    fontSize: '0.78rem',
                    '&:hover': { bgcolor: 'rgba(0,168,168,0.15)', borderColor: 'secondary.main', color: 'secondary.light' },
                    transition: 'all 0.2s',
                  }}
                />
              ))}
            </Stack>

            {/* CTA Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<EmailIcon />}
                onClick={scrollToContact}
                sx={{ px: 3.5, py: 1.4, fontSize: '0.95rem' }}
              >
                {t('cta')}
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                href="/cv-eric-ndihokubwayo.pdf"
                download
                sx={{
                  px: 3.5,
                  py: 1.4,
                  fontSize: '0.95rem',
                  borderColor: 'rgba(255,255,255,0.4)',
                  color: 'white',
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.08)',
                    borderWidth: 2,
                  },
                }}
              >
                {t('ctaCV')}
              </Button>
            </Stack>
          </Box>

          {/* Right: Avatar card */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              flexShrink: 0,
            }}
          >
            {/* Avatar ring */}
            <Box
              sx={{
                p: '4px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00A8A8 0%, #2E5FA3 100%)',
                boxShadow: '0 0 40px rgba(0,168,168,0.35)',
              }}
            >
              <Avatar
                alt="Eric NDIHOKUBWAYO"
                sx={{
                  width: { xs: 160, md: 220 },
                  height: { xs: 160, md: 220 },
                  bgcolor: 'primary.main',
                  fontSize: { xs: '3rem', md: '4rem' },
                  fontFamily: 'var(--font-sora)',
                  fontWeight: 800,
                  color: 'white',
                  border: '4px solid',
                  borderColor: 'primary.dark',
                }}
              >
                EN
              </Avatar>
            </Box>

            {/* Stats row */}
            <Stack
              direction="row"
              spacing={0}
              sx={{
                bgcolor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              {[
                { value: '4+', label: 'Ans exp.' },
                { value: '10+', label: 'Projets' },
                { value: '2', label: 'Langues tech.' },
              ].map((stat, i) => (
                <Box
                  key={stat.label}
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    textAlign: 'center',
                    borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  }}
                >
                  <Typography
                    sx={{ color: 'secondary.light', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1.2, fontFamily: 'var(--font-sora)' }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', mt: 0.3, letterSpacing: '0.04em' }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          opacity: 0.5,
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(6px)' },
          },
        }}
        aria-hidden="true"
      >
        <ArrowDownwardIcon sx={{ color: 'white', fontSize: 22 }} />
      </Box>
    </Box>
  );
}
