import { Link } from 'react-router-dom';
import styles from './card.module.css';

const Card = ({ item }) => {
	return (
		<div className={styles.container}>
			<Link to={`${item.id}`} className={styles.card}>
				<h3 className={styles.title}>{item.title}</h3>
				<img src={item.img} className={item.image} />
				<p className={styles.price}>${item.price}</p>
				<h4>{item.category}</h4>
			</Link>
		</div>
	);
};

export default Card;
