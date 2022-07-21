import Navbar from '../Navbar';
import ProductsGrid from './ProductsGrid';
import ShoppingCart from '../Cart/ShoppingCart';
import { useState } from 'react';
import findItem from '../Logic/findItem';
import incrementProduct from '../Logic/incrementProduct';
import decrementProduct from '../Logic/decrementProduct';
import '../styles/shop.css';

const Shop = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const min = 0;
  const max = 100;

  const handleInputChange = (product, quantity) => {
    const found = findItem(cartItems, product);
    let updatedList = cartItems
      .map((item) => {
        if (item.product === found.product) {
          const newQuantity = Math.max(min, Math.min(max, Number(quantity)));
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      })
      .filter((item) => {
        return item.quantity > 0;
      });
    setCartItems(updatedList);
  };

  const handleIncrement = (product) => {
    const found = findItem(cartItems, product);
    let updatedList = incrementProduct(cartItems, found);
    setCartItems(updatedList);
  };

  const handleDecrement = (product) => {
    const found = findItem(cartItems, product);
    let updatedList = decrementProduct(cartItems, found);
    setCartItems(updatedList);
  };

  const handleAddToCart = (product, price) => {
    const found = findItem(cartItems, product);

    if (found) {
      let updatedList = incrementProduct(cartItems, found);
      setCartItems(updatedList);
    } else {
      const newProduct = {
        product: product,
        price: price,
        quantity: 1,
      };

      setCartItems([...cartItems, newProduct]);
    }
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <Navbar cartItems={cartItems} handleCartClick={handleCartClick} />
      <ProductsGrid
        data={props.data}
        cartItems={cartItems}
        handleIncrement={handleIncrement}
        handleAddToCart={handleAddToCart}
        handleDecrement={handleDecrement}
        showCart={showCart}
      />
      {showCart && (
        <ShoppingCart
          cartItems={cartItems}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleInputChange={handleInputChange}
          onClick={setShowCart}
        />
      )}
    </div>
  );
};

export default Shop;
