const findItem = (cartItems, productName) => {
  const found = cartItems.find((item) => item.product === productName);
  return found;
};

export default findItem;
