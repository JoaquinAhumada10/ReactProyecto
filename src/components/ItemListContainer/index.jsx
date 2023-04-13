import { doc, getDoc } from 'firebase/firestore';
import styles from './itemlist.module.css';
import { useEffect, useState } from 'react';
import db from '../../../db/firebase-config';
import { Link, useParams } from 'react-router-dom';
import ItemCount from '../ItemCount';
import { useCartContext } from '../context/CartContext';

const ItemListContainer = () => {
	// Obtener el id de los parámetros de la URL utilizando el hook useParams.
	const { id } = useParams();

	// Definir estado inicial del item.
	const [item, setItem] = useState({});

	// Función asincrónica para obtener el item correspondiente al id de los parámetros.
	const getItem = async () => {
		// Obtener referencia al documento correspondiente al id utilizando el método doc de Firebase Firestore.
		const docRef = doc(db, 'items', id);

		// Obtener snapshot del documento utilizando el método getDoc de Firebase Firestore.
		const docSnap = await getDoc(docRef);

		// Si el documento existe, actualizar el estado del item con los datos obtenidos del snapshot.
		if (docSnap.exists()) {
			setItem(docSnap.data());
		}
	};

	useEffect(() => {
		getItem();
	}, []);

	const [toCart, setToCart] = useState(false);
	const { addItem } = useCartContext();

	const onAdd = (quantity) => {
		setToCart(true);
		addItem(item, quantity);
	};

	// Renderizar el componente con los datos del item obtenidos del estado.
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{item.title}</h3>
			<img src={item.img} className={styles.image} />
			<p className={styles.price}>${item.price}</p>
			{toCart ? (
				<Link to="/cart"> Ir al carrito</Link>
			) : (
				<ItemCount initial={1} stock={5} onAdd={onAdd} />
			)}
		</div>
	);
};

export default ItemListContainer;
