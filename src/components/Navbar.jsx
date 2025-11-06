import React from "react";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#A01F26" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "white" }}>
          Galería de Arte
        </Typography>
        <div>
          <IconButton sx={{ color: "white" }}>
            <Badge badgeContent={1} color="white">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
