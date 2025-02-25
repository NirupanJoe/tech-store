import { MapPin, Phone } from 'lucide-react';
import helper from '../../../../services/helper';

const DeliveryAddress = ({ address }) =>
	<div className="flex items-start gap-3">
		<MapPin size={ 20 } className="mt-1 flex-shrink-0"/>
		<div>
			<p className="font-medium mb-1 md:mb-2">Delivery Address</p>
			<p className="break-words">{ address }</p>
		</div>
	</div>;

const ContactNumber = ({ phoneNo }) =>
	<div className="flex items-start gap-3">
		<Phone size={ 20 } className="mt-1 flex-shrink-0"/>
		<div>
			<p className="font-medium mb-1 md:mb-2">Contact Number</p>
			<p>{ phoneNo }</p>
		</div>
	</div>;

const TotalAmount = ({ totalPrice }) =>
	<div className="mt-6 md:mt-8 flex justify-between items-center pt-4
	md:pt-6 border-t border-gray-200"
	>
		<span className="text-lg md:text-xl font-medium text-gray-900">Total Amount</span>
		<span className="text-xl md:text-2xl font-medium text-gray-900">
			{ helper.formatPrice(totalPrice) }
		</span>
	</div>;

const ShippingDetails = ({ order }) =>
	<div className="p-4 md:p-8">
		<h4 className="text-lg md:text-xl font-medium text-gray-900 mb-4 md:mb-6">
			Shipping Details
		</h4>
		<div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6
			text-sm md:text-lg text-gray-600"
		>
			<DeliveryAddress address={ order.shippingAddress.address }/>
			<ContactNumber phoneNo={ order.shippingAddress.phoneNo }/>
		</div>
		<TotalAmount totalPrice={ order.totalPrice }/>
	</div>;

export default ShippingDetails;
