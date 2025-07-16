import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { navbarItems } from "../../data/navbarData";
import {
  Logo,
  MobileDrawer,
  NavButton,
  StyledAppBar,
  StyledToolbar,
} from "./styled";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <MobileDrawer>
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "16px" }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navbarItems.map((item) => (
          <ListItem key={item.label} onClick={() => handleMenuClick(item.href)}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </MobileDrawer>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <Logo variant="h6">Galuppo</Logo>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div style={{ display: "flex", gap: "16px" }}>
              {navbarItems.map((item) => (
                <NavButton
                  key={item.label}
                  color="inherit"
                  disableRipple
                  onClick={() => handleMenuClick(item.href)}
                >
                  {item.label}
                </NavButton>
              ))}
            </div>
          )}
        </StyledToolbar>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", padding: "16px" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
