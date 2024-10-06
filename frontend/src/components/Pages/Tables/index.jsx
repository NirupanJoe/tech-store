import { Fragment } from 'react';
import MetaData from '../../../MetaData';
import Products from '../../Products';
import useFetchProducts from '../../../hook/useFetchProducts';

const Tablets = () => {
	const category = 'tablet';

	const fetchData = useFetchProducts({ category });

	return <Fragment>
		<MetaData title="Tablets | Home"/>
		<Products { ...fetchData }/>
	</Fragment>;
};

export default Tablets;
