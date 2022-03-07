import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { getCountriesFromAPI } from '../redux/countries/countries';

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getCountriesFromAPI());
  }, []);

  return (
    <div>
      {' '}
      <h1>All countries</h1>
      {/* <p>{total}</p> */}
      {allCountries.length <= 0 ? (
        <div className="spinner">
          <ScaleLoader color="#4369B2" />
        </div>
      ) : (
        allCountries.map((country) => (
          <div key={country.id}>
            <h5>{country.name}</h5>
            <p>{country.today_confirmed}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
