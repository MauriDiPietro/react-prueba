import useCartStore from "../../../store/cart-store";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const ListArts = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
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
          <ListItemText primary={item.title} secondary={`$${item.price}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListArts;
