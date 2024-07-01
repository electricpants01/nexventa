const productqr = {
  title: 'Validated',
  name: 'Validated',
  img: '../../../public/images/caja/check.png'
}
const NexQrAccept = () => {
  return (
    <div>
      <h3 className="newsletter-title-qr">{productqr.title}</h3>
      <img src={productqr.img} alt={productqr.name} className="banner-img" />
    </div>
  )
}

export default NexQrAccept
