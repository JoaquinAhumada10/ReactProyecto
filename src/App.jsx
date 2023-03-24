import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetailContainer from './components/ItemListContainer';

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
				<Route path="/" element={<ItemListContainer products={products} />} />
				<Route path="/inicio" />
				<Route
					path="/productos"
					element={<ItemListContainer products={products} />}
				/>
				<Route path="/productos/:id" element={<ItemDetailContainer />} />

				<Route
					path="/categorias/clothes"
					element={<ItemListContainer products={products} />}
				/>
				<Route
					path="/categorias/shoes"
					element={<ItemListContainer products={products} />}
				/>
				<Route
					path="/categorias/:category/:id"
					element={<ItemDetailContainer />}
				/>
				<Route path="/categorias/:id" element={<ItemListContainer />} />

				<Route path="/cart" />

				<Route path="/:id" element={<ItemDetailContainer />} />
			</Routes>
		</div>
	);
}

export default App;
