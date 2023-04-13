import { useEffect, useState } from 'react';
import './itemcount.css';

// Define un componente llamado "ItemCount" que recibe las props "initial", "stock" y "onAdd"
const ItemCount = ({ initial, stock, onAdd }) => {
	// Define una variable de estado llamada "count" y una función para actualizarla llamada "setCount"
	// Inicializa "count" con el valor de "initial", o 0 si "initial" no está definido o es falso
	const [count, setCount] = useState(parseInt(initial) || 0);

	// Define una función llamada "decrease" que resta 1 a "count" y la asigna como el nuevo valor de "count"
	const decrease = () => {
		setCount(count - 1);
	};

	// Define una función llamada "increase" que suma 1 a "count" y la asigna como el nuevo valor de "count"
	const increase = () => {
		setCount(count + 1);
	};

	// Usa el hook "useEffect" para actualizar el valor de "count" cuando cambia "initial"
	useEffect(() => {
		setCount(parseInt(initial) || 0);
	}, [initial]);

	// Retorna un fragmento de JSX con los botones de incremento y decremento de "count",
	// y un botón para agregar el artículo al carrito cuando se hace clic
	return (
		<div className="counter">
			<button
				className="counter-button"
				disabled={count <= 1}
				onClick={decrease}
			>
				-
			</button>
			<span className="counter-value">{count}</span>
			<button
				className="counter-button"
				disabled={count >= stock}
				onClick={increase}
			>
				+
			</button>
			<div>
				<button
					className="add-to-cart"
					disabled={stock <= 0}
					onClick={() => onAdd(count)}
				>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
