import IncrementBtn from '../IncrementBtn';
import DecrementBtn from '../DecrementBtn';
import '../styles/product.css';

const Product = ({
  product,
  imgUrl,
  price,
  quantity,
  handleAddToCart,
  handleIncrement,
  handleDecrement,
}) => {
  let content;

  if (quantity > 0) {
    content = (
      <p>
        Quantity: {quantity}
        <DecrementBtn handleDecrement={handleDecrement} product={product} />
        <IncrementBtn handleIncrement={handleIncrement} product={product} />
      </p>
    );
  } else {
    content = (
      <button
        value={product}
        className="cart-btn"
        onClick={(e) => handleAddToCart(e.target.value, price)}
      >
        Add to cart
      </button>
    );
  }

  return (
    <div className="product">
      <div className="img-container">
        <img src={require(`../img/${imgUrl}`)} alt={product} />
      </div>
      <p>{product}</p>
      <p>Price: £{price}</p>
      {content}
    </div>
  );
};

export default Product;
