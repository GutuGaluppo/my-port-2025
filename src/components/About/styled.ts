import { styled } from "@mui/material/styles";
import { Box, Typography, Chip } from "@mui/material";

export const AboutSection = styled(Box)({
  position: "relative",
  padding: "100px 0",
});

export const AboutContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "clamp(2rem, 5vw, 3rem)",
  marginBottom: theme.spacing(6),
  color: `${theme.palette.common.white}50`,
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "15px",
    left: "25%",
    transform: "translateX(-50%)",
    width: "200px",
    height: "1px",
    backgroundColor: "gold",
    borderRadius: "2px",
  },
}));

export const VerticalText = styled(Typography)({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.9rem",
  fontWeight: 400,
  transform: "rotate(90deg)",
  width: "50%",
  top: " 50%",
  right: "-18%",
});

export const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(1.4rem, 1.4vw, 2rem)",
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
