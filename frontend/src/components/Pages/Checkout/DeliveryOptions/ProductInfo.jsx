import { formatPrice } from '../../../../helpers/priceHelper';

const ProductInfo = ({ item }) =>
	<div className="flex items-start space-x-4 mb-8">
		<div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
			<img
				src={ item.image }
				alt={ item.name }
				className="w-15 h-15 object-contain"
			/>
		</div>
		<div>
			<h2 className="font-semibold text-lg">{ item.name }</h2>
			<p className="text-gray-600 py-1">{ `${ item.color }, ${ item.data.storage }` }</p>
			<p className="font-medium">₹{ formatPrice(item.price) }</p>
		</div>
	</div>;

export default ProductInfo;
