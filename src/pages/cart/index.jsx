import { Box, Typography } from "@mui/material";
import useCartStore from "../../store/cart-store";
import EmptyCart from "./components/EmptyCart";
import ListArts from "./components/ListArts";
import ButtonsList from "./components/ButtonsList";

const Cart = () => {
  const items = useCartStore((state) => state.items);

  return (
    <Box>
      <Typography variant="h5">Carrito</Typography>
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <ListArts />
          <ButtonsList />
        </>
      )}
    </Box>
  );
};

export default Cart;
