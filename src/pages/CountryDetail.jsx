import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import countryMapSrc, { date, dateString } from '../redux/countries/countryCodes';

const CountryDetail = () => {
  const location = useLocation();

  const [countryDetails, setCountryDetails] = useState([]);

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
    <div className="country-details">
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
              <h2 className="country-name">{info.name}</h2>
              <div className="topper flex-btw country-details-top">
                <img className="country-map" src={src} alt={`${info.name} map`} />
                <div>
                  <h6>{`${info.name} Stats`}</h6>
                  <p>{info.date}</p>
                  <p>{info.today_confirmed}</p>
                </div>
              </div>
              <div className="sub-header">
                <div className="text-center">STATS</div>
              </div>
              <div className="stats">
                <p className="flex-btw">
                  <span>Today Revovered: </span>
                  <span>{info.today_recovered}</span>
                </p>
                <p className="flex-btw">
                  <span>Today Deaths: </span>
                  <span>{info.today_deaths}</span>
                </p>
                <p className="flex-btw">
                  <span>Today New Confirmed: </span>
                  <span>{info.today_new_confirmed}</span>
                </p>
                <p className="flex-btw">
                  <span>Today New Deaths: </span>
                  <span>{info.today_new_deaths}</span>
                </p>
                <p className="flex-btw">
                  <span>Today New Confirmed: </span>
                  <span>{info.today_new_open_cases}</span>
                </p>
                <p className="source">{`Source: ${info.source}`}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountryDetail;
