
const product = {
	name: 'Pollo',
	img: '../../../public/images/food/11.jpg',
	img1: '../../../public/images/food/9.jpg',
	img2: '../../../public/images/food/10.jpg',
	img3: '../../../public/images/food/2.jpg',

	title: '30% Off',
	subtitle: 'Comida de fitness',
	subtitle2: 'a partir de',
	subtitle3: '20.00',
	subtitle4: 'Bs'

};

const NEXproduct = () => {
	return (
		<div className="blog-card">
			<img src={product.img} alt={product.name} className="blog-banner" />
			<p className="showcase-badge angle">stop</p>
			<div className="blog-content">
				<h3 className="blog-title">Pollo</h3>
				<div className="price-box">
					<p className="price">Precio: 27 Bs</p>
					<del>30.00 Bs</del>
				</div>
				<a href="#" className="showcase-title"> Pollo al horno</a>
				<div className="banner-btn-product">
					<button className="add-to-cart-btn-add" data-name="Milaneza" data-price="20"
					><i className="bx bxs-cart-add"></i>
						Añadir
					</button>
					<button id="openModalBtn-ver" className="add-to-cart-btn-show">
						<i className="bx bxs-show"></i> Ver
						</button>
				</div>
			</div>
		</div>

		

	);
}

export default NEXproduct;
