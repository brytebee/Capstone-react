import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryDetail from './pages/CountryDetail';
import Home from './pages/Home';
import RegionDetail from './pages/RegionDetail';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:country" element={<CountryDetail />} />
      <Route path="/:country/:region" element={<RegionDetail />} />
    </Routes>
  </div>
);

export default App;
