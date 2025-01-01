const DeliveryInfo = ({ selectedDate }) =>
	<div className="border-2 border-primary-500 font-medium rounded-lg p-4">
		<div className="flex justify-between items-center">
			<span>Free Delivery by { selectedDate }</span>
			<span className="text-primary-500 font-medium">FREE</span>
		</div>
	</div>;

export default DeliveryInfo;
