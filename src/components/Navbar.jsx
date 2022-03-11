import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="navbarista flex-btw">
      <div className="flex-btw">
        <IoIosArrowBack className="icona" onClick={handleBack} />
      </div>
      <div>
        <HiOutlineMicrophone className="icona" />
        <IoSettingsOutline className="icona" />
      </div>
    </div>
  );
};

export default Navbar;
