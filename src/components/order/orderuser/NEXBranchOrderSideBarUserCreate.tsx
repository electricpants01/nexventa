const usercreate = {
  name: 'cart ',
  img: '../../../public/images/banner/banner.jpg',
  title: '30% Off',
  subtitle: 'Comida de fitness',
  subtitle2: 'a partir de',
  subtitle3: '20.00',
  subtitle4: 'Bs'
}
const NEXBranchOrderSideBarUserCreate = () => {
  return (
    <div id="userModal" className="userModal">
      <div className="modal-content-user">
        <button id="closeModalBtn" className="modal-close-btn" data-modal-close>
          <i className="bx bx-x"></i>
        </button>
        <div className="newsletter-user">
          <div className="newsletter-img-user">
            <h3 className="newsletter-title-user">Registrar cliente</h3>
            <form id="registroForm-user">
              <div className="form-group-user">
                <i className="bx bx-user"></i>Nit o Carnet de identidad:
                <input type="text" id="nombre" name="nombre" required placeholder="Carnet" />
              </div>
              <div className="form-group-user">
                <i className="bx bx-user"></i>Nombre / razon social:
                <input type="text" id="nombre" name="nombre" required placeholder="Razon Social" />
              </div>
              <div className="form-group-user">
                <i className="bx bx-user"></i>Apellido Paterno:
                <input type="text" id="apellido" name="apellido" required placeholder="Paterno" />
              </div>
              <div className="form-group-user">
                <i className="bx bx-id-card"></i>Apellido Materno:
                <input type="text" id="ci" name="ci" required placeholder="Materno" />
              </div>
              <div className="form-group-user">
                <i className="bx bx-id-card"></i>Empresa:
                <input type="text" id="ci" name="ci" required placeholder="Empresa" />
              </div>
              <div className="form-group-user">
                <i className="bx bx-id-card"></i>Correo :
              </div>
              <button className="blog-category-user">
                <i className="bx bx-plus-medical"></i> Opciones Avanzadas
              </button>
              <button className="btn-user"> Registrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NEXBranchOrderSideBarUserCreate
