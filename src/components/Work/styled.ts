import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const WorkSection = styled(Box)(({ theme }) => ({
  padding: "100px 0",
  backgroundColor: theme.palette.grey[50],
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "clamp(2rem, 5vw, 3rem)",
  marginBottom: theme.spacing(2),
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

export const FilterTabs = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  "& .MuiTabs-root": {
    "& .MuiTab-root": {
      textTransform: "none",
      fontWeight: 500,
      fontSize: "1rem",
      minWidth: "auto",
      padding: "12px 24px",
      "&.Mui-selected": {
        color: theme.palette.primary.main,
      },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.primary.main,
      height: "3px",
      borderRadius: "2px",
    },
  },
}));

export const ProjectCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
  overflow: "hidden",
  transition: "all 0.3s ease",
  border: `1px solid ${theme.palette.grey[200]}`,
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
  },
}));

export const ProjectImage = styled(Box)({
  position: "relative",
  height: "200px",
  overflow: "hidden",
  "& .overlay": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover .overlay": {
    opacity: 1,
  },
});

export const ProjectContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3),
}));

export const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
}));

export const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  marginBottom: theme.spacing(2),
  flexGrow: 1,
}));

export const TechStack = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  "& .MuiChip-root": {
    fontSize: "0.75rem",
    height: "24px",
  },
}));

export const ProjectActions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  marginTop: "auto",
}));
