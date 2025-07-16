import { Box, styled } from "@mui/material";

export const MobileDrawer = styled(Box)(({ theme }) => ({
  width: 240,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  "& .MuiListItem-root": {
    cursor: "pointer",
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(0.5),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
}));

export const DrawerHeader = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
});
