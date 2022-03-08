import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Loader from '../components/Loader';

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

  const fetchCountryData = async () => {
    const date = new Date().toISOString().split('T')[0];
    const req = await fetch(
      `https://api.covid19tracking.narrativa.com/api/${date}/country/${country}`,
    );
    const res = await req.json();
    const dateString = date.toString();
    const data = Object.values(res.dates[dateString].countries);
    if (data) setCountryDetails(data);
    console.log('data', data);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  console.log('after', countryDetails);

  return (
    <div>
      <IoIosArrowBack onClick={handleBack} />
      {countryDetails.length <= 0 ? (
        <Loader />
      ) : (
        countryDetails.map((info) => (
          <div key={info.id}>
            <h2>{info.name}</h2>
            <p>{info.id}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CountryDetail;
