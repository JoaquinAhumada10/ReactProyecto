import React from 'react';
import { useCartContext } from '../context/CartContext';
import './itemcart.css';

const ItemCart = ({ item }) => {
	const { removeItem } = useCartContext();
	return (
		<div className="itemCart">
			<img className="itemCart-image" src={item.img} alt={item.title} />
			<div className="itemCart-details">
				<h4 className="itemCart-title">{item.title}</h4>
				<p className="itemCart-quantity">
					<span>Cantidad:</span> {item.quantity}
				</p>
				<p className="itemCart-price">
					<span>Precio p/u:</span> ${item.price}
				</p>
				<p className="itemCart-subtotal">
					<span>Subtotal:</span> ${item.quantity * item.price}
				</p>

				<button className="itemCart-button" onClick={() => removeItem(item.id)}>
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default ItemCart;
