import { useState } from 'react';

const priceOptions = [
	{ label: 'Up to ₹10000', value: 'upto10000' },
	{ label: '₹10001–₹15000', value: '10001-15000' },
	{ label: '₹15001–₹20000', value: '15001-20000' },
	{ label: '₹20001–₹25000', value: '20001-25000' },
	{ label: '₹25001–₹30000', value: '25001-30000' },
	{ label: '₹30001–₹35000', value: '30001-35000' },
	{ label: '₹35001–₹40000', value: '35001-40000' },
	{ label: '₹40001–₹50000', value: '40001-50000' },
	{ label: 'Above ₹50000', value: 'above50000' },
];

const PriceOption = ({ priceOption, selectedPrice, handlePriceChange }) =>
	<label className="flex items-center space-x-2 text-xs lg:text-base">
		<input
			type="radio"
			name="price"
			value={ priceOption.value }
			checked={ selectedPrice === priceOption.value }
			onChange={ handlePriceChange }
			className="form-radio h-4 w-4 text-primary-500"
		/>
		<span>{ priceOption.label }</span>
	</label>
;

const FilterOptions = () => {
	const [selectedPrice, setSelectedPrice] = useState('');

	const handlePriceChange = (event) => {
		setSelectedPrice(event.target.value);
	};

	return (
		<div className="p-4 lg:p-6 bg-white-900 text-black rounded-lg">
			<h3 className="font-bold mb-2 text-base lg:text-lg">Price</h3>
			<div className="flex flex-col space-y-2">
				{ priceOptions.map((priceOption, index) =>
					<PriceOption
						key={ index }
						priceOption={ priceOption }
						selectedPrice={ selectedPrice }
						handlePriceChange={ handlePriceChange }
					/>) }
			</div>
		</div>
	);
};

export default FilterOptions;
