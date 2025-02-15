import { useSelector } from 'react-redux';

const NoOrdersFound = () =>
	<div className="h-[70vh] text-center flex justify-center items-center">
		<p>You do not have any items in your Orders.</p>
	</div>;

const DisplayOrdersItems = ({ orders }) => orders.map((order) => <div key={ order._id }>
	<p>{ order.createdAt }</p>
</div>);

const OrderContainer = ({ orders }) => (orders.length > 0
	? <DisplayOrdersItems orders={ orders }/>
	: <NoOrdersFound/>);

const Orders = () => {
	const { orders } = useSelector((state) => state.orderState);

	return <div className="p-4 flex flex-col items-center">
		<h1 className="text-2xl font-bold text-gray-800 pt-4 leading-[45.5px]">Orders</h1>
		<OrderContainer { ...{ orders } }/>
	</div>;
};

export default Orders;
