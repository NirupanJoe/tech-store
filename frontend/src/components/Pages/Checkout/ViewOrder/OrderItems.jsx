import { formatCurrency } from '../../../../helpers/priceHelper';

const OrderItem = ({ item }) =>
	<div className="flex pb-6 mb-6 border-b border-gray-300">
		<img className="pr-6 w-40 h-24" src={ item.image } alt="Product"/>
		<div className="flex flex-col">
			<div className="font-medium pb-1.5">{ item.name }</div>
			<div className="text-gray-800 pb-2">
				{ item.colorName }, { item.data.ram }
			</div>
			<div className="font-medium">{ formatCurrency(item.price) }</div>
		</div>
	</div>;

const OrderItems = ({ items }) =>
	items.map((item) =>
		<OrderItem key={ item.id } item={ item }/>);

export default OrderItems;
