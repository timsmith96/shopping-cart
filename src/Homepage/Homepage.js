import HomeContent from './HomeContent';
import Navbar from '../Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar cartItems={[]} />
      <HomeContent />
    </div>
  );
};

export default Homepage;
