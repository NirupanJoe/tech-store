
import { useSelector } from 'react-redux';
import Header from './Header';
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';

const Cart = () => {
	const { items } = useSelector((state) => state.cartState);

	return (
		<div className="container mx-auto px-4 py-8 max-w-4xl">
			<Header items={ items }/>
			{ items.length === 0
				? <EmptyCart/>
				: <CartItems items={ items }/> }
		</div>
	);
};

export default Cart;
