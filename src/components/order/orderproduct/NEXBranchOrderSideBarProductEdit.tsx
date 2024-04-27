const productedit = {
  name: 'Pollo',
  img: '../../../public/images/food/11.jpg',
  precio: '27 Bs',
  descuento: '30.00 Bs',
  detalle: ' Pollo al horno',
}
const NEXBranchOrderSideBarProductEdit = () => {
  return (
    <div id="editModal" className="vermodal">
      <div className="modal-content-show">
        <button className="modal-close-btn-show" data-modal-close>
          <i className="bx bx-x"></i>
        </button>
        <div className="newsletter-img">
          <h3 className="newsletter-title">Detalle del producto.</h3>
          <img src={productedit.img} alt={productedit.name} className="modal-content-show-img" />
        </div>
        <div className="newsletter">
          <form id="cajaForm" className="edit-form">
            <div className="form-group">
              <p id="codigo">0000</p>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Ingrese el precio" />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="detalle"
                placeholder="Ingrese el detalle"
              />
            </div>
            <br />
            <button className="banner-btn"> Guardar Cambios</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NEXBranchOrderSideBarProductEdit 
