import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesFromAPI } from '../redux/countries/countries';

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  // const total = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountriesFromAPI());
  }, []);

  return (
    <div>
      {' '}
      <h1>All countries</h1>
      {/* <p>{total}</p> */}
      {allCountries.map((country) => (
        <div key={country.id}>
          <h5>{country.name}</h5>
          <p>{country.today_confirmed}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
