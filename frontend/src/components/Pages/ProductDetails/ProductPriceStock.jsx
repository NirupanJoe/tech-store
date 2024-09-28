const ProductHeading = ({ product: { name }, selectedColor, selectedStorage, selectedMemory }) =>
	<h2 className="font-semibold mb-2">
		{ name } | { selectedColor } | { selectedStorage } | { selectedMemory }
	</h2>;

const PriceDetails = ({ discountedPrice, price, discount }) =>
	<div className="mt-3">
		<p className="text-sm">MRP (Inclusive of all taxes)</p>
		<p className="text-sm mt-2 font-semibold">₹{ discountedPrice }</p>
		<p className="text-gray-400 line-through text-sm">₹{ price }</p>
		<p className="text-primary-500 text-sm mt-1">Save ₹{ discount }</p>
	</div>;

const StockStatus = ({ product: { stock }}) =>
	<p className={ `text-sm ${ stock > 0 ? 'text-green-500' : 'text-red-500' }` }>
		{ stock <= 0 ? 'Out of Stock' : '' }
	</p>;

const AddToCartButton = ({ product: { stock }}) =>
	<button
		className={ `w-full mt-4 px-4 py-2 bg-primary-600 text-white rounded ${
			stock > 0 ? '' : 'opacity-50 cursor-not-allowed'
		}` }
		disabled={ stock === 0 }
	>
		{ stock > 0 ? 'Add to cart' : 'Out of stock' }
	</button>;

const ProductPriceStock = ({ selectedVariant, ...props }) =>
	<div className="bg-gray-100 p-4 rounded-lg mb-4">
		<ProductHeading { ...props }/>
		<PriceDetails { ...selectedVariant }/>
		<StockStatus { ...props }/>
		<AddToCartButton { ...props }/>
	</div>;

export default ProductPriceStock;