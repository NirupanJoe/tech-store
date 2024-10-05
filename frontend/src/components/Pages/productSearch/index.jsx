import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../../../MetaData';
import Products from '../Home/Products';
import { getProducts } from '../../../actions/productsActions';
import Loader from '../../Loader';
import Error from '../Error';
import { useParams } from 'react-router-dom';

const RenderContent = ({ loading, error, ...productsProps }) =>
	(loading
		? <Loader/>
		: error
			? <Error { ...{ error } }/>
			: <Products { ...productsProps }/>);

const ProductSearch = () => {
	const dispatch = useDispatch();
	const productsState = useSelector((state) => state.productsState);
	const [currentPage, setCurrentPage] = useState(1);
	const productsProps = { ...productsState, currentPage, setCurrentPage };
	const { keyword } = useParams();

	useEffect(() => {
		dispatch(getProducts({ currentPage, keyword }));
	}, [dispatch, currentPage, keyword]);

	return (
		<main className="mx-auto px-4 py-8">
			<MetaData title="ProductSearch"/>
			<RenderContent { ...{ ...productsState, productsProps } }/>
		</main>
	);
};

export default ProductSearch;
