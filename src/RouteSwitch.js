import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Shop from './Shop/Shop';
import data from './data';

const RouteSwitch = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop data={data} />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
