import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import Loader from '../components/Loader';
import { getCountriesFromAPI } from '../redux/countries/countries';
import countryMapSrc from '../redux/countries/countryCodes';

const map = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/world/vector.svg';
let src = '';

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const [filterCountries, setFilteredCountries] = useState(allCountries);

  const handleSearch = (e) => {
    const typedCountry = e.target.value;
    const filteredCountry = allCountries
      .filter((country) => country.name.toLowerCase()
        .startsWith(typedCountry.toLowerCase()));
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
      <div className="topper flex-btw">
        <div><img src={map} alt="world map" /></div>
        <div>
          <h1>All countries</h1>
          <p>{new Intl.NumberFormat().format(total)}</p>
        </div>
      </div>
      <div className="sub-header flex-btw">
        <div>STATS BY COUNTRIES</div>
        <input type="text" placeholder="Enter Country" onChange={handleSearch} />
      </div>
      <div className="main-data">
        {!allCountries.length && <Loader />}
        {filterCountries.length > 0
          ? filterCountries.slice(0, 10).map((country) => {
            src = countryMapSrc(country.name);
            return (
              <Link
                key={country.id}
                to={{
                  pathname: `${country.name}`,
                }}
              >
                <div className="cardra">
                  <img src={src} alt={`${country.name} map`} />
                  <BsArrowRightCircle />
                  <h5>{country.name}</h5>
                  <p>{country.today_confirmed}</p>
                </div>
              </Link>
            );
          })
          : allCountries.slice(0, 10).map((country) => {
            src = countryMapSrc(country.name);
            return (
              <Link
                key={country.id}
                to={{
                  pathname: `${country.name}`,
                }}
              >
                <div className="cardra">
                  <img src={src} alt={`${country.name} map`} />
                  <BsArrowRightCircle />
                  <h5>{country.name}</h5>
                  <p>{country.today_confirmed}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
