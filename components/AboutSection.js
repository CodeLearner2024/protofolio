'use client';
import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, Stack, Chip, Divider,
  Paper, LinearProgress, Tab, Tabs,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsIcon from '@mui/icons-material/Sports';
import HikingIcon from '@mui/icons-material/Hiking';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useTranslations } from 'next-intl';

const SKILLS = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'React'],
  backend: ['Java', 'Spring Boot', 'RichFaces'],
  archi: ['UML', 'MERISE', 'Apache Kafka', 'Feign', 'Rest Template'],
  db: ['MySQL', 'Oracle', 'PostgreSQL'],
  tools: ['Git', 'GitHub'],
  office: ['Word', 'Excel', 'PowerPoint'],
};

const SKILL_COLORS = {
  frontend: { bg: '#EEF2FF', color: '#3730A3', border: '#C7D2FE' },
  backend: { bg: '#FFF7ED', color: '#9A3412', border: '#FED7AA' },
  archi: { bg: '#F0FDF4', color: '#166534', border: '#BBF7D0' },
  db: { bg: '#EFF6FF', color: '#1E40AF', border: '#BFDBFE' },
  tools: { bg: '#FDF4FF', color: '#7E22CE', border: '#E9D5FF' },
  office: { bg: '#F0F9FF', color: '#075985', border: '#BAE6FD' },
};

const LANGUAGES = [
  { key: 'lang1', levelKey: 'lang1Level', level: 100 },
  { key: 'lang2', levelKey: 'lang2Level', level: 90 },
  { key: 'lang3', levelKey: 'lang3Level', level: 60 },
  { key: 'lang4', levelKey: 'lang4Level', level: 55 },
];

const INTERESTS = [
  { key: 'interest1', icon: <SportsIcon /> },
  { key: 'interest2', icon: <HikingIcon /> },
  { key: 'interest3', icon: <MusicNoteIcon /> },
];

function SectionLabel({ children }) {
  return (
    <Typography
      variant="caption"
      sx={{
        color: 'secondary.main',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        display: 'block',
        mb: 1,
      }}
    >
      {children}
    </Typography>
  );
}

function TimelineItem({ icon, title, sub, period, location, description, isLast }) {
  return (
    <Stack direction="row" spacing={2.5} sx={{ position: 'relative' }}>
      {/* Left: icon + line */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          {icon}
        </Box>
        {!isLast && (
          <Box sx={{ width: 2, flex: 1, bgcolor: 'grey.200', mt: 1, mb: 0, minHeight: 32 }} />
        )}
      </Box>

      {/* Right: content */}
      <Box sx={{ pb: isLast ? 0 : 3, flex: 1 }}>
        <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 700, mb: 0.3 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mb: 0.8 }}>
          {sub}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 1 }}>
          <Stack direction="row" spacing={0.4} sx={{ alignItems: 'center' }}>
            <CalendarTodayIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
            <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 'normal', textTransform: 'none', fontWeight: 400 }}>
              {period}
            </Typography>
          </Stack>
          {location && (
            <Stack direction="row" spacing={0.4} sx={{ alignItems: 'center' }}>
              <LocationOnIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
              <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 'normal', textTransform: 'none', fontWeight: 400 }}>
                {location}
              </Typography>
            </Stack>
          )}
        </Stack>
        {description && (
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
            {description}
          </Typography>
        )}
      </Box>
    </Stack>
  );
}

