import { Fragment } from 'react';
import MetaData from '@MetaData';
import Products from '../../Products';
import useFetchProducts from '../../../hook/useFetchProducts';

const Home = () => {
	const fetchData = useFetchProducts();

	return <Fragment>
		<MetaData title="Buy Best Products | Home"/>
		<Products { ...fetchData }/>
	</Fragment>;
};

export default Home;
