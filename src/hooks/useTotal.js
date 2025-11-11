export const useTotal = (cart) => {
  return cart.reduce((acc, item) => acc + item.price, 0);
};

/*      ->
cart [{price: 10},     {price: 5},          { price: 2}]
      acc = 0           acc = 10                acc = 15
      item.price = 10   item.price = 5          item.price = 2
      acc = 10                acc = 15           acc = 17
*/
