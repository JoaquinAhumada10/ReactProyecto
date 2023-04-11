import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetailContainer from './components/ItemListContainer';
import { collection, getDocs } from 'firebase/firestore';
import db from '../db/firebase-config';
import CategoryList from './components/CategoryList';

function App() {
	const [items, setItems] = useState([]);
	const itemsRef = collection(db, 'items');

	const getItems = async () => {
		const itemsCollection = await getDocs(itemsRef);
		const items = itemsCollection.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));
		setItems(items);
	};

	useEffect(() => {
		getItems();
	}, []);
	console.log(items);

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<ItemListContainer items={items} />} />
				<Route path="/inicio" />
				<Route
					path="/productos"
					element={<ItemListContainer items={items} />}
				/>
				<Route path="/productos/:id" element={<ItemDetailContainer />} />
				<Route path="/categorias" element={<CategoryList items={items} />} />
				<Route path="/categorias/:id" element={<ItemDetailContainer />} />

				<Route path="/cart" />

				<Route path="/:id" element={<ItemDetailContainer />} />
			</Routes>
		</div>
	);
}

export default App;
