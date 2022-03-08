import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { fetchCountryData } from '../redux/countries/country';

const CountryDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate('/');
  };

  const country = location.pathname
    .match(/[a-zA-Z0-9]/gm)
    .join('')
    .replaceAll('20', ' ');

  useEffect(() => {
    fetchCountryData(country);
  }, []);

  return (
    <div>
      <IoIosArrowBack onClick={handleBack} />
      <h2>CountryDetail</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi modi
        officia necessitatibus atque cumque error recusandae, reiciendis nam,
        architecto facere nihil explicabo voluptates, quos possimus sunt animi
        beatae veritatis quis quam quaerat aliquid minus distinctio corporis?
        Rerum ipsa totam consectetur iusto tenetur recusandae, illo ab natus
        velit magnam? Reprehenderit est repellat quasi laudantium aliquid
        officiis doloribus eos, sequi repudiandae.
      </p>
    </div>
  );
};

export default CountryDetail;
