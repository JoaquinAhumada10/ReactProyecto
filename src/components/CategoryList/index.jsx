import { useState } from 'react';
import products from '../../../products.js';
import './category.css';
import Card from '../Card/index.jsx';

const CategoryList = () => {
	const [selectedCategory, setSelectedCategory] = useState();
	const [filteredItems, setFilteredItems] = useState([]);

	// Define una función que se ejecutará cuando cambie la categoría seleccionada en el selector
	const handleCategoryChange = (event) => {
		const category = event.target.value;

		// Actualiza la categoría seleccionada
		setSelectedCategory(category);

		// Filtra los productos según la categoría seleccionada y actualiza la matriz de elementos filtrados
		const filteredItems = products.filter((item) => item.category === category);
		setFilteredItems(filteredItems);
	};

	return (
		<div className="category-list-container">
			<select
				value={selectedCategory}
				onChange={handleCategoryChange}
				className="category-selector"
			>
				<option value="">-- Selecciona una Categoria--</option>
				<option value="nike">Nike</option>
				<option value="wonder">Wonder</option>
				<option value="detroit">Detroit</option>
			</select>

			{/* Renderiza una lista de elementos filtrados si hay elementos filtrados, de lo contrario muestra un mensaje */}
			{filteredItems.length > 0 ? (
				<ItemList items={filteredItems} />
			) : (
				<p>Por favor selecciona una categoria.</p>
			)}
		</div>
	);
};

const ItemList = ({ items }) => {
	// Devuelve el JSX del componente "ItemList", renderizando una lista de tarjetas de producto utilizando el componente "Card"
	return (
		<div className="item-list-container">
			{items.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</div>
	);
};

export default CategoryList;
