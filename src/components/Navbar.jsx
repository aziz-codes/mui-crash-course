import { Pets, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const imageSrc =
    "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600";
  const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const Search = styled("div")({
    backgroundColor: "white",
    padding: "0,10px",
    borderRadius: "5px",
    width: "40%",
  });
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    flexDirection: "row",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "5px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar
      position="sticky"
      sx={{
        height: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyleToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search" sx={{ pl: 1 }} />
        </Search>
        <Icons>
          <IconButton>
            <Badge badgeContent=" " color="error" variant="dot">
              <Mail />
            </Badge>
          </IconButton>

          <IconButton>
            <Badge badgeContent=" " variant="dot" color="error">
              <Notifications color="white" />
            </Badge>
          </IconButton>
          <Avatar
            sx={{ width: "25px", height: "25px" }}
            src={imageSrc}
            onClick={() => {
              setOpen(true);
            }}
          />
        </Icons>
        <UserBox
          onClick={() => {
            setOpen(true);
          }}
        >
          <Avatar sx={{ width: "25px", height: "25px" }} src={imageSrc} />
          <Typography variant="p">John</Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
