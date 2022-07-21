import ProductRow from './ProductRow';
import CartOptions from './CartOptions';
import '../styles/shoppingcart.css';

const ShoppingCart = (props) => {
  const productRows = props.cartItems.map((cartItem) => {
    return (
      <ProductRow
        product={cartItem.product}
        price={cartItem.price}
        quantity={cartItem.quantity}
        key={cartItem.product}
        handleIncrement={props.handleIncrement}
        handleDecrement={props.handleDecrement}
        handleInputChange={props.handleInputChange}
      />
    );
  });

  return (
    <div className="shopping-cart">
      <h2 className="title">Shopping Cart</h2>
      {props.cartItems.length === 0 ? (
        <p>Your cart is empty - add some animals!</p>
      ) : (
        <ul className="rows-container">{productRows}</ul>
      )}
      <CartOptions cartItems={props.cartItems} onClick={props.onClick} />
    </div>
  );
};

export default ShoppingCart;
