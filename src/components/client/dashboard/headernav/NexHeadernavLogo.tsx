import React from 'react'

const logo = {
  name: 'KFC',
  imgLogo: '../../../../../public/images/cliente/Logo-KFC.png'
}

const NexHeadernavLogo: React.FC = () => {
  return (
    <p className="header-logo">
      <img src={logo.imgLogo} alt={logo.name} className="hidden md:block" width="70" height="50" />
    </p>
  )
}

export default NexHeadernavLogo
