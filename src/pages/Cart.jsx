import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useCartStore from "../store/cart-store";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clear = useCartStore((state) => state.clear);
  const total = items.reduce((acc, item) => acc + item.price, 0);
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h5">Carrito</Typography>
      {items.length === 0 ? (
        <Box>El carrito está vacío</Box>
      ) : (
        <>
          <List>
            {items.map((item) => (
              <ListItem
                secondaryAction={
                  <IconButton onClick={() => removeItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar src={item.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={`$${item.price}`}
                />
              </ListItem>
            ))}
          </List>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Total: ${total}</Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                clear();
                navigate("/");
              }}
            >
              Confirmar compra
            </Button>
            <Button variant="contained" color="error" onClick={clear}>
              Vaciar carrito
            </Button>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Cart;
