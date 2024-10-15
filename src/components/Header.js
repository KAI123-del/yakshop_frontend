import React from "react";
import { Typography } from "@mui/material";

const Header = () => (
  <header className="bg-blue-600 text-white py-4">
    <div className="container mx-auto">
      <Typography variant="h4" component="h1" align="center">
        YakShop Stock Management
      </Typography>
    </div>
  </header>
);

export default Header;
