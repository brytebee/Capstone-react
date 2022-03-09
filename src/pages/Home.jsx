import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { getCountriesFromAPI } from '../redux/countries/countries';

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  console.log(allCountries);
  const [filterCountries, setFilteredCountries] = useState(allCountries);

  const handleSearch = (e) => {
    const typedCountry = e.target.value;
    const filteredCountry = allCountries.filter((country) => country.name
      .toLowerCase().startsWith(typedCountry.toLowerCase()));
    setFilteredCountries(filteredCountry);
  };

  let total = 0;
  allCountries.forEach((counrty) => {
    total += counrty.today_confirmed;
  });

  useEffect(() => {
    dispatch(getCountriesFromAPI());
  }, []);

  return (
    <div>
      <h1>All countries</h1>
      <p>{new Intl.NumberFormat().format(total)}</p>
      <input type="text" placeholder="Enter Country" onChange={handleSearch} />
      {!allCountries.length && <Loader />}
      {filterCountries.length > 0 ? filterCountries.map((country) => (
        <Link
          key={country.id}
          to={{
            pathname: `${country.name}`,
          }}
        >
          <div>
            <h5>{country.name}</h5>
            <p>{country.today_confirmed}</p>
          </div>
        </Link>
      )) : allCountries.map((country) => (
        <Link
          key={country.id}
          to={{
            pathname: `${country.name}`,
          }}
        >
          <div>
            <h5>{country.name}</h5>
            <p>{country.today_confirmed}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
