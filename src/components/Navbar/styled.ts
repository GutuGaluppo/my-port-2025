import { AppBar, Button, styled, Toolbar, Typography } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  padding: "0 24px",
  "&.MuiPaper-root": {
    boxShadow: "none",
  },
  "&.MuiAppBar-root": {
    backgroundColor: "transparent",
    position: "absolute",
  },
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.5rem",
  color: theme.palette.common.white,
  cursor: "pointer",
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
  },
}));

export const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 700,
  fontSize: "1.3rem",
  textTransform: "none",
  padding: "8px 16px",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  opacity: 0.6,
  "&:hover": {
    background: "transparent",
    opacity: 1,
    transform: "translateY(2px)",
  },
}));

export const DesktopNavContainer = styled("div")({
  display: "flex",
  gap: "16px",
});
