import { ShoppingCart } from 'lucide-react';
import MetaData from '../../../MetaData';

const Header = ({ items }) =>
	<div className="flex justify-between items-center mb-6">
		<MetaData title="Cart | Home"/>
		<h1 className="text-3xl font-bold text-gray-800 flex items-center">
			<ShoppingCart className="mr-3 text-blue-600" size={ 32 }/>
			Your Cart
		</h1>
		<span className="text-lg font-semibold text-gray-600">
			{ items.length } items
		</span>
	</div>;

export default Header;
