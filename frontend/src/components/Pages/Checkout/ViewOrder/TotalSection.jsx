import {
	formatPrice,
	getTotalPrice,
	getTotalDiscount,
	getTotal,
} from '../../../../helpers/priceHelper';

const TotalSection = ({ items }) => {
	const totalPrice = getTotalPrice(items);
	const totalDiscount = getTotalDiscount(items);
	const total = getTotal(items);

	return (
		<div>
			<div className="flex justify-between text-3xl font-medium">
				<p>Total</p>
				<p className="pl-2">₹{ formatPrice(total) }</p>
			</div>
			<div className="flex justify-between items-center">
				<div className="text-gray-800 text-sm pt-2">Includes GST*</div>
				<div className="text-gray-800 text-xs">
					<span className="pr-2 line-through">₹{ formatPrice(totalPrice) }</span>
					<span className="font-bold">save ₹{ formatPrice(totalDiscount) }</span>
				</div>
			</div>
		</div>
	);
};

export default TotalSection;
