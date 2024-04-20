const NEXuser = () => {
	return (
		<div className="header-user-actions">
			<button className="action-btn">
				<i className="bx bx-bell bx-sm"></i>
				<span className="count">0</span>
			</button>
			<button className="action-btn">
				<i className="bx bx-cart bx-sm"></i>
				<span className="count">0</span>
			</button>
			<li className="action-btn-head dropdown">
				<button
					className="action-btn dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<i className="bx bx-user bx-sm"></i>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<li className="dropdown-item">
						<a href="#">
							<i className="bx bxs-cog"></i> Configuración
						</a>
					</li>
					<li className="dropdown-item">
						<a href="#">
							<i className="bx bx-log-out"></i> Cerrar sesión
						</a>
					</li>
				</ul>
			</li>
		</div>
	)
}

export default NEXuser
