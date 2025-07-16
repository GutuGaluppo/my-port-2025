import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useState } from "react";
import { navbarItems } from "../../data/navbarData";
import MobileNavDrawer from ".//MobileNavDrawer";
import {
  DesktopNavContainer,
  Logo,
  NavButton,
  StyledAppBar,
  StyledToolbar,
} from "./styled";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  const handleMenuClick = useCallback((href: string) => {
    try {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Element with selector "${href}" not found`);
      }
    } catch (error) {
      console.error("Error scrolling to element:", error);
    }
  }, []);

  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          <Logo variant="h6">G</Logo>

          {isMobile ? (
            <IconButton
              aria-label="open navigation menu"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon color="primary" />
            </IconButton>
          ) : (
            <DesktopNavContainer role="navigation" aria-label="main navigation">
              {navbarItems.map((item) => (
                <NavButton
                  key={item.label}
                  color="inherit"
                  disableRipple
                  onClick={() => handleMenuClick(item.href)}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </NavButton>
              ))}
            </DesktopNavContainer>
          )}
        </StyledToolbar>
      </StyledAppBar>

      <MobileNavDrawer open={mobileOpen} onClose={handleDrawerToggle} />
    </>
  );
};

export default Navbar;
