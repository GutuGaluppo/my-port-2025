import { styled } from '@mui/material/styles';
import { Box, Typography, Card } from '@mui/material';

export const ExperienceSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  backgroundColor: theme.palette.grey[50],
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
  position: 'relative',
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

export const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '800px',
  margin: '0 auto',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    backgroundColor: theme.palette.grey[300],
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('md')]: {
      left: '20px',
    },
  },
}));

export const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(6),
  '&:last-child': {
    marginBottom: 0,
  },
}));

export const TimelineConnector = styled(Box)(({ theme, current }) => ({
  position: 'absolute',
  left: '50%',
  top: '20px',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: current ? theme.palette.primary.main : theme.palette.grey[400],
  border: `4px solid ${theme.palette.background.paper}`,
  transform: 'translateX(-50%)',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    left: '20px',
  },
  '&::after': current ? {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'white',
    transform: 'translate(-50%, -50%)',
  } : {},
}));

export const TimelineContent = styled(Box)(({ theme }) => ({
  marginLeft: '50%',
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    marginLeft: '60px',
    paddingLeft: theme.spacing(2),
  },
}));

export const CompanyCard = styled(Card)(({ theme, current }) => ({
  borderRadius: '16px',
  border: current 
    ? `2px solid ${theme.palette.primary.main}` 
    : `1px solid ${theme.palette.grey[200]}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: current 
      ? '0 20px 40px rgba(25, 118, 210, 0.15)' 
      : '0 20px 40px rgba(0, 0, 0, 0.1)',
  },
}));

export const CompanyHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '16px',
});

export const CompanyName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.5),
}));

export const JobTitle = styled(Typography)(({ theme, current }) => ({
  fontWeight: 600,
  color: current ? theme.palette.primary.main : theme.palette.text.secondary,
}));

export const JobDetails = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    color: theme.palette.text.secondary,
  },
}));

export const JobDescription = styled('ul')(({ theme }) => ({
  margin: 0,
  paddingLeft: theme.spacing(2),
  marginBottom: theme.spacing(3),
  '& li': {
    listStyle: 'none',
    position: 'relative',
    lineHeight: 1.6,
    '&::before': {
      content: '"•"',
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      position: 'absolute',
      left: '-16px',
    },
  },
}));

export const TechStack = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  '& .MuiChip-root': {
    fontSize: '0.75rem',
    height: '24px',
  },
}));

