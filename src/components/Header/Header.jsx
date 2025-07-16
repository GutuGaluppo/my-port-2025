import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { StyledAppBar, StyledToolbar, Logo, NavButton, MobileDrawer } from './styled';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Music', href: '#music' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <MobileDrawer>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {menuItems.map((item) => (
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
          <Logo variant="h6" component="div">
            Augusto Galuppo
          </Logo>
          
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
            <div style={{ display: 'flex', gap: '16px' }}>
              {menuItems.map((item) => (
                <NavButton
                  key={item.label}
                  color="inherit"
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
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;

