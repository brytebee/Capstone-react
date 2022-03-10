import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Loader from '../components/Loader';
import countryMapSrc, { date, dateString } from '../redux/countries/countryCodes';

const CountryDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [countryDetails, setCountryDetails] = useState([]);

  const handleBack = () => {
    navigate('/');
  };

  const country = location.pathname
    .match(/[a-zA-Z0-9]/gm)
    .join('')
    .replaceAll('20', ' ');

  const src = countryMapSrc(country);

  const fetchCountryData = async () => {
    const req = await fetch(
      `https://api.covid19tracking.narrativa.com/api/${date}/country/${country}`,
    );
    const res = await req.json();
    const data = Object.values(res.dates[dateString].countries);
    if (data) setCountryDetails(data);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div>
      <IoIosArrowBack onClick={handleBack} />
      {!countryDetails.length && <Loader />}
      {countryDetails.map((info) => (
        <div key={info.id}>
          {info.regions.length > 0 ? (
            info.regions.map((region) => (
              <Link
                key={region.id}
                to={{
                  pathname: `${region.name}`,
                }}
              >
                <div>
                  <h5>{region.name}</h5>
                  <p>{region.today_confirmed}</p>
                </div>
              </Link>
            ))
          ) : (
            <div>
              <h2>{info.name}</h2>
              <img src={src} alt={`${info.name} map`} />
              <p>{info.date}</p>
              <p>{`Today Confirmed: ${info.today_confirmed}`}</p>
              <p>{`Today Revovered: ${info.today_recovered}`}</p>
              <p>{`Today Deaths: ${info.today_deaths}`}</p>
              <p>{`Today New Confirmed: ${info.today_new_confirmed}`}</p>
              <p>{`Today New Deaths: ${info.today_new_deaths}`}</p>
              <p>{`Today New Confirmed: ${info.today_new_open_cases}`}</p>
              <p>{`Source: ${info.source}`}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountryDetail;
