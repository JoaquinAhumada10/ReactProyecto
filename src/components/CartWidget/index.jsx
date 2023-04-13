import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../context/CartContext';

export const CartWidget = () => {
	const { totalProducts } = useCartContext();
	return (
		<div>
			<FaShoppingCart />
			<span>{totalProducts() || ''}</span>
		</div>
	);
};

export default CartWidget;
