
const table = {
  id: 'Factura 001',
  fecha: '01/01/2024',
  monto: '100.00 BS',
  sucursal: 'KFC',
  estado: 'Realizado',
  cajero: 'Juan',
  accion: '01/01/2024',
  img: '../../../public/images/cliente/Logo-KFC.png'
}
const NEXBillingTable = () => {
  return (
    <table className="table-billing">
      <thead>
        <tr>
          <th>Id</th>
          <th>Fecha emitido</th>
          <th>Monto total</th>
          <th>Sucursal nombre</th>
          <th>Estado</th>
          <th>Cajero</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> {table.id}</td>
          <td> {table.fecha}</td>
          <td> {table.monto}</td>
          <td> {table.sucursal}</td>
          <td className="td-billing">{table.estado}</td>
          <td> {table.cajero}</td>
          <td>
            <i className="bx bx-plus"></i>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default NEXBillingTable
