import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryDetail from './pages/CountryDetail';
import FourOhFour from './pages/FourOhFour';
import Home from './pages/Home';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:country" element={<CountryDetail />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  </div>
);

export default App;
