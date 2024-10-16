import { Fragment, useState } from 'react';
import MetaData from '../../../MetaData';
import Products from '../../Products';
import useFetchProducts from '../../../hook/useFetchProducts';
import config from '../../../actions/config';

const SmartPhones = () => {
	const category = 'smartphone';
	const [selectedPrice, setSelectedPrice] = useState('');

	const handlePriceChange = (event) => {
		const selectedValue = event.target.value;

		setSelectedPrice(selectedValue);
	};

	const prices = config.priceOptions.find(({ label }) => label === selectedPrice)?.value;

	const fetchData = useFetchProducts({ category, ...prices });

	return (
		<Fragment>
			<MetaData title="Smartphones | Home"/>
			<Products { ...{ ...fetchData, handlePriceChange, selectedPrice } } filter={ true }/>
		</Fragment>
	);
};

export default SmartPhones;
