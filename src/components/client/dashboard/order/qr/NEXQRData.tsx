import React from 'react'

const productqr = {
  client: 'Juan Pedro',
  amount: 200.0,
  currency: 'Bs'
}
const NexQRData = () => {
  return (
    <form id="cajaForm">
      <div className="newsletter-header">
        <p className="newsletter-desc-qr">
          <b>Cliente: {productqr.client}</b>
          <br />
          <b>
            Monto:{productqr.amount}
            {productqr.currency}{' '}
          </b>
        </p>
      </div>
    </form>
  )
}

export default NexQRData
