import { Fragment, useState } from 'react';
import MetaData from '../../MetaData';
import Products from '../Products';
import useFetchProducts from '../../hook/useFetchProducts';
import config from '../../actions/config';

const ProductCategory = ({ category, title }) => {
	const [selectedPrice, setSelectedPrice] = useState('');

	const handlePriceChange = (event) => {
		setSelectedPrice(event.target.value);
	};

	const prices = config.priceOptions.find(({ label }) => label === selectedPrice)?.value;
	const fetchData = useFetchProducts({ category, ...prices });

	return (
		<Fragment>
			<MetaData title={ `${ title } | Home` }/>
			<Products { ...{ ...fetchData, handlePriceChange, selectedPrice } } filter={ true }/>
		</Fragment>
	);
};

export default ProductCategory;
