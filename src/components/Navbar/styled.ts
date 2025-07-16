import { AppBar, Button, styled, Toolbar, Typography } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
  borderEndEndRadius: theme.spacing(2),
  borderEndStartRadius: theme.spacing(2),
  color: theme.palette.text.primary,
  padding: "0 24px",
}));

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.5rem",
  color: theme.palette.primary.main,
  cursor: "pointer",
  "&:hover": {
    opacity: 0.8,
  },
}));

export const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  fontSize: "1rem",
  textTransform: "none",
  padding: "8px 16px",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "transparent",
    color: theme.palette.secondary.dark,
    transform: "translateY(-2px)",
  },
}));

export const MobileDrawer = styled("div")(({ theme }) => ({
  width: 240,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  "& .MuiListItem-root": {
    cursor: "pointer",
    borderRadius: "8px",
    margin: "4px 16px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
}));
