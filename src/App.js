import { Route, Routes } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import CountryDetail from './pages/CountryDetail';
import Home from './pages/Home';
import RegionDetail from './pages/RegionDetail';
import { navbarDate } from './redux/countries/countryCodes';

const App = () => (
  <div>
    <div className="navbarista flex-btw">
      <div>
        <IoIosArrowBack />
        <span>{navbarDate.getFullYear()}</span>
      </div>
      <div>
        <HiOutlineMicrophone />
        <IoSettingsOutline />
      </div>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:country" element={<CountryDetail />} />
      <Route path="/:country/:region" element={<RegionDetail />} />
    </Routes>
  </div>
);

export default App;
