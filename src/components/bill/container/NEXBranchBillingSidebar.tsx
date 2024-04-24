import './assets/css/NEXBranchBillingTable.css'
const NEXsidebar = () => {
  return (
    <div className="sidebar has-scrollbar-billing" data-mobile-menu>
      <div className="sidebar-category">
        <div className="category-item">
          <p className="menu-title">Factura</p>
          <h2 className="sidebar-title"> N.- 001</h2>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Cajero</p>
          <p className="billing-subtitle">Juan Albare</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">CI:</p>
          <p className="billing-subtitle">0000 sc</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Cliente</p>
          <p className="billing-subtitle">Pedro Perez</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">
            ID
            <i className="bx bx-chevron-down"></i>
          </p>
          <p className="billing-subtitle">Factura 001</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Fecha emitida:</p>
          <p className="billing-subtitle">01/01/2024</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Monto total:</p>
          <p className="billing-subtitle">100.00 Bs</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Sucursal:</p>
          <p className="billing-subtitle">KFC</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Forma de pago:</p>
          <p className="billing-subtitle">Efectivo</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Descuento:</p>
          <p className="billing-subtitle">10.00 Bs</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Impuestos:</p>
          <p className="billing-subtitle">5.00 Bs</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Total a pagar:</p>
          <p className="billing-subtitle">95.00 Bs</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Dirección:</p>
          <p className="billing-subtitle">Calle 123, Ciudad, País</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Correo:</p>
          <p className="billing-subtitle">cliente@example.com</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Teléfono:</p>
          <p className="billing-subtitle">+1234567890</p>
        </div>
      </div>
    </div>
  )
}

export default NEXsidebar
