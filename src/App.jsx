import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';

import CategoryItem from './components/CategoryItem';

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`https://api.escuelajs.co/api/v1/products`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<ItemListContainer greeting="BigSneakers" />}
				/>
				<Route path="/inicio" element={<h3> Bienvenido a nuestro sitio </h3>} />
				<Route
					path="/productos"
					element={<ProductList products={products} />}
				/>
				<Route path="/productos/:id" element={<ProductItem />} />
				<Route
					path="/categorias"
					element={<CategoryItem products={products} />}
				/>
				<Route path="/categorias/:id" element={<ProductItem />} />
				<Route path="/contacto" element={<h3>Contactanos</h3>} />
				<Route path="/Sobrenosotros" element={<h4>SobreNosotros</h4>} />
				<Route path="/cart" />
			</Routes>
		</div>
	);
}

export default App;
