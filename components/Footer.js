'use client';
import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 5,
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          {/* Brand */}
          <Typography
            variant="h6"
            sx={{ fontFamily: 'var(--font-sora)', fontWeight: 800, letterSpacing: '-0.03em' }}
          >
            Eric<Box component="span" sx={{ color: 'secondary.main' }}>.</Box>dev
          </Typography>

          {/* Social links */}
          <Stack direction="row" spacing={1}>
            <IconButton
              aria-label="GitHub"
              component="a"
              href="https://github.com/CodeLearner2024"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              component="a"
              href="https://linkedin.com/in/eric-ndihokubwayo-85456424b"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="Email"
              component="a"
              href="mailto:ndihokubwayoeric26@gmail.com"
              sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)', my: 3 }} />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} Eric NDIHOKUBWAYO. {t('rights')}
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {t('madeWith')}&nbsp;<FavoriteIcon sx={{ fontSize: '0.9rem', color: 'secondary.main' }} />&nbsp;Next.js & MUI
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
