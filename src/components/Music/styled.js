import { styled } from '@mui/material/styles';
import { Box, Typography, Card } from '@mui/material';

export const MusicSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      ${theme.palette.primary.main}05 0%, 
      ${theme.palette.secondary.main}05 100%)`,
    zIndex: 0,
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
  position: 'relative',
  zIndex: 1,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '4px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '2px',
  },
}));

export const MusicDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(6),
  maxWidth: '600px',
  margin: '0 auto',
  marginBottom: theme.spacing(6),
  lineHeight: 1.6,
  position: 'relative',
  zIndex: 1,
}));

export const MusicCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '16px',
  border: `1px solid ${theme.palette.grey[200]}`,
  transition: 'all 0.3s ease',
  position: 'relative',
  zIndex: 1,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },
}));

export const MusicIcon = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem',
    color: 'white',
  },
}));

export const MusicTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
}));

export const MusicText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));

export const SoundCloudContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  borderRadius: '20px',
  padding: theme.spacing(6),
  position: 'relative',
  zIndex: 1,
  border: `1px solid ${theme.palette.grey[200]}`,
  '& iframe': {
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
}));

