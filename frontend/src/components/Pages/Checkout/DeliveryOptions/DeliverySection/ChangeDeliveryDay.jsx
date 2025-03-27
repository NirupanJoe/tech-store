import { Calendar } from 'lucide-react';
import { Fragment } from 'react';

const deliveryOptionsSlice = 3;

const DeliveryOptionsList = ({ dates, selectedDate, onDateSelect, isExpanded }) => !isExpanded
	&& dates.map((date) =>
		<button
			key={ date.full }
			onClick={ () => onDateSelect(date.full) }
			className={ `w-full p-4 text-left my-1.5 rounded-lg border-2 transition-colors ${
				selectedDate === date.full
					? 'border-primary-500 font-medium'
					: 'border-gray-200 hover:border-primary-300'
			}` }
		>
			{ date.full }
		</button>);

const SeeMoreButton = ({ toggleExpand }) =>
	<button
		onClick={ toggleExpand }
		className="w-full p-4 my-1.5 text-left rounded-lg border border-gray-200
			hover:border-gray-300 flex justify-between items-center"
	>
		<span>See more delivery slots</span>
		<Calendar className="w-5 h-5 text-gray-500"/>
	</button>;

const ChangeDeliveryDay = ({ deliveryDates, toggleExpand, isExpanded, ...props }) =>
	<Fragment>
		<h4 className="text-lg font-medium mb-3">Change delivery day</h4>
		<div className="pb-5">
			<DeliveryOptionsList
				dates={ deliveryDates.slice(0, deliveryOptionsSlice) }
				{ ...props }
			/>
			<SeeMoreButton { ...{ toggleExpand } }/>
			<DeliveryOptionsList
				isExpanded={ !isExpanded }
				dates={ deliveryDates.slice(deliveryOptionsSlice) }
				{ ...props }
			/>
		</div>
	</Fragment>;

export default ChangeDeliveryDay;
