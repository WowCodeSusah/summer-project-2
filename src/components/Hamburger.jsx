import React from 'react';

const Hamburger = ({ isOpen }) => {
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
                transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
            }

            .hamburger-lines-2{
                transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${ isOpen ? 0 : 1}
            }

            .hamburger-lines-3{
                transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
            }
        `}
      </style>
    </>
  );
};

export default Hamburger;