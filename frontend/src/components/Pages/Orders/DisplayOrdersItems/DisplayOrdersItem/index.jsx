import OrderHeader from './OrderHeader';
import ShippingDetails from '../ShippingDetails';
import helper from '../../../../../services/helper';

const OrderItemImage = ({ image, name }) =>
	<div className="w-full md:w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center">
		<img src={ image } alt={ name } className="w-32 h-32 object-contain"/>
	</div>;

const OrderItemDetails = ({ item }) =>
	<div className="flex-1">
		<h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2 md:mb-4">
			{ item.name }
		</h3>
		<div className="grid grid-cols-2 gap-2 md:gap-4 text-sm md:text-lg text-gray-600">
			<p>Storage: { item.storage }</p>
			<p>RAM: { item.ram }</p>
			<p>Color: { item.colorName }</p>
			<p>Quantity: { item.qty }</p>
		</div>
	</div>;

const OrderItemPrice = ({ price }) =>
	<div className="text-right">
		<p className="text-xl md:text-2xl font-medium text-gray-900">
			{ helper.formatPrice(price) }
		</p>
	</div>;

const OrderItem = (item) => {
	const { _id: id, image, name, price } = item;

	return (
		<div key={ id } className="p-4 md:p-8 border-b border-gray-200">
			<div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
				<OrderItemImage image={ image } name={ name }/>
				<OrderItemDetails item={ item }/>
				<OrderItemPrice price={ price }/>
			</div>
		</div>
	);
};

const DisplayOrdersItem = (order) => {
	const { orderItems, _id: id } = order;

	return (
		<div key={ id } className="bg-white rounded-xl shadow-lg overflow-hidden">
			<OrderHeader order={ order }/>
			{ orderItems.map(OrderItem) }
			<ShippingDetails order={ order }/>
		</div>
	);
};

export default DisplayOrdersItem;
