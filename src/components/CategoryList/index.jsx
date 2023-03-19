import { useEffect, useState } from 'react';
import Card from '../Card';

const CategoryList = () => {
	const [category, setCategory] = useState();
	const [products, setProducts] = useState([]);

	const fetchProducts = async (category) => {
		const response = await fetch(
			`https://api.escuelajs.co/api/v1/products${
				category ? `?category=${category}` : ''
			}`
		);
		const data = await response.json();
		setProducts(data);
	};

	useEffect(() => {
		fetchProducts(category);
	}, [category]);

	const handleCategoryChange = (event) => {
		const category = event.target.value;
		setCategory(category);
		fetchProducts(category);
	};

	const filteredProducts = category
		? products.filter((product) => product.category.name === category)
		: products;

	return (
		<div>
			<select value={category} onChange={handleCategoryChange}>
				<option value="">Todas las categorías</option>
				<option value="Clothes">Clothes</option>
				<option value="Electronics">Electronics</option>
				<option value="Furniture">Furniture</option>
				<option value="Shoes">Shoes</option>
				<option value="Others">Others</option>
			</select>

			<div>
				{filteredProducts.map((product) => (
					<Card key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default CategoryList;
