import { Close as CloseIcon } from "@mui/icons-material";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useCallback } from "react";
import { navbarItems } from "../../../data/navbarData";
import { DrawerHeader, MobileDrawer } from "./styled";

interface MobileNavDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MobileNavDrawer = ({ open, onClose }: MobileNavDrawerProps) => {
  const handleMenuClick = useCallback(
    (href: string) => {
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
      onClose();
    },
    [onClose],
  );

  const drawerContent = (
    <MobileDrawer>
      <DrawerHeader>
        <IconButton onClick={onClose} aria-label="close navigation menu">
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <List role="navigation" aria-label="mobile navigation">
        {navbarItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => handleMenuClick(item.href)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleMenuClick(item.href);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Navigate to ${item.label} section`}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </MobileDrawer>
  );

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", padding: "16px" },
      }}
      aria-label="mobile navigation drawer"
    >
      {drawerContent}
    </Drawer>
  );
};

export default MobileNavDrawer;
