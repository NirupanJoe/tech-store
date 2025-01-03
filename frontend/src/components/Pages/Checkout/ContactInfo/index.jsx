import { Fragment } from 'react';
import SectionHeader from '../SectionHeader';
import ContactDetails from './ContactDetails';
import { useSelector } from 'react-redux';
import DeliveryOptions from '../DeliveryOptions';
import Payment from '../Payment';

const checkoutSteps = [
	{
		title: 'Contact Details',
		name: 'contactDetails',
		children: <ContactDetails/>,
	},
	{
		title: 'Delivery Options',
		name: 'deliveryOptions',
		children: <DeliveryOptions/>,
	},
	{
		title: 'Payment',
		name: 'payment',
		children: <Payment/>,
	},
];

const ContactInfo = () => {
	const { checkoutStep } = useSelector((state) => state.cartState);

	return <div>
		{ checkoutSteps.map((step, i) => <Fragment key={ step.name }>
			<SectionHeader
				title={ `${ i + 1 }. ${ step.title }` }
				className={ `py-4 ${ i !== checkoutStep && 'text-neutral-400' }` }
			/>
			{ i === checkoutStep && step?.children }
			{ i < checkoutSteps.length - 1 && <div className="border-b border-gray-300"/> }
		</Fragment>) }
	</div>;
};

export default ContactInfo;
