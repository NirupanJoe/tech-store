const ShipmentInfo = ({ index, total }) =>
	<div className="pb-3 text-gray-600 text-sm">
		Shipment { index + 1 } of { total }
	</div>;

export default ShipmentInfo;
