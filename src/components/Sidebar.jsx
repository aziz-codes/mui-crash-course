import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Home,
  Mail,
  ModeNight,
  Pageview,
  People,
  Person,
  Settings,
} from "@mui/icons-material";
const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      flex={1}
      flexShrink="unset"
      maxWidth="350px"
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#groups">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#mails">
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#pages">
              <ListItemIcon>
                <Pageview />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#friend">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={() => {
                  mode === "light" ? "dark" : "light";
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
