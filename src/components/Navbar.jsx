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
} from "@mui/material";
import React from "react";

const Navbar = () => {
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
  const Icons = styled(Box)({
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    alignItems: "center",
  });
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
          <Avatar sx={{ width: "30px", height: "30px" }} src={imageSrc} />
        </Icons>
      </StyleToolbar>
    </AppBar>
  );
};

export default Navbar;
