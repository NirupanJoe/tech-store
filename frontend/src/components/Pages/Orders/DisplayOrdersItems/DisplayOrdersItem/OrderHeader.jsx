import { CreditCard } from 'lucide-react';
import helper from '../../../../../services/helper';

const getOrderStatus = (isPaid, isDelivered) => {
	if(isDelivered)
		return 'Delivered';
	if(isPaid)
		return 'In Transit';
	return 'Processing';
};

const getStatusColor = (status) => {
	switch (status) {
	case 'Delivered':
		return 'bg-green-100 text-green-800';
	case 'In Transit':
		return 'bg-blue-100 text-blue-800';
	case 'Processing':
		return 'bg-yellow-100 text-yellow-800';
	default:
		return 'bg-gray-100 text-gray-800';
	}
};

const OrderInfo = ({ order }) =>
	<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
		<div>
			<p className="text-sm md:text-lg text-gray-600">Order #{ order._id }</p>
			<p className="text-sm md:text-lg text-gray-600">
				{ helper.formatDate(order.createdAt) }
			</p>
		</div>
		<span className={ `self-start md:self-auto px-3 md:px-6 py-1 md:py-2 rounded-full text-sm md:text-lg font-medium
			${ getStatusColor(getOrderStatus(order.isPaid, order.isDelivered)) }` }
		>
			{ getOrderStatus(order.isPaid, order.isDelivered) }
		</span>
	</div>;

const OrderPayment = ({ order }) =>
	<div className="flex items-center gap-2 text-sm md:text-lg text-gray-600">
		<CreditCard size={ 20 }/>
		<span>{ order.paymentMethod }</span>
		<span className="mx-2">•</span>
		<span>{ order.isPaid ? 'Paid' : 'Payment Pending' }</span>
	</div>;

const OrderHeader = ({ order }) =>
	<div className="p-4 md:p-8 border-b border-gray-200">
		<OrderInfo order={ order }/>
		<OrderPayment order={ order }/>
	</div>;

export default OrderHeader;
