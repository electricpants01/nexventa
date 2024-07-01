import React from 'react'

const productqr = {
  title: 'Error',
  name: 'Error',
  img: '../../../public/images/caja/error.png'
}
const NexQrFault = () => {
  return (
    <div>
      <h3 className="newsletter-title-qr">{productqr.title}</h3>
      <img src={productqr.img} alt={productqr.name} className="banner-img" />
    </div>
  )
}

export default NexQrFault
