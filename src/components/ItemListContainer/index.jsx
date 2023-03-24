import styles from './itemlist.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { id, categoryId } = useParams();

	useEffect(() => {
		const baseUrl = 'https://api.escuelajs.co/api/v1/';
		const url = categoryId
			? `${baseUrl}categories/${categoryId}/products`
			: id
			? `${baseUrl}products/${id}`
			: `${baseUrl}products`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, [id, categoryId]);

	const renderProduct = (product) => (
		<>
			<h3 className={styles.title}>{product.title}</h3>
			<img src={product.image} className={styles.image} />
			<p className={styles.description}>{product.description}</p>
			<p className={styles.price}>${product.price}</p>
		</>
	);

	return (
		<div className={styles.container}>
			{Array.isArray(products) ? (
				products.map((product) => (
					<div key={product.id}>{renderProduct(product)}</div>
				))
			) : (
				<div>{renderProduct(products)}</div>
			)}
		</div>
	);
};

export default ItemListContainer;
