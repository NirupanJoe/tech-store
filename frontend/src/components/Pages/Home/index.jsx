import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../../../MetaData';
import Products from './Products';
import { getProducts } from '../../../actions/productsActions';
import Loader from '../../Loader';

const Home = () => {
	const dispatch = useDispatch();
	const { products, loading } = useSelector((state) => state.productState);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return <main className=" mx-auto px-4 py-8">
		<MetaData title="Buy Best Products | Home "/>
		{ loading
			? <Loader/>
			: <section className="mb-12">
				<Products { ...{ products } }/>
			</section> }
	</main>;
};

export default Home;
