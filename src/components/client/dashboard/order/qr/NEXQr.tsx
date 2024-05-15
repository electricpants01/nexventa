import React, { useState } from 'react'
import NEXOrderSideBarQrGenerate from './NEXQrGenerate'
import NEXOrderSideBarQrAccept from './NEXQrAccept'
import NEXOrderSideBarQrFault from './NEXQrFault'
import NEXOrderSideBarQRData from './NEXQRData'

const NEXOrderSideBarQR: React.FC = () => {
  const [step, setStep] = useState(1)
  const handleNextStep = () => {
    setStep((prevStep) => {
      if (prevStep < 3) {
        return prevStep + 1
      }
      return prevStep
    })
  }
  return (
    <div id="qrModal" className="qrmodal">
      <div className="modal-content-qr">
        <button id="aperturarBtn" className="modal-close-btnQr" data-modal-close>
          <i className="bx bx-x"></i>
        </button>
        <div className="newsletter">
          <div className="newsletter-img">
            {step === 1 && <NEXOrderSideBarQrGenerate />}
            {step === 2 && <NEXOrderSideBarQrAccept />}
            {step === 3 && <NEXOrderSideBarQrFault />}
          </div>
          {(step === 1 || step === 2) && <NEXOrderSideBarQRData />}
        </div>
      </div>
    </div>
  )
}

export default NEXOrderSideBarQR
