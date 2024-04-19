
const productsedit = {
	name: 'Pollo',
	img: '../../../public/images/food/11.jpg',
	img1: '../../../public/img/food/9.jpg',
	img2: '../../../public/img/food/10.jpg',
	img3: '../../../public/img/food/2.jpg',

	title: '30% Off',
	subtitle: 'Cuarto de pollo .',
	subtitle2: 'a partir de',
	subtitle3: '20.00',
	subtitle4: 'Bs'

};

const NEXproductedit = () => {
	return (


					<div id="editModal" className="editmodal">
				<div className="modal-content-show">
					<button className="modal-close-btn-show" data-modal-close>
						<i className="bx bx-x"></i>
					</button>
					<div className="newsletter-img-edit">
						<h3 className="newsletter-title">Editar producto</h3>
						<img src={productsedit.img} alt={productsedit.name} className="banner-img"/>  
					</div>
					<div className="newsletter">
						<form id="cajaForm" className="edit-form">
							<div className="form-group">
								<label>Código:</label>
								<p id="codigo">0000</p>
							</div>
							<div className="form-group">
								<label>Precio:</label>
								<input
									type="text"
									className="form-control"
									id="precio"
									placeholder="Ingrese el precio"
								/>
							</div>
							<div className="form-group">
								<label>Detalle:</label>
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





	);
}

export default NEXproductedit;
