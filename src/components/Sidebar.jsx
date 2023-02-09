import React from "react";
import { Box } from "@mui/material";
const Sidebar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={1}
      flexShrink="unset"
      maxWidth="350px"
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
