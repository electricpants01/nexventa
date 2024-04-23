const usercreate = {
  name: 'cart ',
  img: '../../../public/images/banner/banner.jpg',
  title: '30% Off',
  subtitle: 'Comida de fitness',
  subtitle2: 'a partir de',
  subtitle3: '20.00',
  subtitle4: 'Bs'
}

const NEXusercreate = () => {
  return (
    <div>
      <h2 className="sidebar-title">Nueva Orden</h2>
      <div className="sidebar-top">
        <p className="sidebar-item-title-box">
          <b>
            <i className="bx bxs-user-detail"></i> Cajero :
          </b>
        </p>
        <p className="sidebar-item-title-box">Pedro Perez</p>
        <p className="sidebar-item-title-box">
          <i className="bx bx-chevron-right"></i>
        </p>
      </div>
    </div>
  )
}

export default NEXusercreate
