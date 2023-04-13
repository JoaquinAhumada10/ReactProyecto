import './cart.css';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

// Componente Cart que muestra la información del carrito y permite hacer una compra

const Cart = () => {
	// Obtener el estado actual del carrito y el precio total de los productos en él
	const { cart, totalPrice } = useCartContext();

	// Estado que guarda la información del comprador
	const [buyerInfo, setBuyerInfo] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		emailConfirmation: '',
	});

	// Crear el objeto de la orden a partir de la información del carrito y del comprador
	const order = {
		buyer: {
			name: `${buyerInfo.firstName} ${buyerInfo.lastName}`,
			email: buyerInfo.email,
			phone: buyerInfo.phone,
		},
		items: cart.map((item) => ({
			id: item.id,
			title: item.title,
			price: item.price,
			quantity: item.quantity,
		})),
		total: totalPrice(),
	};

	// Manejar el click del botón "Comprar" para guardar la orden en la base de datos
	const handleClick = (event) => {
		event.preventDefault();
		const db = getFirestore();
		const ordersCollection = collection(db, 'orders');
		addDoc(ordersCollection, order).then(({ id }) =>
			alert(`La orden ha sido creada con éxito. Número de orden: ${id}`)
		);
	};

	// Manejar el cambio en los inputs del formulario de información del comprador
	const handleChange = (event) => {
		setBuyerInfo({ ...buyerInfo, [event.target.name]: event.target.value });
	};

	// Deshabilitar el botón de compra si falta información del comprador o las direcciones de email no coinciden
	const isButtonDisabled =
		buyerInfo.firstName === '' ||
		buyerInfo.lastName === '' ||
		buyerInfo.phone === '' ||
		buyerInfo.email === '' ||
		buyerInfo.email !== buyerInfo.emailConfirmation;

	// Si el carrito está vacío, mostrar un mensaje indicándolo y un enlace para volver a la página de productos
	if (cart.length === 0) {
		return (
			<div>
				<p>No hay productos en el carrito</p>
				<Link to="/">
					<p>Click para ver productos</p>
				</Link>
			</div>
		);
	}

	return (
		<div className="cart">
			{cart.map((item) => (
				<ItemCart key={item.id} item={item} />
			))}
			<p className="total">total: ${totalPrice()}</p>
			<form className="form">
				<label className="form-label" htmlFor="firstName">
					Nombre:
				</label>
				<input
					type="text"
					name="firstName"
					value={buyerInfo.firstName}
					onChange={handleChange}
					className="form-input"
				/>
				<label className="form-label" htmlFor="lastName">
					Apellido:
				</label>
				<input
					type="text"
					name="lastName"
					value={buyerInfo.lastName}
					onChange={handleChange}
					className="form-input"
				/>
				<label className="form-label" htmlFor="phone">
					Teléfono:
				</label>
				<input
					type="tel"
					name="phone"
					value={buyerInfo.phone}
					onChange={handleChange}
					className="form-input"
				/>
				<label className="form-label" htmlFor="email">
					E-mail:
				</label>
				<input
					type="email"
					name="email"
					value={buyerInfo.email}
					onChange={handleChange}
					className="form-input"
				/>
				<label className="form-label" htmlFor="emailConfirmation">
					Confirmación de E-mail:
				</label>
				<input
					type="email"
					name="emailConfirmation"
					value={buyerInfo.emailConfirmation}
					onChange={handleChange}
					className="form-input"
				/>
				<button
					className="form-button"
					onClick={handleClick}
					disabled={isButtonDisabled}
				>
					Emitir compra
				</button>
			</form>
		</div>
	);
};

export default Cart;
