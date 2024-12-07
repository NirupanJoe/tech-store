/* eslint-disable max-lines-per-function */
import { Trash2 as Trash } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../../slice/cartSlice';
import OrderSummary from './OrderSummary';
import helper from '../../../services/helper';

const CartItems = ({ items }) => {
	const dispatch = useDispatch();

	return <div className="grid md:grid-cols-3 gap-6">
		<div className="md:col-span-2 space-y-4">
			{ items.map((item) =>
				<div
					key={ item.id }
					className="bg-white shadow-md rounded-lg p-4 flex
					items-center space-x-4 relative"
				>
					<img
						src={ item.image }
						alt={ item.name }
						className="w-24 h-24 object-cover rounded-md"
					/>
					<div className="flex-grow">
						<h3 className="text-lg font-semibold text-gray-800">{ item.name }</h3>
						<p className="text-sm text-gray-500">{ item.color }</p>
						<p className="text-blue-600 font-bold">
							₹{ helper.formatPrice(item.price) }
						</p>
					</div>
					<button
						onClick={ () => dispatch(removeCartItem(item.id)) }
						className="absolute top-2 right-2 text-red-500 hover:text-red-700"
					>
						<Trash size={ 20 }/>
					</button>
				</div>) }
		</div>
		<OrderSummary items={ items }/>
	</div>;
};

export default CartItems;
