'use client';
import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, Stack, TextField, Button,
  Alert, Paper, CircularProgress,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import { useTranslations } from 'next-intl';

const CONTACT_INFO = [
  {
    icon: EmailIcon,
    label: 'Email',
    value: 'ndihokubwayoeric26@gmail.com',
    href: 'mailto:ndihokubwayoeric26@gmail.com',
    color: '#1B3A6B',
  },
  {
    icon: PhoneIcon,
    labelKey: 'phone',
    value: '(+257) 61 690 053',
    href: 'tel:+25761690053',
    color: '#00A8A8',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'eric-ndihokubwayo-85456424b',
    href: 'https://linkedin.com/in/eric-ndihokubwayo-85456424b',
    color: '#0A66C2',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'CodeLearner2024',
    href: 'https://github.com/CodeLearner2024',
    color: '#1A1A2E',
  },
];

export default function ContactSection() {
  const t = useTranslations('contact');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true;
    if (!form.subject.trim()) e.subject = true;
    if (!form.message.trim() || form.message.trim().length < 10) e.message = true;
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}
    >
      <Container maxWidth="lg">
        {/* Header */}
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

        {/* MUI v6 Grid — utilise size={} au lieu de item xs={} */}
        <Grid container spacing={5} sx={{ alignItems: 'flex-start' }}>

          {/* Colonne gauche : formulaire */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: '1px solid',
                borderColor: 'grey.200',
                borderRadius: 3,
              }}
            >
              {status === 'success' ? (
                <Stack spacing={2} sx={{ alignItems: 'center', py: 5 }}>
                  <CheckCircleOutlineIcon sx={{ fontSize: 64, color: 'secondary.main' }} />
                  <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 700 }}>
                    {t('successTitle')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 400 }}>
                    {t('successMsg')}
                  </Typography>
                  <Button variant="outlined" color="primary" onClick={() => setStatus('idle')}>
                    Nouveau message
                  </Button>
                </Stack>
              ) : (
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label={t('name')}
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        placeholder={t('namePlaceholder')}
                        disabled={status === 'sending'}
                        slotProps={{ htmlInput: { 'aria-label': t('name') } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label={t('email')}
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        placeholder={t('emailPlaceholder')}
                        disabled={status === 'sending'}
                        slotProps={{ htmlInput: { 'aria-label': t('email') } }}
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        required
                        label={t('subject')}
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        placeholder={t('subjectPlaceholder')}
                        disabled={status === 'sending'}
                        slotProps={{ htmlInput: { 'aria-label': t('subject') } }}
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        rows={5}
                        label={t('message')}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        placeholder={t('messagePlaceholder')}
                        disabled={status === 'sending'}
                        slotProps={{ htmlInput: { 'aria-label': t('message') } }}
                      />
                    </Grid>
                    {status === 'error' && (
                      <Grid size={12}>
                        <Alert severity="error">{t('errorMsg')}</Alert>
                      </Grid>
                    )}
                    <Grid size={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        disabled={status === 'sending'}
                        endIcon={
                          status === 'sending'
                            ? <CircularProgress size={18} color="inherit" />
                            : <SendIcon />
                        }
                        sx={{ py: 1.6, fontSize: '1rem', mt: 0.5 }}
                      >
                        {status === 'sending' ? t('sending') : t('send')}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Paper>
          </Grid>

          {/* Colonne droite : coordonnées directes */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ pl: { md: 2 } }}>
              <Typography variant="h4" sx={{ color: 'text.primary', mb: 3, fontWeight: 700 }}>
                {t('directContact')}
              </Typography>
              <Stack spacing={2}>
                {CONTACT_INFO.map((info) => {
                  const Icon = info.icon;
                  return (
                    <Box
                      key={info.value}
                      component="a"
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        borderRadius: 2.5,
                        border: '1px solid',
                        borderColor: 'grey.200',
                        textDecoration: 'none',
                        color: 'text.primary',
                        transition: 'all 0.2s',
                        '&:hover': {
                          borderColor: info.color,
                          bgcolor: `${info.color}08`,
                          transform: 'translateX(4px)',
                        },
                        '&:focus-visible': {
                          outline: '3px solid',
                          outlineColor: 'primary.light',
                          outlineOffset: 2,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          bgcolor: `${info.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: info.color,
                        }}
                      >
                        <Icon sx={{ fontSize: 22 }} />
                      </Box>
                      <Box sx={{ overflow: 'hidden' }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'text.secondary',
                            display: 'block',
                            letterSpacing: '0.08em',
                            mb: 0.2,
                            textTransform: 'none',
                            fontWeight: 400,
                          }}
                        >
                          {info.labelKey ? t(info.labelKey) : info.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            fontSize: '0.88rem',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
