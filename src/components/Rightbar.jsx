import { Box, Typography, Avatar, AvatarGroup } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600"
          />

          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default Rightbar;
