import React from 'react'

const productqr = {
  title: 'Validado',
  name: 'Validado',
  img: '../../../public/images/caja/check.png'
}
const NEXOrderSideBarQrAccept = () => {
  return (
    <div>
      <h3 className="newsletter-title-qr">{productqr.title}</h3>
      <img src={productqr.img} alt={productqr.name} className="banner-img" />
    </div>
  )
}

export default NEXOrderSideBarQrAccept
