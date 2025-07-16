import { styled } from "@mui/material/styles";
import { Box, Typography, Chip } from "@mui/material";

export const AboutSection = styled(Box)(({ theme }) => ({
  padding: "100px 0",
  backgroundColor: theme.palette.background.paper,
}));

export const AboutContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "clamp(2rem, 5vw, 3rem)",
  marginBottom: theme.spacing(6),
  color: theme.palette.text.primary,
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "4px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2px",
  },
}));

export const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  lineHeight: 1.7,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

export const SkillsContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[50],
  borderRadius: "16px",
  border: `1px solid ${theme.palette.grey[200]}`,
}));

export const SkillChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
  transition: "all 0.3s ease",
}));

export const StatsContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(4),
  backgroundColor: theme.palette.primary.main,
  borderRadius: "20px",
  color: "white",
}));

export const StatItem = styled(Box)({
  textAlign: "center",
});

export const StatNumber = styled(Typography)({
  fontWeight: 800,
  color: "white",
  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
});

export const StatLabel = styled(Typography)({
  color: "rgba(255, 255, 255, 0.9)",
  fontWeight: 500,
  fontSize: "0.9rem",
  textTransform: "uppercase",
  letterSpacing: "1px",
});
