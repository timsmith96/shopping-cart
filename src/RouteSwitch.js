import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Shop from './Shop/Shop';
import data from './data';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop data={data} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
