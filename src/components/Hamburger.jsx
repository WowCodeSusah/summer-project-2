import React from 'react';

const Hamburger = () => {
  return (
    <>
      <div className='hamburger-main'>
        <div className='hamburger-lines-1'></div>
        <div className='hamburger-lines-2'></div>
        <div className='hamburger-lines-3'></div>
      </div>

      <style jsx>
        {`
            .hamburger-lines-1{
                width: 2rem;
                height: 0.25rem;
                border-radius: 10px;
                background-color: white;
                transform-origin: 1px;
                transition: all 0.3s linear;
            }

            .hamburger-lines-2{
                width: 2rem;
                height: 0.25rem;
                border-radius: 10px;
                background-color: white;
                transform-origin: 1px;
                transition: all 0.3s linear;
            }

            .hamburger-lines-3{
                width: 2rem;
                height: 0.25rem;
                border-radius: 10px;
                background-color: white;
                transform-origin: 1px;
                transition: all 0.3s linear;
            }
        `}
      </style>
    </>
  );
};

export default Hamburger;