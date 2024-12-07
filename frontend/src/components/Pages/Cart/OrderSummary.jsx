/* eslint-disable max-lines-per-function */
import { CreditCard } from 'lucide-react';
import helper from '../../../services/helper';

const OrderSummary = ({ items }) => {
	const calculateTotal = () => items.reduce((total, item) => total + item.price, 0);

	return <div className="md:col-span-1">
		<div className="bg-white shadow-md rounded-lg p-6 sticky top-6">
			<h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
			<div className="space-y-2 mb-4">
				{ items.map((item) =>
					<div key={ item.id } className="flex justify-between">
						<span className="text-gray-600">{ item.name }</span>
						<span className="font-semibold">
							₹{ helper.formatPrice(item.price) }
						</span>
					</div>) }
			</div>
			<div className="border-t pt-4 mb-4">
				<div className="flex justify-between font-bold text-lg">
					<span>Total</span>
					<span>₹{ helper.formatPrice(calculateTotal()) }</span>
				</div>
			</div>
			<button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700
				transition duration-300 flex items-center justify-center space-x-2"
			>
				<CreditCard size={ 20 }/>
				<span>Proceed to Checkout</span>
			</button>
		</div>
	</div>;
};

export default OrderSummary;
