import React, { useState } from 'react'
import NEXBranchOrderSideBarQrGenerate from './NEXBranchOrderSideBarQrGenerate'
import NEXBranchOrderSideBarQrAccept from './NEXBranchOrderSideBarQrAccept'
import NEXBranchOrderSideBarQrFault from './NEXBranchOrderSideBarQrFault'
import NEXBranchOrderSideBarQRData from './NEXBranchOrderSideBarQRData'

const NEXBranchOrderSideBarQR: React.FC = () => {
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
            {step === 1 && <NEXBranchOrderSideBarQrGenerate />}
            {step === 2 && <NEXBranchOrderSideBarQrAccept />}
            {step === 3 && <NEXBranchOrderSideBarQrFault />}
          </div>
          {(step === 1 || step === 2) && <NEXBranchOrderSideBarQRData />}
        </div>
      </div>
    </div>
  )
}

export default NEXBranchOrderSideBarQR
