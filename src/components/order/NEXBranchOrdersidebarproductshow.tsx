
const productshow = {
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

const NEXproductshow = () => {
	return (
		<div id="verModal" className="vermodal">
			<div className="modal-content-show">
				<button className="modal-close-btn-show" data-modal-close>
					<i className="bx bx-x"></i>
				</button>

				<div className="newsletter-img">
					<h3 className="newsletter-title">Detalle del producto.</h3>

					<img src={productshow.img} alt={productshow.name} className="modal-content-show-img" />
				</div>

				<div className="newsletter">
					<form id="registrationForm">
						<h4 className="">{productshow.subtitle2}</h4>
						<p>codigo : 0000</p>
						<div className="newsletter-header">
							<div className="input-container">
								<i className="bx bx-money"></i>
								<a href="#">
									<h3 className="blog-title">
										<b>200.00 Bs.</b>
									</h3>
								</a>
							</div>
							<div className="input-container">
								<i className="bx bx-note"></i>
								<p className="blog-meta">Detalle</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>



	);
}

export default NEXproductshow;
