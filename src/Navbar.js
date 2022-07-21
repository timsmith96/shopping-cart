import './styles/navbar.css';

const Navbar = ({ cartItems, handleCartClick }) => {
  const totalItems = cartItems.reduce((a, b) => {
    return a + b.quantity;
  }, 0);
  return (
    <header className="navbar">
      <img
        className="navbar-icon"
        src={require('./img/navbar-icon.png')}
        alt="penguin"
      />{' '}
      <h1 className="title">
        <a href="/">Animal shop</a>
      </h1>
      <ul className="nav-links-list">
        <li className="nav-link">
          <a href="/">Home</a>{' '}
        </li>
        <li className="nav-link">
          {' '}
          <a href="/shop">Products</a>{' '}
        </li>
        {cartItems.length > 0 && (
          <div className="cart-icon-container" onClick={handleCartClick}>
            <li>
              <img
                className="cart-icon"
                src={require('./img/shopping-cart.png')}
                alt=""
              />
            </li>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                height: '25px',
                width: '25px',
                top: '-10px',
                right: '-10px',
                borderRadius: '50%',
                border: '1px solid #000',
              }}
            >
              {totalItems}
            </div>
          </div>
        )}
      </ul>
    </header>
  );
};

export default Navbar;
