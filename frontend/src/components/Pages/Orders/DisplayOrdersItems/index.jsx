import { MapPin, Phone, CreditCard } from 'lucide-react';

// const orders = [
// 	{
// 		_id: '67baf0e4ec0342ebe6bb35d6',
// 		shippingAddress: {
// 			address: 'asdfg sd, 1, qwe, undefined Chennai, Tamil Nadu, 600005',
// 			city: 'Chennai',
// 			postalCode: '600005',
// 			state: 'Tamil Nadu',
// 			country: 'India',
// 			phoneNo: '9874561230',
// 		},
// 		orderItems: [
// 			{
// 				_id: '67baf0e4ec0342ebe6bb35d7',
// 				productId: '6794ccd08e224888dc029197',
// 				variantId: '6794ccd08e224888dc02919c',
// 				name: 'Nebula Tab Y5',
// 				qty: 1,
// 				price: 59999.99,
// 				image: '/assets/tabY5/mint/image.png',
// 				storage: '128GB',
// 				ram: '6GB',
// 				color: '#c1d1a6',
// 				colorName: 'Mint Green',
// 			},
// 		],
// 		paymentMethod: 'Debit Card',
// 		totalPrice: 59999.99,
// 		isPaid: false,
// 		isDelivered: false,
// 		createdAt: '2025-02-23T09:56:52.755Z',
// 	},
// ];

const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
});

const formatPrice = (price) => new Intl.NumberFormat('en-IN', {
	style: 'currency',
	currency: 'INR',
}).format(price);

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

const OrderHeader = ({ order }) =>
	<div className="p-4 md:p-8 border-b border-gray-200">
		<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
			<div>
				<p className="text-sm md:text-lg text-gray-600">Order #{ order._id }</p>
				<p className="text-sm md:text-lg text-gray-600">{ formatDate(order.createdAt) }</p>
			</div>
			<span className={ `self-start md:self-auto px-3 md:px-6 py-1 md:py-2 rounded-full text-sm md:text-lg font-medium ${ getStatusColor(getOrderStatus(order.isPaid, order.isDelivered)) }` }>
				{ getOrderStatus(order.isPaid, order.isDelivered) }
			</span>
		</div>
		<div className="flex items-center gap-2 text-sm md:text-lg text-gray-600">
			<CreditCard size={ 20 }/>
			<span>{ order.paymentMethod }</span>
			<span className="mx-2">•</span>
			<span>{ order.isPaid ? 'Paid' : 'Payment Pending' }</span>
		</div>
	</div>
;

const OrderItemImage = ({ image, name }) =>
	<div className="w-full md:w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center">
		<img src={ image } alt={ name } className="w-32 h-32 object-contain"/>
	</div>
;

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
	</div>
;

const OrderItemPrice = ({ price }) =>
	<div className="text-right">
		<p className="text-xl md:text-2xl font-medium text-gray-900">{ formatPrice(price) }</p>
	</div>
;

const OrderItem = ({ item }) =>
	<div key={ item._id } className="p-4 md:p-8 border-b border-gray-200">
		<div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
			<OrderItemImage image={ item.image } name={ item.name }/>
			<OrderItemDetails item={ item }/>
			<OrderItemPrice price={ item.price }/>
		</div>
	</div>;

const ShippingDetails = ({ order }) =>
	<div className="p-4 md:p-8">
		<h4 className="text-lg md:text-xl font-medium text-gray-900 mb-4 md:mb-6">
			Shipping Details
		</h4>
		<div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6
			text-sm md:text-lg text-gray-600"
		>
			<DeliveryAddress address={ order.shippingAddress.address }/>
			<ContactNumber phoneNo={ order.shippingAddress.phoneNo }/>
		</div>
		<TotalAmount totalPrice={ order.totalPrice }/>
	</div>;

const DeliveryAddress = ({ address }) =>
	<div className="flex items-start gap-3">
		<MapPin size={ 20 } className="mt-1 flex-shrink-0"/>
		<div>
			<p className="font-medium mb-1 md:mb-2">Delivery Address</p>
			<p className="break-words">{ address }</p>
		</div>
	</div>;

const ContactNumber = ({ phoneNo }) =>
	<div className="flex items-start gap-3">
		<Phone size={ 20 } className="mt-1 flex-shrink-0"/>
		<div>
			<p className="font-medium mb-1 md:mb-2">Contact Number</p>
			<p>{ phoneNo }</p>
		</div>
	</div>
;

const TotalAmount = ({ totalPrice }) =>
	<div className="mt-6 md:mt-8 flex justify-between items-center pt-4
	md:pt-6 border-t border-gray-200"
	>
		<span className="text-lg md:text-xl font-medium text-gray-900">Total Amount</span>
		<span className="text-xl md:text-2xl font-medium text-gray-900">
			{ formatPrice(totalPrice) }
		</span>
	</div>;

const OrdersPageHeader = () =>
	<header className="bg-white shadow">
		<div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-4 md:py-8">
			<h1 className="text-2xl md:text-4xl font-bold text-gray-900">My Orders</h1>
		</div>
	</header>;

const OrdersList = ({ orders }) =>
	<div className="space-y-4 md:space-y-8">
		{ orders.map((order) =>
			<div key={ order._id } className="bg-white rounded-xl shadow-lg overflow-hidden">
				<OrderHeader order={ order }/>
				{ order.orderItems.map((item) =>
					<OrderItem key={ item._id } item={ item }/>) }
				<ShippingDetails order={ order }/>
			</div>) }
	</div>;

const OrdersPage = ({ orders }) =>
	<div className="min-h-screen bg-gray-50">
		<OrdersPageHeader/>
		<main className="max-w-screen-2xl mx-auto px-4 md:px-8 py-4 md:py-8">
			<OrdersList orders={ orders }/>
		</main>
	</div>;

export default OrdersPage;
