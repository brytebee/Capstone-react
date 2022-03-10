import React from 'react';

const img = 'https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif';

const FourOhFour = () => (
  <div>
    <h2>Oh Oh!</h2>
    <p>The page you are trying to access is unavailable at the moment...</p>
    <img className="four-oh-four" src={img} alt="Error dispaly" />
  </div>
);

export default FourOhFour;
