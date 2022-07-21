import '../styles/homepage.css';
import { Link } from 'react-router-dom';

const HomeContent = () => {
  return (
    <main className="main-content-container">
      <div class="main-content">
        <h1 className="title">Welcome!</h1>
        <img
          className="all-pigs-img"
          src={require('../img/home-img.png')}
          alt=""
        />
        <Link className="shop-now-btn" to="/shop">
          Shop now
        </Link>
      </div>
    </main>
  );
};

export default HomeContent;
