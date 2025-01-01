import { useMemo, useState } from 'react';
import generateDeliveryDates from '../../../../../helpers/generateDeliveryDates';
import DeliveryInfo from './DeliveryInfo';
import ChangeDeliveryDay from './ChangeDeliveryDay';

const DeliverySection = () => {
	const deliveryDates = useMemo(() => generateDeliveryDates(), []);
	const [selectedDate, setSelectedDate] = useState(deliveryDates[0].full);
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="space-y-4 text-sm">
			<h3 className="text-lg font-medium">Delivery</h3>
			<DeliveryInfo selectedDate={ selectedDate }/>
			<ChangeDeliveryDay
				deliveryDates={ deliveryDates }
				selectedDate={ selectedDate }
				onDateSelect={ setSelectedDate }
				isExpanded={ isExpanded }
				toggleExpand={ () => setIsExpanded(!isExpanded) }
			/>
		</div>
	);
};

export default DeliverySection;
