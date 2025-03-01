import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyOrder from '../../../assets/emptyOrder.png';
import { getOrders } from '../../../actions/orderActions';
import DisplayOrdersItems from './DisplayOrdersItems';
import Loader from '../../Loader';
import Error from '../Error';
import MetaData from '@MetaData';

const NoOrdersFound = () =>
	<div className="h-[50vh] text-center flex flex-col justify-center items-center">
		<img src={ EmptyOrder } alt="Empty Order" className="w-1/2"/>
		<p>You do not have any items in your Orders.</p>
	</div>;

const OrderContainer = ({ orders }) => (orders.length > 0
	? <DisplayOrdersItems orders={ orders }/>
	: <NoOrdersFound/>);

const RenderOrders = ({ orders }) =>
	<div className="p-4 flex flex-col items-center">
		<MetaData title="Orders"/>
		<h1 className="text-2xl font-bold text-gray-800 pt-4 leading-[45.5px]">Orders</h1>
		<OrderContainer { ...{ orders } }/>
	</div>;

const Orders = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOrders());
	}, [dispatch]);

	const { orders, loading, error } = useSelector((state) => state.orderState);

	return (
		loading
			? <Loader/>
			: error
				? <Error error={ error }/>
				: <RenderOrders orders={ orders }/>
	);
};

export default Orders;
