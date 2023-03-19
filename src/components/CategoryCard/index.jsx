import { Link } from 'react-router-dom';

const CategoryCard = ({ product }) => {
	return (
		<div>
			<Link to={`${product.category.name}`}>
				<select value={product.category.name}>
					<option value="">Todas las categorías</option>
					<option value="Clothes">Clothes</option>
					<option value="Electronics">Electronics</option>
					<option value="Furniture">Furniture</option>
					<option value="Shoes">Shoes</option>
					<option value="Others">Others</option>
				</select>
			</Link>
		</div>
	);
};

export default CategoryCard;
