import React from 'react'

const productqr = {
  title: 'Generar Qr',
  name: 'Generar Qr',
  img: '../../../public/images/caja/qr.jpg'
}
const NEXBranchOrderSideBarQrFault = () => {
  return (
    <div>
      <h3 className="newsletter-title-qr">{productqr.title} </h3>
      <img src={productqr.img} alt={productqr.name} className="banner-img" />
    </div>
  )
}

export default NEXBranchOrderSideBarQrFault
