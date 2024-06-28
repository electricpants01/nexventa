const NEXUserSeller = () => {
  return (
    <div>
      <div className="relative start-0 rounded-lg border border-gray-300 bg-white p-4">
        <h2 className="sidebar-title">Datos del cliente</h2>
        <br />
        <div className="sidebar-top">
          <p className="sidebar-item-title">
            <p className="bx bx-user-plus"></p>
            Cliente
          </p>
          <button
            data-modal-target="user-modal"
            data-modal-toggle="user-modal"
            className="block rounded-lg bg-orange-600 px-8 py-1 text-center text-sm font-medium text-white hover:bg-black focus:outline-none dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            type="button"
          >
            Seleccionar
          </button>
        </div>
        <div className="sidebar-top">
          <p className="sidebar-item-title">
            <p className="bx bx-news"></p>
            Ci:
          </p>
          <button
            className="block rounded-lg bg-orange-600 px-8 py-1 text-center text-sm font-medium text-white hover:bg-black focus:outline-none dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            type="button"
          >
            Seleccionar
          </button>
        </div>
        <div className="sidebar-top">
          <p className="sidebar-item-title">
            <p className="bx bxs-calculator"></p>
            Es para :
          </p>
          <div className="block rounded-lg bg-orange-600 px-1 text-center text-sm text-white hover:bg-black focus:outline-none dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            <div className="select-wrapper">
              <select id="mesallevar" className="w-full rounded-lg border px-1 py-4">
                <option value="Mesa" data-icon="fas fa-money-bill-wave">
                  {' '}
                  Mesa
                </option>
                <option value="LLevar" data-icon="fas fa-credit-card">
                  {' '}
                  LLevar
                </option>
                <option value="Otro" data-icon="fas fa-qrcode">
                  {' '}
                  Otro
                </option>
              </select>
              <i className="selected-icon-1 fas fa-money-bill-wave"></i>
            </div>
          </div>
        </div>
        <div className="sidebar-top">
          <p className="sidebar-item-title">
            <p className="bx bx-money-withdraw"></p>
            Pagor por :
          </p>
          <div className="rounded-lg bg-orange-600 text-center text-sm text-white hover:bg-black focus:outline-none dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            <div className="select-wrapper">
              <select id="tipopagos" className="w-full rounded-lg border px-1 py-4">
                <option value="Efectivo" data-icon="fas fa-money-bill-wave">
                  {' '}
                  Efectivo
                </option>
                <option value="Qr" data-icon="fas fa-qrcode">
                  {' '}
                  Qr
                </option>
                <option value="Tarjeta" data-icon="fas fa-credit-card">
                  {' '}
                  Tarjeta
                </option>
              </select>
              <i className="selected-icon fas fa-money-bill-wave"></i>
            </div>
          </div>
        </div>
        <div className="sidebar-top">
          <p className="sidebar-item-title">Sub Total</p>
          <p className="sidebar-item-title">10 Bs</p>
        </div>
        <div className="sidebar-top">
          <p className="sidebar-item-title">Total</p>
          <p className="sidebar-item-title" id="cart-total">
            Total: $0
          </p>
        </div>
        <div>
          <div className="sidebar-top">
            <p className="sidebar-item-title-f">
              <p className="bx bx-badge-check"></p>
              ¿Con factura?:
            </p>
            <div className="sidebar-item-title-top">
              <p className="sidebar-item-title-p">Sin Factura</p>
              <p className="switch">
                <input type="checkbox" id="factura" />
                <span className="slider"></span>
              </p>
              <p className="sidebar-item-title-p">Sin Factura</p>
            </div>
          </div>
          <div className="center-div">
            <button className="banner-btn">
              <i className="fas fa-shopping-cart"></i> Realizar Pedido
            </button>
            <button id="openModalBtnQR" className="banner-btn-qr" disabled>
              <i className="fas fa-qrcode"></i> Generar QR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NEXUserSeller
