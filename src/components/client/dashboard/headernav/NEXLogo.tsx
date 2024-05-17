const logo = {
  name: 'KFC',
  img: '../../../public/images/cliente/Logo-KFC.png'
}
const NEXHeaderLogo = () => {
  return (
    <a href="#" className="header-logo">
      <img src={logo.img} alt={logo.name} width="70" height="50" />
    </a>
    
  )
}

export default NEXHeaderLogo
