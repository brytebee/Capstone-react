import { Route, Routes } from 'react-router-dom';
import CountryDetail from './pages/CountryDetail';
import Home from './pages/Home';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:country" element={<CountryDetail />} />
    </Routes>
  </div>
);

export default App;
