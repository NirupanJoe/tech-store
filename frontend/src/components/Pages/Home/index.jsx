import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../../../MetaData';
import Products from './Products';
import { getProducts } from '../../../actions/productsActions';

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.productState.products);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return <main className=" mx-auto px-4 py-8">
		<MetaData title="Buy Best Products | Home "/>
		<section className="mb-12">
			<Products products={ products }/>
		</section>
	</main>;
};

export default Home;
