import { CheckCircleIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { orderCompleted } from '../../../slice/cartSlice';

const HomePageButton = () =>
	<Link to="/">
		<button className="bg-primary-400 text-white px-6 py-2 rounded-lg
			hover:bg-primary-500 transition"
		>
			Go to Homepage
		</button>
	</Link>;

const OrderPlaced = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(orderCompleted());
	}, [dispatch]);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center
		bg-white-50 p-6 text-center"
		>
			<CheckCircleIcon className="text-green-500 w-20 h-20 mb-4"/>
			<h1 className="text-3xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
			<p className="text-gray-600 mb-6">
				Thank you for your purchase. Your order is being processed.
			</p>
			<HomePageButton/>
		</div>
	);
};

export default OrderPlaced;
