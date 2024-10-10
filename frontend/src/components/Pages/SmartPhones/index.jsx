import { Fragment } from 'react';
import MetaData from '../../../MetaData';
import Products from '../../Products';
import useFetchProducts from '../../../hook/useFetchProducts';

const SmartPhones = () => {
	const category = 'smartphone';

	const fetchData = useFetchProducts({ category });

	return <Fragment>
		<MetaData title="Smartphones | Home"/>
		<Products { ...fetchData } filter={ true }/>
	</Fragment>;
};

export default SmartPhones;
