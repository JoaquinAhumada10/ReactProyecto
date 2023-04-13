import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ item }) => {
	return (
		<div className="card">
			<Link to={`${item.id}`} className="card-link">
				<h3 className="title">{item.title}</h3>
				<img className="card-image" src={item.img} alt={item.title} />
			</Link>
			<p className="price">${item.price}</p>
			<h4>{item.category}</h4>
		</div>
	);
};

export default Card;
