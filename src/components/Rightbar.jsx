import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      bgcolor="pink"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      RightSidebar
    </Box>
  );
};

export default Rightbar;
