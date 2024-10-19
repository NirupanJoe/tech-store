import { Fragment, useState } from 'react';
import Loader from '../Loader';
import Error from '../Pages/Error';
import ProductGrid from '../../components/Products/ProductGrid';
import ProductPagination from '../../components/Products/ProductPagination';
import FilterOptions from './FilterOptions';
import { Filter as FilterOpen, FilterX as FilterClose, X as XIcon } from 'lucide-react';

const FilterHeader = (props) => {
	const { filter, isFilterOpen, setFilterOpen } = props;

	return filter
		&& <div className="w-full px-5 my-2 flex justify-between items-center">
			<button className="flex" onClick={ () => setFilterOpen(!isFilterOpen) }>
				{ isFilterOpen ? <FilterClose/> : <FilterOpen/> }
				<span className="text-lg font-semibold">Filters</span>
			</button>
		</div>;
};

const FilterSidebar = ({ isFilterOpen, setFilterOpen, props }) => {
	const { filter } = props;

	if(!filter || !isFilterOpen)
		return null;

	return (
		<div
			className={ `sm:w-1/3 w-11/12 md:w-1/4 transition-transform duration-300 ease-in-out 
      ${ isFilterOpen ? 'translate-x-0' : '-translate-x-full' } 
      sm:translate-x-0 absolute sm:static bg-white z-10 h-full sm:h-auto` }
		>
			<div className="flex p-2 hidden sm: justify-between items-center">
				<div className="text-lg font-semibold">Filters</div>
				<button onClick={ () => setFilterOpen(false) }>
					<XIcon/>
				</button>
			</div>
			<FilterOptions { ...props }/>
		</div>
	);
};

const ProductContent = (props) =>
	<div className="sm:w-3/4 lg:w-4/5">
		<ProductGrid { ...props }/>
		<ProductPagination { ...props }/>
	</div>;

const FilterOverlay = ({ isFilterOpen, setFilterOpen }) => {
	if(!isFilterOpen)
		return null;
	return (
		<div
			className="fixed inset-0 bg-black opacity-50 sm:hidden"
			onClick={ () => setFilterOpen(false) }
		/>
	);
};

const RenderProducts = (props) => {
	const [isFilterOpen, setFilterOpen] = useState(true);

	return (
		<Fragment>
			<FilterHeader { ...{ ...props, isFilterOpen, setFilterOpen } }/>
			<main className="mx-auto px-4 py-8">
				<div className="flex flex-col sm:flex-row sm:justify-around">
					<FilterSidebar { ...{ props, isFilterOpen, setFilterOpen } }/>
					<ProductContent { ...props }/>
				</div>
				<FilterOverlay isFilterOpen={ isFilterOpen } setFilterOpen={ setFilterOpen }/>
			</main>
		</Fragment>
	);
};

const Products = (props) => {
	const { loading, error } = props;

	return (
		loading
			? <Loader/>
			: error
				? <Error error={ error }/>
				: <RenderProducts { ...props }/>
	);
};

export default Products;
