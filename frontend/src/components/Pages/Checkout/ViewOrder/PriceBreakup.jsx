import { formatCurrency, getTotalDiscount, getTotalPrice } from '../../../../helpers/priceHelper';

const PriceBreakup = ({ items }) =>
	<div className="pb-6 mb-6 border-b border-gray-300">
		<h2 className="py-2 text-lg font-medium text-gray-800">Price Breakup</h2>
		<div className="flex justify-between">
			<p>Price (Inclusive of all taxes)</p>
			<p className="pl-2 font-medium">{ formatCurrency(getTotalPrice(items)) }</p>
		</div>
		<div className="flex justify-between">
			<p>Discount</p>
			<p className="pl-2 font-medium">
				- { formatCurrency(getTotalDiscount(items)) }
			</p>
		</div>
		<div className="flex justify-between">
			<p>Shipping Charges</p>
			<p className="pl-2 font-medium">{ formatCurrency(0) }</p>
		</div>
	</div>;

export default PriceBreakup;
