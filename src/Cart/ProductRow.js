import '../styles/productrow.css';
import DecrementBtn from '../DecrementBtn';
import IncrementBtn from '../IncrementBtn';

const ProductRow = (props) => {
  return (
    <div className="product-row">
      <p>Product: {props.product}</p>
      <p>Price: £{props.price}</p>
      <div className="container">
        <label htmlFor="quantity">
          Quantity:
          <input
            id="quantity"
            type="number"
            value={props.quantity}
            onChange={(e) => {
              props.handleInputChange(props.product, e.target.value);
            }}
          />
        </label>
        <DecrementBtn
          handleDecrement={props.handleDecrement}
          product={props.product}
        />
        <IncrementBtn
          handleIncrement={props.handleIncrement}
          product={props.product}
        />
      </div>
    </div>
  );
};

export default ProductRow;
