'use client';
import React from 'react';
import {
  Box, Container, Typography, Grid, Stack, Chip,
} from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ApiIcon from '@mui/icons-material/Api';
import { useTranslations } from 'next-intl';

const SERVICES = [
  {
    icon: WebIcon,
    titleKey: 's1Title',
    descKey: 's1Desc',
    tags: ['Next.js', 'React', 'JavaScript', 'CSS'],
    accent: '#2E5FA3',
    accentLight: '#EEF2FF',
    accentBorder: '#C7D2FE',
    number: '01',
  },
  {
    icon: BusinessCenterIcon,
    titleKey: 's2Title',
    descKey: 's2Desc',
    tags: ['UML', 'MERISE', 'Spring Boot', 'Analyse'],
    accent: '#00A8A8',
    accentLight: '#F0FDFC',
    accentBorder: '#99F6E4',
    number: '02',
  },
  {
    icon: AccountTreeIcon,
    titleKey: 's3Title',
    descKey: 's3Desc',
    tags: ['ERP', 'MySQL', 'Oracle', 'PostgreSQL'],
    accent: '#7C3AED',
    accentLight: '#FDF4FF',
    accentBorder: '#E9D5FF',
    number: '03',
  },
  {
    icon: ApiIcon,
    titleKey: 's4Title',
    descKey: 's4Desc',
    tags: ['Spring Boot', 'Kafka', 'Feign', 'REST'],
    accent: '#0F766E',
    accentLight: '#F0FDF4',
    accentBorder: '#BBF7D0',
    number: '04',
  },
];

function ServiceCard({ service, t }) {
  const Icon = service.icon;

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        p: { xs: 3, md: 4 },
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'grey.200',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'default',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: `0 20px 40px rgba(0,0,0,0.1)`,
          borderColor: service.accentBorder,
          '& .service-accent-line': { width: '100%' },
          '& .service-icon-box': {
            bgcolor: service.accent,
            color: 'white',
          },
        },
      }}
    >
      {/* Top accent line */}
      <Box
        className="service-accent-line"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: 3,
          width: 48,
          bgcolor: service.accent,
          borderRadius: '0 0 3px 0',
          transition: 'width 0.4s ease',
        }}
      />

      {/* Number */}
      <Typography
        sx={{
          position: 'absolute',
          top: 16,
          right: 20,
          fontSize: '2.5rem',
          fontWeight: 800,
          color: 'rgba(0,0,0,0.04)',
          fontFamily: 'var(--font-sora)',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        {service.number}
      </Typography>

      {/* Icon */}
      <Box
        className="service-icon-box"
        sx={{
          width: 52,
          height: 52,
          borderRadius: 2.5,
          bgcolor: service.accentLight,
          color: service.accent,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
          transition: 'all 0.3s ease',
          border: `1px solid ${service.accentBorder}`,
        }}
      >
        <Icon sx={{ fontSize: 26 }} />
      </Box>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: 'text.primary',
          mb: 1.5,
          fontSize: { xs: '1.05rem', md: '1.15rem' },
          fontWeight: 700,
          lineHeight: 1.3,
          pr: 4,
        }}
      >
        {t(service.titleKey)}
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          lineHeight: 1.75,
          mb: 3,
          fontSize: '0.88rem',
        }}
      >
        {t(service.descKey)}
      </Typography>

      {/* Tags */}
      <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.8 }}>
        {service.tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              bgcolor: service.accentLight,
              color: service.accent,
              border: `1px solid ${service.accentBorder}`,
              fontWeight: 600,
              fontSize: '0.72rem',
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default function ServicesSection() {
  const t = useTranslations('services');

  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'grey.50',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.12em', display: 'block', mb: 1 }}
          >
            {t('title')}
          </Typography>
          <Typography variant="h2" sx={{ color: 'text.primary', mb: 2 }}>
            {t('title')}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 520, mx: 'auto', color: 'text.secondary' }}>
            {t('subtitle')}
          </Typography>
          <Box sx={{ width: 56, height: 4, bgcolor: 'secondary.main', borderRadius: 2, mx: 'auto', mt: 3 }} />
        </Box>

        {/* Service cards grid */}
        <Grid container spacing={3}>
          {SERVICES.map((service) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={service.number}>
              <ServiceCard service={service} t={t} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
