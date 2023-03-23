import Card from '../Card';

const ItemDetailContainer = ({ products }) => {
	return (
		<div>
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</div>
	);
};

export default ItemDetailContainer;
