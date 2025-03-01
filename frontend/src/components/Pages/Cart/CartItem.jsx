import { Trash2 as Trash } from 'lucide-react';
import helper from '../../../services/helper';

const CartItemImage = ({ src, alt }) =>
	<img
		src={ src }
		alt={ alt }
		className="w-24 h-24 object-cover rounded-md"
	/>;

const CartItemDetails = ({ name, colorName, price }) =>
	<div className="flex-grow">
		<h3 className="text-lg font-semibold text-gray-800">{ name }</h3>
		<p className="text-sm text-gray-500">{ colorName }</p>
		<p className="text-primary-600 font-bold">{ helper.formatPrice(price) }</p>
	</div>;

const CartItemRemoveButton = ({ onRemove }) =>
	<button
		onClick={ onRemove }
		className="absolute top-2 right-2 text-red-500 hover:text-red-700"
	>
		<Trash size={ 20 }/>
	</button>;

const CartItem = ({ item, onRemove }) =>
	<div
		key={ item.id }
		className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 relative"
	>
		<CartItemImage src={ item.image } alt={ item.name }/>
		<CartItemDetails { ... item }/>
		<CartItemRemoveButton onRemove={ onRemove }/>
	</div>;

export default CartItem;
