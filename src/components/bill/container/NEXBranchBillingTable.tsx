import './assets/css/NEXBranchBillingTable.css'
const NEXtable = () => {
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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Factura 001</td>
          <td>01/01/2024</td>
          <td>100.00 BS</td>
          <td>KFC</td>
          <td className="td-billing">Realizado</td>
          <td>Juan</td>
        </tr>
      </tbody>
    </table>
  )
}

export default NEXtable
