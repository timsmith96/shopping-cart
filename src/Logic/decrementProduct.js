const decrementProduct = (cartItems, product) => {
  let updatedList = cartItems.map((item) => {
    if (item.product === product.product) {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    }
    return item;
  });
  return updatedList.filter((item) => {
    return item.quantity > 0;
  });
};

export default decrementProduct;
