import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ShipmentInfo from './ShipmentInfo';
import ProductInfo from './ProductInfo';
import DeliverySection from './DeliverySection';
import Button from '../../../Button';

const DeliveryOptions = () => {
	const { items } = useSelector(({ cartState }) => cartState);

	return (
		<div className="max-w-xl mx-auto p-4">
			{ items.map((item, index) =>
				<Fragment key={ item.id }>
					<ShipmentInfo index={ index } total={ items.length }/>
					<ProductInfo item={ item }/>
					<DeliverySection/>
				</Fragment>) }
			<Button label="Continue to payment"/>
		</div>
	);
};

export default DeliveryOptions;
