const usercreate = {
  name: 'cart ',
  img: '../../../public/images/banner/banner.jpg',
  title: '30% Off',
  subtitle: 'Comida de fitness',
  subtitle2: 'a partir de',
  subtitle3: '20.00',
  subtitle4: 'Bs'
}
const NEXBranchOrderSideBarUserData = () => {
  return (
    <div>
      <h2 className="sidebar-title">Datos del cliente</h2>
      <br />
      <div className="sidebar-top">
        <p className="sidebar-item-title">
          <i className="bx bx-user-plus"></i>
          Cliente
        </p>
        <button
          data-modal-target="user-modal"
          data-modal-toggle="user-modal"
          className="block rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          type="button"
        >
          Seleccionar
        </button>
      </div>
      <div className="sidebar-top">
        <p className="sidebar-item-title">
          <i className="bx bx-news"></i>
          Ci:
        </p>
        <button
          className="block rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          type="button"
        >
          Seleccionar
        </button>
      </div>
      <div className="sidebar-top">
        <p className="sidebar-item-title">
          <i className="bx bxs-calculator"></i>
          Es para :
        </p>
        <p className="sidebar-top">
          <div className="custom-select">
            <div className="select-wrapper">
              <select id="mesallevar">
                <option value="Mesa" data-icon="fas fa-money-bill-wave">
                  Mesa
                </option>
                <option value="LLevar" data-icon="fas fa-credit-card">
                  LLevar
                </option>
                <option value="Otro" data-icon="fas fa-qrcode">
                  Otro
                </option>
              </select>
              <i className="selected-icon-1 fas fa-money-bill-wave"></i>
            </div>
          </div>
        </p>
      </div>
      <div className="sidebar-top">
        <p className="sidebar-item-title">
          <i className="bx bx-money-withdraw"></i>
          Forma de pago:
        </p>
        <p className="sidebar-top">
          <div className="custom-select">
            <div className="select-wrapper">
              <select id="tipopagos">
                <option value="Efectivo" data-icon="fas fa-money-bill-wave">
                  Efectivo
                </option>
                <option value="Qr" data-icon="fas fa-qrcode">
                  Qr
                </option>
                <option value="Tarjeta" data-icon="fas fa-credit-card">
                  Tarjeta
                </option>
              </select>
              <i className="selected-icon fas fa-money-bill-wave"></i>
            </div>
          </div>
        </p>
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
            <i className="bx bx-badge-check"></i>
            ¿Con factura?:
          </p>
          <p className="sidebar-item-title-top">
            <p className="sidebar-item-title-p">Sin Factura</p>
            <label className="switch">
              <input type="checkbox" id="factura" />
              <span className="slider"></span>
            </label>
            <p className="sidebar-item-title-p">Sin Factura</p>
          </p>
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
  )
}

export default NEXBranchOrderSideBarUserData
