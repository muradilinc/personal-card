import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-black text-white p-4">
      <div className="container mx-auto grid items-center grid-cols-3 gap-2">
        <div className="col-span-1">
          <h1 className="text-3xl">
            <NavLink to='/'>Muradil inc</NavLink>
          </h1>
        </div>
        <div className="col-span-2 text-2xl">
          <ul className="flex justify-end">
            <li className="mr-3"><NavLink className="nav-link" to='/'>Home</NavLink></li>
            <li className="mr-3"><NavLink className="nav-link" to='/about-me'>About me</NavLink></li>
            <li><NavLink className="nav-link" to='/contact-me'>Contact me</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;