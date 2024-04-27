
const logo = {
	name: 'KFC',
	img: '../../../public/images/cliente/Logo-KFC.png',
	branch: 'Sucursal 4to anillo, av 4to anillo, 3 pasos al frente',
	width: 600,
	height: 500
};
const NEXBranchSelectClientLogo = () => {
	return (
		<div>
			<h3>
				<button className="back-btn">
					<i className="bx bx-arrow-back"></i> Volver</button>
				<p>{logo.name}</p>
			</h3>
			<p>"Puntos de ventas"</p>
			<img src={logo.img} alt={logo.name} className="image" width={logo.width} height={logo.height} />
		</div>

	);
}

export default NEXBranchSelectClientLogo;
