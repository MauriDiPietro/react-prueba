import { Button, Stack, Typography } from "@mui/material";
import useCartStore from "../../../store/cart-store";
import { useTotal } from "../../../hooks/useTotal";
import { useNavigate } from "react-router-dom";

const ButtonsList = () => {
  const items = useCartStore((state) => state.items);
  const clear = useCartStore((state) => state.clear);
  const total = useTotal(items);
  const navigate = useNavigate();
  return (
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
  );
};

export default ButtonsList;
