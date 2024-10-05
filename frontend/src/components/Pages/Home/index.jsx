import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../../../MetaData';
import Products from './Products';
import { getProducts } from '../../../actions/productsActions';
import Loader from '../../Loader';
import Error from '../Error';

const Home = () => {
	const dispatch = useDispatch();
	const productsState = useSelector((state) => state.productsState);
	const [currentPage, setCurrentPage] = useState(1);
	const { loading, error } = productsState;
	const productsProps = { ...productsState, currentPage, setCurrentPage };

	useEffect(() => {
		dispatch(getProducts({ currentPage }));
	}, [dispatch, currentPage]);

	return (
		<main className="mx-auto px-4 py-8">
			<MetaData title="Buy Best Products | Home"/>
			{ loading
				? <Loader/>
				: error
					? <Error { ...{ error } }/>
					: <Products { ...productsProps }/> }
		</main>
	);
};

export default Home;
