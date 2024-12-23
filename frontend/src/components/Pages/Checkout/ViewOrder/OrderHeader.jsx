import { Pencil } from 'lucide-react';

const EditButton = () =>
	<button className="text-black flex items-baseline">
		<Pencil size={ 14 } strokeWidth={ 1 } className="inline"/>
		<span className="pl-1 font-medium text-sm color-black">Edit</span>
	</button>;

const OrderHeader = ({ itemCount }) =>
	<div className="flex justify-between items-center pb-6">
		<div className="text-gray-800">{ `You have ${ itemCount } items in your cart` }</div>
		<EditButton/>
	</div>;

export default OrderHeader;