export default function AboutSection() {
  const t = useTranslations('about');
  const [activeTab, setActiveTab] = useState(0);

  const educationItems = [
    {
      icon: <SchoolIcon sx={{ fontSize: 18 }} />,
      title: t('edu1Title'),
      sub: t('edu1School'),
      period: t('edu1Period'),
      location: t('edu1Location'),
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 18 }} />,
      title: t('edu2Title'),
      sub: t('edu2School'),
      period: t('edu2Period'),
      location: t('edu2Location'),
    },
  ];

  const experienceItems = [
    {
      icon: <WorkIcon sx={{ fontSize: 18 }} />,
      title: t('exp1Title'),
      sub: t('exp1Company'),
      period: t('exp1Period'),
      description: t('exp1Desc'),
    },
    {
      icon: <WorkIcon sx={{ fontSize: 18 }} />,
      title: t('exp2Title'),
      sub: t('exp2Company'),
      period: t('exp2Period'),
      description: t('exp2Desc'),
    },
  ];

  const skillCategories = [
    { labelKey: 'skillsFrontend', items: SKILLS.frontend, colorKey: 'frontend' },
    { labelKey: 'skillsBackend', items: SKILLS.backend, colorKey: 'backend' },
    { labelKey: 'skillsArchi', items: SKILLS.archi, colorKey: 'archi' },
    { labelKey: 'skillsDB', items: SKILLS.db, colorKey: 'db' },
    { labelKey: 'skillsTools', items: SKILLS.tools, colorKey: 'tools' },
    { labelKey: 'skillsOffice', items: SKILLS.office, colorKey: 'office' },
  ];

  return (
    <Box
      id="apropos"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <SectionLabel>{t('title')}</SectionLabel>
          <Typography variant="h2" sx={{ color: 'text.primary', mb: 2 }}>
            {t('title')}
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 560, mx: 'auto', color: 'text.secondary' }}
          >
            {t('subtitle')}
          </Typography>
          <Box sx={{ width: 56, height: 4, bgcolor: 'secondary.main', borderRadius: 2, mx: 'auto', mt: 3 }} />
        </Box>

        {/* Tabs: Formation / Expérience */}
        <Box sx={{ mb: 6 }}>
          <Tabs
            value={activeTab}
            onChange={(_, v) => setActiveTab(v)}
            centered
            sx={{
              mb: 5,
              '& .MuiTab-root': { fontWeight: 600, fontSize: '0.95rem', textTransform: 'none', minWidth: 140 },
              '& .MuiTabs-indicator': { height: 3, borderRadius: 2, bgcolor: 'secondary.main' },
            }}
          >
            <Tab label={t('education')} icon={<SchoolIcon />} iconPosition="start" />
            <Tab label={t('experience')} icon={<WorkIcon />} iconPosition="start" />
          </Tabs>

          {/* Education */}
          {activeTab === 0 && (
            <Box sx={{ maxWidth: 700, mx: 'auto' }}>
              {educationItems.map((item, i) => (
                <TimelineItem key={i} {...item} isLast={i === educationItems.length - 1} />
              ))}
            </Box>
          )}

          {/* Experience */}
          {activeTab === 1 && (
            <Box sx={{ maxWidth: 700, mx: 'auto' }}>
              {experienceItems.map((item, i) => (
                <TimelineItem key={i} {...item} isLast={i === experienceItems.length - 1} />
              ))}
            </Box>
          )}
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Skills */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h3" sx={{ color: 'text.primary', mb: 4, textAlign: 'center' }}>
            {t('skills')}
          </Typography>
          <Grid container spacing={3}>
            {skillCategories.map(({ labelKey, items, colorKey }) => {
              const colors = SKILL_COLORS[colorKey];
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={labelKey}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      border: '1px solid',
                      borderColor: colors.border,
                      bgcolor: colors.bg,
                      borderRadius: 3,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: colors.color, fontWeight: 700, letterSpacing: '0.08em', display: 'block', mb: 2 }}
                    >
                      {t(labelKey)}
                    </Typography>
                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.8 }}>
                      {items.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.8)',
                            color: colors.color,
                            border: `1px solid ${colors.border}`,
                            fontWeight: 500,
                            fontSize: '0.78rem',
                          }}
                        />
                      ))}
                    </Stack>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Languages + Interests */}
        <Grid container spacing={6}>
          {/* Languages */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" sx={{ color: 'text.primary', mb: 4 }}>
              {t('languages')}
            </Typography>
            <Stack spacing={2.5}>
              {LANGUAGES.map(({ key, levelKey, level }) => (
                <Box key={key}>
                  <Stack direction="row" spacing={2.5} sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 0.8 }}>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.95rem' }}>
                      {t(key)}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 'normal', textTransform: 'none', fontWeight: 400 }}>
                      {t(levelKey)}
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={level}
                    sx={{
                      height: 7,
                      borderRadius: 4,
                      bgcolor: 'grey.100',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 4,
                        bgcolor: level === 100 ? 'primary.main' : level >= 80 ? 'secondary.main' : 'primary.light',
                      },
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Interests */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" sx={{ color: 'text.primary', mb: 4 }}>
              {t('interests')}
            </Typography>
            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 2 }}>
              {INTERESTS.map(({ key, icon }) => (
                <Paper
                  key={key}
                  elevation={0}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3,
                    py: 2,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 3,
                    cursor: 'default',
                    transition: 'all 0.2s',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      bgcolor: 'rgba(0,168,168,0.05)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Box sx={{ color: 'secondary.main' }}>{icon}</Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.95rem' }}>
                    {t(key)}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
