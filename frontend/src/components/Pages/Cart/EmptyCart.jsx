import HomePageButton from '../../HomePageButton';

const EmptyCart = () =>
	<div className="text-center py-10">
		<p className="text-xl mb-6 text-gray-500">Your cart is empty</p>
		<HomePageButton/>
	</div>;

export default EmptyCart;
