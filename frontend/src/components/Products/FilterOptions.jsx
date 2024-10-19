import config from '../../actions/config';

const PriceOption = ({ priceOption, selectedPrice, handlePriceChange }) =>
	<label className="flex items-center space-x-2 text-lg md:text-xs lg:text-lg">
		<input
			type="radio"
			name="price"
			value={ priceOption.label }
			checked={ selectedPrice === priceOption.label }
			onChange={ handlePriceChange }
			className="form-radio h-4 w-4 text-primary-500"
		/>
		<span>{ priceOption.label }</span>
	</label>;

const FilterOptions = ({ selectedPrice, handlePriceChange }) =>
	<div className="p-4 lg:p-6 bg-white-900 text-black rounded-lg">
		<h3 className="font-bold mb-2 text-base lg:text-lg">Price</h3>
		<div className="flex flex-col space-y-2">
			{ config.priceOptions.map((priceOption, index) =>
				<PriceOption
					key={ index }
					priceOption={ priceOption }
					selectedPrice={ selectedPrice }
					handlePriceChange={ handlePriceChange }
				/>) }
		</div>
	</div>;

export default FilterOptions;
