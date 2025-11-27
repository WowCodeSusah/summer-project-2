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
          <div>WEBNAME</div>
          <li onClick={toggleHamburger}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleHamburger}>
            <Link to="/about">Calendar</Link>
          </li>
          <li onClick={toggleHamburger}>
            <Link to="/about">Group</Link>
          </li>
          <li onClick={toggleHamburger}>
            <Link to="/about">Setting</Link>
          </li>
        </ul>
        <div className='nav-title-section' onClick={toggleHamburger}>
            <Hamburger />
            <div>WEBNAME</div>
        </div>
      </div>

      <div className='navbar-cover' onClick={toggleHamburger}></div>

      <style jsx>
        {`
          .navbar-cover{
              display: none;
          }

          .navbar-main{
              width: 100%;
              height: 50px;
              background-color: black;
              padding-bottom: 10px;
          }

          .navbar-main ul{
              display: flex;
              background-color: none;
              flex-wrap: wrap;
              float: right;
              margin: 20 0px;
              padding: 0 25px;
          }

          .navbar-main ul li {
              list-style-type: none;
          }

          .navbar-main ul li a{
              text-decoration: none;
              color: white;
              padding-right: 10px;
          }

          .hamburger-main{
              width: 2rem;
              height: 2rem;
              display: flex;
              justify-content: space-around;
              flex-flow: column nowrap;
              display: none;
          }

          @media (max-width: 767px) {
              .hamburger-main{
                  display: flex;
                  padding-top: 10px;
                  margin-left: 10px;
                  z-index: 10;
              }

              .navbar-main ul{
                  display: ${hamburgerOpen ? 'inline' : 'none'};
                  background-color: white;
                  border-top-right-radius: 50px;
                  border-bottom-right-radius: 50px;
                  height: 100vh;
                  width: 60vw;
                  position: absolute;
                  z-index: 20;
                  margin-block-start: 0;
              }

              .navbar-main ul li a{
                  text-decoration: none;
                  color: black;
                  padding-right: 10px;
              }

              .navbar-cover{
                  display: ${hamburgerOpen ? 'inline' : 'none'};
                  background-color: black;
                  opacity: 0.5;
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100vw;
                  height: 100vh;
                  z-index: 10;
              }
          }
        `}
      </style>

    </div>
  );
};

export default Navbar;