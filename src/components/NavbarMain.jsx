import React from 'react';
import Title from './Title';

function NavbarMain() {
  return (
    <div>
        <div className='navBarMainContainer'>
            <Title />
            <div className='navBarSecondaryContainer'>
                <div className='navBarSecondaryText'>Sign Up</div>
                <div className='navBarSecondaryText'>Log In</div>
            </div>
        </div>
        <style jsx>
            {`
                .navBarMainContainer {
                    background-color: white;
                    display: grid;
                    grid-template-columns: calc(100% - 150px) 150px;
                    padding-top: 30px;
                    padding-bottom: 30px;
                    padding-left: 20px;
                    padding-right: 20px;
                }

                .navBarSecondaryContainer {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    text-align: right;
                }

                .navBarSecondaryText {
                    font-family: "Inter", sans-serif;
                }

            `}
        </style>
    </div>
  );
};

export default NavbarMain;