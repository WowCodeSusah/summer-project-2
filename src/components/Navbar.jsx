import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Navbar = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
      setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div>
      <div className='navbar-main'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Calendar</Link>
          </li>
          <li>
            <Link to="/about">Group</Link>
          </li>
          <li>
            <Link to="/about">Setting</Link>
          </li>
        </ul>
        <div className='hamburgerIcon' onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen}/>
        </div>
      </div>

      <style jsx>
        {`
          .navbar-main{
              width: 100%;
              height: 50px;
          }

          .navbar-main ul{
              display: flex;
              flex-wrap: wrap;
              float: right;
              margin: 20 0px;
              padding: 0 20px;
          }

          .navbar-main ul li{
              list-style-type: none;
              padding-right: 10px;
          }

          .hamburger{
              display: none;
          }

          @media (max-width: 767px) {
              .hamburger{
                  display: fixed;
                  padding-top: 10px;
                  margin-left: 10px;
                  z-index: 10;
              }
          }
        `}
      </style>

    </div>
  );
};

export default Navbar;