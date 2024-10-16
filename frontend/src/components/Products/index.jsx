import Loader from '../Loader';
import Error from '../Pages/Error';
import ProductGrid from '../../components/Products/ProductGrid';
import ProductPagination from '../../components/Products/ProductPagination';
import FilterOptions from './FilterOptions';

const RenderProducts = (props) => {
	const { filter } = props;

	return <div className="flex flex-col sm:flex-row sm:justify-around">
		{
			filter && <div className="w-1/3 lg:w-1/5">
				<FilterOptions { ...props }/>
			</div>
		}
		<div className="lg:w-4/5">
			<ProductGrid { ...props }/>
			<ProductPagination { ...props }/>
		</div>
	</div>;
};

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
