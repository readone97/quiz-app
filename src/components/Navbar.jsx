// src/components/Navbar.js

import React, { useState } from 'react';
import {MenuIcon, XIcon } from '@heroicons/react/outline';


const Navbar = () => {

  const [isOpen, setIsOpen] =useState(false);
  const toggleMenu =() =>{
    setIsOpen(!isOpen);
  };


  return (
    <nav className='bg-white-400 p-4 text-teal-900 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <a href='' className='text-2xl font-bold'>Yarbaiwa Charity Foundation</a>

        {/** desktop links */}
        <div className='hidden md:flex space-x-6'>
          <a href='#' className='hover:border-b-2 border-solid border-teal-900'>Our Impact</a>
          
          <a href='#' className='hover:border-b-2 border-solid border-teal-900'>Contact Us</a>
          
          <a href='#' className='hover:border-b-2 border-solid border-teal-900'>About Us</a>
        
        </div>

           {/** hamburger icon for links */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu}>
              {isOpen ? <XIcon className="h-12 w-6"/> : <MenuIcon className="h-6 w-6"/>}
            </button>
          </div>
        
        </div>

        {/** mobile menu */}

        {isOpen && (
          <div className='md:hidden bg-white flex flex-col'>
            <a href='#' className='cursor-pointer'>Our impact</a>
            <a href='#' className='cursor-pointer'>Contact Us</a>
            <a href='#' className='cursor-pointer'>About Us</a>
          </div>
        )}
    </nav>

  );
};

export default Navbar;
