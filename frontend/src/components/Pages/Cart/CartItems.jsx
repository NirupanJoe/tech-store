import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../../slice/cartSlice';
import OrderSummary from './OrderSummary';
import CartItem from './CartItem';

const CartItemList = ({ items, dispatch }) =>
	<div className="md:col-span-2 space-y-4">
		{ items.map((item) =>
			<CartItem
				key={ item.id }
				item={ item }
				onRemove={ () => dispatch(removeCartItem(item.id)) }
			/>) }
	</div>;

const CartItems = ({ items }) => {
	const dispatch = useDispatch();

	return (
		<div className="grid md:grid-cols-3 gap-6">
			<CartItemList items={ items } dispatch={ dispatch }/>
			<OrderSummary items={ items }/>
		</div>
	);
};

export default CartItems;
