const incrementProduct = (cartItems, product) => {
  let updatedList = cartItems.map((item) => {
    if (item.product === product.product) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  return updatedList;
};

export default incrementProduct;
