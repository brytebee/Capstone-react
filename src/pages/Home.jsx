import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesFromAPI } from '../redux/countries/countries';

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountriesFromAPI());
  }, []);
  return (
    <div>
      {allCountries.map((country) => (
        <p>{country}</p>
      ))}
    </div>
  );
};

export default Home;
