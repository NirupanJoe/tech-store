import { useSelector } from 'react-redux';
import OrderItems from './OrderItems';
import OrderHeader from './OrderHeader';
import PriceBreakup from './PriceBreakup';
import TotalSection from './TotalSection';

const ViewOrder = () => {
	const { items } = useSelector((state) => state.cartState);

	return (
		<div className="order-first md:order-none p-4 border border-gray-300 rounded-lg">
			<h1 className="text-xl font-medium text-black pb-3">View Order</h1>
			<OrderHeader itemCount={ items.length }/>
			<OrderItems items={ items }/>
			<PriceBreakup items={ items }/>
			<TotalSection items={ items }/>
		</div>
	);
};

export default ViewOrder;
