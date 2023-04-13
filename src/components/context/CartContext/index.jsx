// Importación de librerías
import React, { useContext, useState } from 'react';

// Creación del contexto
const CartContext = React.createContext([]);

// Hook personalizado para utilizar el contexto
export const useCartContext = () => useContext(CartContext);

// Componente que provee el contexto
const CartProvider = ({ children }) => {
	// Estado local para almacenar el carrito de compras
	const [cart, setCart] = useState([]);

	// Función para añadir un producto al carrito
	const addItem = (item, quantity) => {
		if (inCart(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				})
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};

	// Función para calcular el precio total del carrito
	const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
	};

	// Función para calcular la cantidad total de productos en el carrito
	const totalProducts = () =>
		cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0
		);

	// Función para limpiar el carrito
	const clearCart = () => setCart([]);

	// Función para verificar si un producto ya se encuentra en el carrito
	const inCart = (id) => (cart.find((item) => item.id === id) ? true : false);

	// Función para remover un producto del carrito
	const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

	// Se provee el contexto y sus funciones como valor del provider
	return (
		<CartContext.Provider
			value={{
				clearCart,
				inCart,
				removeItem,
				addItem,
				totalPrice,
				totalProducts,
				cart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
