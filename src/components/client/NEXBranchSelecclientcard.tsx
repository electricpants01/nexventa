import React from 'react';
import cliente from '../../../public/images/cliente/Logo-KFC.png'; // La imagen de producto

const NEXCard = () => {
    return (
        <a href="/client" className="card-link">
            <div className="card">
                <div className="card-image">
                    <img src={cliente} alt="KFC" className="card-image" />
                </div>
                <div className="card-content">
                    <h3 className="card-title">KFC</h3>
                    <p className="card-address">Sucursal 4to anillo, av 4to anillo, 3 pasos al frente</p>
                </div>
                <i className="bx bx-chevron-right bx-sm icon"></i>
            </div>
        </a>
    );
}

export default NEXCard;
