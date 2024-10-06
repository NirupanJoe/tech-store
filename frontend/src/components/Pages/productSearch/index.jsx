import { Fragment } from 'react';
import MetaData from '../../../MetaData';
import { useParams } from 'react-router-dom';
import Products from '../../Products';
import useFetchProducts from '../../../hook/useFetchProducts';

const ProductSearch = () => {
	const { keyword } = useParams();

	const fetchData = useFetchProducts({ keyword });

	return <Fragment>
		<MetaData title="Buy Best Products | Home"/>
		<Products { ...fetchData }/>
	</Fragment>;
};

export default ProductSearch;
