import { Link } from 'react-router-dom';
import styles from './itemlist.module.css';

const ItemListContainer = ({ greeting }) => {
	return <h2 className={styles.container}>{greeting}</h2>;
};

export default ItemListContainer;
