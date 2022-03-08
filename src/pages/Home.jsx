import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { getCountriesFromAPI } from '../redux/countries/countries';

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  let total = 0;
  allCountries.forEach((counrty) => {
    total += counrty.today_confirmed;
  });

  useEffect(() => {
    dispatch(getCountriesFromAPI());
  }, []);

  return (
    <div>
      {' '}
      <h1>All countries</h1>
      <p>{total}</p>
      {allCountries.length <= 0 ? (
        <Loader />
      ) : (
        allCountries.map((country) => (
          <Link
            key={country.id}
            to={{
              pathname: `${country.name}`,
              state: country,
              standard: 'double',
            }}
          >
            <div>
              <h5>{country.name}</h5>
              <p>{country.today_confirmed}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Home;
