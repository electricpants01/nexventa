const productqr = {
  title: 'Error',
  name: 'Error',
  img: '../../../public/images/caja/error.png'
}
const NEXOrderSideBarQrFault = () => {
  return (
    <div>
      <h3 className="newsletter-title-qr">{productqr.title}</h3>
      <img src={productqr.img} alt={productqr.name} className="banner-img" />
    </div>
  )
}

export default NEXOrderSideBarQrFault
