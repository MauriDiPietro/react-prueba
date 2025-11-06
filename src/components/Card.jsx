import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { usePrice } from "../hooks/usePrice";
import { Link } from "react-router-dom";
import useCartStore from "../store/cart-store";

const CardArt = ({ art, button, isDetail }) => {
  const price = usePrice(art.objectID);
  const addItem = useCartStore((state) => state.addItem);

  const addCart = () => {
    addItem({
      id: art.objectID,
      title: art.title,
      image: art.primaryImageSmall || art.primaryImage,
      price,
    });
  };

  return (
    <Card sx={{ width: isDetail ? "100%" : 370 }}>
      <CardMedia
        component="img"
        sx={{ width: "100%", height: isDetail ? 500 : 220 }}
        image={art.primaryImageSmall || art.primaryImage}
        alt={art.title}
      />
      <CardContent>
        <Typography variant="subtitle1">{art.title || ""}</Typography>
        <Typography variant="body2" color="text.secondary">
          {art.artistDisplayName || ""}
        </Typography>
        <Typography variant="h6">${price}</Typography>
      </CardContent>
      <CardActions>
        {button && (
          <Button
            sx={{
              color: "#A01F26",
              ":hover": { backgroundColor: "#A01F26", color: "white" },
            }}
            component={Link}
            to={`/art/${art.objectID}`}
          >
            Ver detalle
          </Button>
        )}
        <Button
          onClick={addCart}
          sx={{
            color: "#A01F26",
            ":hover": { backgroundColor: "#A01F26", color: "white" },
          }}
        >
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardArt;
