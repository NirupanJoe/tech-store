import ProductCard from './ProductCard';

const ProductGrid = ({ products }) =>
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{ products.map((product) => {
			const { _id: id } = product;

			return <ProductCard key={ id } { ...{ product } }/>;
		}) }
	</div>;

export default ProductGrid;
