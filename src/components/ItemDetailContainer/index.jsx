import Card from '../Card';

const ItemDetailContainer = ({ items }) => {
	return (
		<div>
			{items.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</div>
	);
};

export default ItemDetailContainer;
