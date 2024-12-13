// src/components/Navbar.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter,faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';




const Footer = () => {

  return (
    <footer className='bg-teal-900 py-8'>
    <div className='flex flex-start  py-4 md: space-x-6 justify-center align-center'>
      <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
        <FontAwesomeIcon icon={faFacebook} className='h-6 w-6 text-white hover:text-blue-800 transition-colors duration-200' />
      </a>
      <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
        <FontAwesomeIcon icon={faTwitter} className='h-6 w-6 text-white hover:text-blue-800 transition-colors duration-200' />
      </a>
      <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
        <FontAwesomeIcon icon={faLinkedinIn} className='h-6 w-6 text-white hover:text-blue-800 transition-colors duration-200' />
      </a>
      <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
        <FontAwesomeIcon icon={faInstagram} className='h-6 w-6 text-white hover:text-blue-800 transition-colors duration-200' />
      </a>
    </div>

   
      <p className='flex text-white justify-center align-center mt-5'>&copy; 2024 TechVille Solutions, lateefolayinka400@gmail.com . All rights reserved.</p>
  </footer>
  
        
        

  );
};

export default Footer;
