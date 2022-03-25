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
        <IoIosArrowBack onClick={handleBack} />
      </div>
      <div>
        <HiOutlineMicrophone />
        <IoSettingsOutline />
      </div>
    </div>
  );
};

export default Navbar;
