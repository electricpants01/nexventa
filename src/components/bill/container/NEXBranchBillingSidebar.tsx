import './assets/css/NEXBranchBillingTable.css'
const data = {
  id: 'Factura 001',
  cajero: 'Juan Albare',
  ci: '0000 sc',
  idfactura: '001',
  fecha: '01/01/2024',
  monto: '100.00 Bs',
  sucursal: 'KFC',
  descuento: '5%',
  impuesto: '90 Bs',
  total: '95.00 Bs',
  pago: 'qr',
  direccion: 'Calle 123, Ciudad, País',
  correo: 'cliente@example.com',
  telefono: '+1234567890',
  cliente: 'Pedro perez',
  img: '../../../public/images/cliente/Logo-KFC.png'
}
const NEXBranchBillingSidebar = () => {
  return (
    <div className="sidebar has-scrollbar-billing" data-mobile-menu>
      <div className="sidebar-category">
        <div className="category-item">
          <img src={data.img} alt="" width={30} height={30} />
          <p className="menu-title">Factura</p>
          <h2 className="sidebar-title">{data.fecha}</h2>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Cajero</p>
          <p className="billing-subtitle">{data.cajero}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">CI:</p>
          <p className="billing-subtitle">{data.ci}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Cliente</p>
          <p className="billing-subtitle">{data.cliente}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">
            ID
            <i className="bx bx-chevron-down"></i>
          </p>
          <p className="billing-subtitle">{data.id}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Fecha emitida:</p>
          <p className="billing-subtitle">{data.fecha}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Monto total:</p>
          <p className="billing-subtitle">{data.monto}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Sucursal:</p>
          <p className="billing-subtitle">{data.sucursal}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Forma de pago:</p>
          <p className="billing-subtitle">{data.pago}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Descuento:</p>
          <p className="billing-subtitle">{data.descuento}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Impuestos:</p>
          <p className="billing-subtitle">{data.impuesto}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Total a pagar:</p>
          <p className="billing-subtitle">{data.total}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Dirección:</p>
          <p className="billing-subtitle">{data.direccion}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Correo:</p>
          <p className="billing-subtitle">{data.correo}</p>
        </div>
        <div className="sidebar-top">
          <p className="menu-title">Teléfono:</p>
          <p className="billing-subtitle">{data.telefono}</p>
        </div>
      </div>
    </div>
  )
}

export default NEXBranchBillingSidebar
