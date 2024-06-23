import React from 'react';

const logo = {
  name: 'KFC',
  imgLogo: '../../../../../public/images/cliente/Logo-KFC.png',
};

const NEXHeaderLogo: React.FC = () => {
  return (
    <>
      <a href="/" className="header-logo">
        <img
          src={logo.imgLogo}
          alt={logo.name}
          className="hidden md:block"
          width="70"
          height="50"
        />
      </a>
    </>
  );
};

export default NEXHeaderLogo;
