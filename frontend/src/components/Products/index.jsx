import Loader from '../Loader';
import Error from '../Pages/Error';
import ProductGrid from '../../components/Products/ProductGrid';
import ProductPagination from '../../components/Products/ProductPagination';
import { Fragment } from 'react';

const RenderProducts = (props) =>
	<Fragment>
		<ProductGrid { ...props }/>
		<ProductPagination { ...props }/>
	</Fragment>;

const Products = (props) => {
	const { loading, error } = props;

	return (
		<main className="mx-auto px-4 py-8">
			{ loading
				? <Loader/>
				: error
					? <Error error={ error }/>
					: <RenderProducts { ...props }/> }
		</main>
	);
};

export default Products;
