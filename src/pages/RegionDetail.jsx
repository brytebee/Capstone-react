import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Loader from '../components/Loader';
import { date, dateString } from '../redux/countries/countryCodes';

const RegionDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [regionDetails, setRegionDetails] = useState([]);

  const handleBack = () => {
    navigate('/:country');
  };

  const country = location.pathname.match('/(.*)/')[1];
  console.log(country);

  const region = location.pathname
    .match(/[a-zA-Z0-9]/gm)
    .join('')
    .replaceAll('20', ' ');

  console.log('location', location, 'region', region);

  const fetchRegionData = async () => {
    const req = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/${country}/region/${region}`);
    const res = await req.json();
    const data = Object.values(res.dates[dateString].countries);
    if (data) setRegionDetails(data);
  };

  useEffect(() => {
    fetchRegionData();
  }, []);

  console.log(regionDetails);

  return (
    <div>
      <IoIosArrowBack onClick={handleBack} />
      {!regionDetails.length && <Loader />}
      {regionDetails.map((info) => (
        <div key={info.id}>
          {info.sub_regions.length > 0 ? (
            info.sub_regions.map((subRegion) => (
              <Link
                key={subRegion.id}
                to={{
                  pathname: `${subRegion.name}`,
                }}
              >
                <div>
                  <h5>{subRegion.name}</h5>
                  <p>{subRegion.today_confirmed}</p>
                </div>
              </Link>
            ))
          ) : (
            <div>
              <h2>{info.name}</h2>
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

export default RegionDetail;
