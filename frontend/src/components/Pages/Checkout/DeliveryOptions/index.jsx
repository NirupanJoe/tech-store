import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShipmentInfo from './ShipmentInfo';
import ProductInfo from './ProductInfo';
import DeliverySection from './DeliverySection';
import Button from '../../../Button';
import { checkoutStepIncrement } from '../../../../slice/cartSlice';
import MetaData from '@MetaData';

const DeliveryOptions = () => {
	const dispatch = useDispatch();
	const { items } = useSelector(({ cartState }) => cartState);

	const handleClick = () => {
		dispatch(checkoutStepIncrement());
	};

	return (
		<div className="max-w-xl mx-auto p-4">
			<MetaData title="Delivery Options | Checkout"/>
			{ items.map((item, index) =>
				<Fragment key={ item.id }>
					<ShipmentInfo index={ index } total={ items.length }/>
					<ProductInfo item={ item }/>
					<DeliverySection/>
				</Fragment>) }
			<Button onClick={ handleClick } label="Continue to payment"/>
		</div>
	);
};

export default DeliveryOptions;
