import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';

const Navbar = () => (
  <div className="navbarista flex-btw">
    <div className="flex-btw">
      <IoIosArrowBack />
    </div>
    <div>
      <HiOutlineMicrophone />
      <IoSettingsOutline />
    </div>
  </div>
);

export default Navbar;
