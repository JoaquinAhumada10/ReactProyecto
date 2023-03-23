import styles from './itemlist.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
	const [product, setProduct] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{product.title}</h3>
			<img src={product.image} className={styles.image} />
			<p className={styles.description}>{product.description}</p>
			<p className={styles.price}>{product.price}</p>
		</div>
	);
};
export default ItemListContainer;
