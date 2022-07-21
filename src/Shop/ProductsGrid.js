import Product from './Product';
import '../styles/productsgrid.css';
import findItem from '../Logic/findItem';

const ProductsGrid = (props) => {
  const products = props.data.map((product) => {
    const found = findItem(props.cartItems, product.product);
    return (
      <Product
        product={product.product}
        price={product.price}
        quantity={found ? found.quantity : 0}
        key={product.product}
        imgUrl={product.imgUrl}
        handleIncrement={props.handleIncrement}
        handleAddToCart={props.handleAddToCart}
        handleDecrement={props.handleDecrement}
      />
    );
  });

  return (
    <main className={'products-grid ' + (props.showCart ? 'hide' : 'show')}>
      <h2 className="products-title">Products</h2>
      <div className="products-container">{products}</div>
    </main>
  );
};

export default ProductsGrid;
