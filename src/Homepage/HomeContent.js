import '../styles/homepage.css';

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
        <a className="shop-now-btn" href="/shop">
          Shop now
        </a>
      </div>
    </main>
  );
};

export default HomeContent;
