import { Link } from 'react-router-dom';
import styles from './card.module.css';

const Card = ({ product }) => {
	return (
		<div className={styles.container}>
			<Link to={`${product.id}`} className={styles.card}>
				<h3 className={styles.title}>{product.title}</h3>
				<img src={product.image} className={styles.image} />
				<p className={styles.description}>{product.description}</p>
				<p className={styles.price}>${product.price}</p>
				<h4>{product.category.name}</h4>
			</Link>
		</div>
	);
};

export default Card;
