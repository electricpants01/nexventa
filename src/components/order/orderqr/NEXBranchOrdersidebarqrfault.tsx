import React from 'react'

const productqr = {
  name: 'qr',
  img: '../../../public/images/caja/error.png',
  client: 'Juan Pedro',
  amount: 200.0,
  currency: 'Bs'
}

const NEXproductqrfault = () => {
  return (
    <div id="qrfault" className="qrmodal">
      <div className="modal-content-qr">
        <button id="aperturarBtn" className="modal-close-btnfault" data-modal-close>
          <i className="bx bx-x"></i>
        </button>
        <div className="newsletter">
          <div className="newsletter-img">
            <h3 className="newsletter-title-qr">Error</h3>
            <img src={productqr.img} alt={productqr.name} className="banner-img" />
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default NEXproductqrfault
