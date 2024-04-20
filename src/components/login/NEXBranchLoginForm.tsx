const login = {
  name: 'KFC',
  img: '../../../public/images/cliente/Logo-KFC.png',
  branch: 'Tu nuevo sistema de venta de comida. Ordena fácil, disfruta más.'
}

const NEXlogin = () => {
  return (
    <div className="content">
      <h3>{login.name}</h3>
      <p>{login.branch}</p>
      <img src={login.img} alt={login.name} className="image" />
    </div>
  )
}

export default NEXlogin
