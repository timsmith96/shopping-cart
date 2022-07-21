import '../styles/cartoptions.css';

const CartOptions = (props) => {
  const totalPrice = props.cartItems
    .reduce((a, b) => {
      return a + b.price * b.quantity;
    }, 0)
    .toFixed(2);

  return (
    <div className="options">
      <p className="total-price">Total price: £{totalPrice}</p>
      <button className="cart-option-btn">Checkout</button>
      <button
        className="cart-option-btn"
        onClick={() => {
          props.onClick();
        }}
      >
        Close
      </button>
    </div>
  );
};

export default CartOptions;
