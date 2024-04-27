
const client = {
	name: 'KFC',
	img: '../../../public/images/cliente/Logo-KFC.png',
	branch: 'Sucursal 4to anillo, av 4to anillo, 3 pasos al frente',
};
const NEXBranchSelectClientCard = () => {
	return (
		<a href="/client" className="card-link">
			<div className="card">
				<div className="card-image">
					<img src={client.img} alt={client.name} className="card-image" />
				</div>
				<div className="card-content">
					<h3 className="card-title">{client.name}</h3>
					<p className="card-address">{client.branch}</p>
				</div>
				<i className="bx bx-chevron-right bx-sm icon"></i>
			</div>
		</a>
	);
}

export default NEXBranchSelectClientCard;
