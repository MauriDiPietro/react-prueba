import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCartStore from "../store/cart-store";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useCartStore((state) => state.items);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#A01F26" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "white", textDecoration: "none"}} component={Link} to="/">
          Galería de Arte
        </Typography>
        <div>
          <IconButton sx={{ color: "white" }} component={Link} to="/cart">
            <Badge badgeContent={items.length} color="white">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
