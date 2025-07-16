import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient(135deg,
    ${theme.palette.background.default} 0%,
    ${theme.palette.grey[50]} 100%)`,
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}15 0%, transparent 50%),
                 radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}15 0%, transparent 50%)`,
    zIndex: 0,
  },
}));

export const HeroContent = styled(Box)({
  textAlign: "center",
  zIndex: 1,
  position: "relative",
  padding: "80px 0",
});

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  lineHeight: 1.1,
  marginBottom: theme.spacing(3),
  background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.down("md")]: {
    fontSize: "clamp(2rem, 6vw, 3rem)",
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  maxWidth: "600px",
  margin: "0 auto",
  marginBottom: theme.spacing(3),
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "clamp(1rem, 2vw, 1.2rem)",
  color: theme.palette.text.secondary,
  maxWidth: "700px",
  margin: "0 auto",
  marginBottom: theme.spacing(5),
  lineHeight: 1.6,
}));

export const CTAButton = styled(Button)(({ theme }) => ({
  padding: "12px 32px",
  fontSize: "1.1rem",
  fontWeight: 600,
  borderRadius: "50px",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },
  "&.MuiButton-contained": {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    "&:hover": {
      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    },
  },
  "&.MuiButton-outlined": {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    borderWidth: "2px",
    "&:hover": {
      borderWidth: "2px",
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
}));

export const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "40px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  color: theme.palette.text.secondary,
  transition: "all 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "translateX(-50%) translateY(-5px)",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "2rem",
    animation: "bounce 2s infinite",
  },
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateY(0)",
    },
    "40%": {
      transform: "translateY(-10px)",
    },
    "60%": {
      transform: "translateY(-5px)",
    },
  },
}));
