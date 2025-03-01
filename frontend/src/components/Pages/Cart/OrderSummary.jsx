import { Link } from 'react-router-dom';
import helper from '../../../services/helper';

const OrderItem = ({ name, price }) =>
	<div className="flex justify-between">
		<span className="text-gray-600">{ name }</span>
		<span className="font-semibold">{ helper.formatPrice(price) }</span>
	</div>;

const OrderItemsList = ({ items }) =>
	<div className="space-y-2 mb-4">
		{ items.map((item) =>
			<OrderItem key={ item.id } name={ item.name } price={ item.price }/>) }
	</div>;

const OrderTotal = ({ total }) =>
	<div className="border-t pt-4 mb-4">
		<div className="flex justify-between font-bold text-lg">
			<span>Total</span>
			<span>{ helper.formatPrice(total) }</span>
		</div>
	</div>;

const CheckoutButton = () =>
	<Link to="/checkout">
		<button
			className="w-full bg-primary-500 text-white py-1.5 rounded-full hover:bg-primary-500
    transition duration-300 flex items-center justify-center space-x-2"
		>
			Continue to Checkout
		</button>
	</Link>;

const calculateTotal = (items) =>
	items.reduce((total, item) => total + item.price, 0);

const OrderSummary = ({ items }) => {
	const total = calculateTotal(items);

	return (
		<div className="md:col-span-1">
			<div className="bg-white shadow-md border-2 rounded-lg p-6 sticky top-6">
				<h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
				<OrderItemsList items={ items }/>
				<OrderTotal total={ total }/>
				<CheckoutButton/>
			</div>
		</div>
	);
};

export default OrderSummary;
