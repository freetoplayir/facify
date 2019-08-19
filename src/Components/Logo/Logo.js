import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import logo from './logo.png';

const Logo = () => {
  return (
    <Tilt
      className='Tilt'
      options={{ max: 55 }}
      style={{ height: 250, width: 250 }}
    >
      <div className='Tilt-inner'>
        <img src={logo} alt='' />
      </div>
    </Tilt>
  );
};

export default Logo;
